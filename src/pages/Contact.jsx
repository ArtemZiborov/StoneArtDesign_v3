import { useState, useEffect } from "react";
import PageNav from "../components/PageNav";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
    file: null,
  });

  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    const storage = getStorage();
    const db = getFirestore();
    const functions = getFunctions();

    let fileURL = "";

    if (formData.file) {
      const storageRef = ref(storage, `uploads/${formData.file.name}`);
      await uploadBytes(storageRef, formData.file);
      fileURL = await getDownloadURL(storageRef);
    }

    await addDoc(collection(db, "contacts"), {
      name: formData.name,
      email: formData.email,
      telephone: formData.telephone,
      message: formData.message,
      fileURL,
    });

    const sendEmail = httpsCallable(functions, "sendEmail");
    await sendEmail({
      name: formData.name,
      email: formData.email,
      telephone: formData.telephone,
      message: formData.message,
      fileURL,
    });

    alert("Your message has been sent!");
    setFormData({
      name: "",
      email: "",
      telephone: "",
      message: "",
      file: null,
    });
    setUploading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <PageNav />
      <div className="container mx-auto py-8 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-700 mb-4">
            We are happy to answer your questions and provide a price quote.
            Please fill out the form below, and we will get back to you as soon
            as possible.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="telephone">
                Telephone
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="file">
                Upload File
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              disabled={uploading}
            >
              {uploading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
