import PageNav from "../components/PageNav";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server or email service
    // For this example, we'll just log it to the console
    console.log("Form submitted:", formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", telephone: "", message: "" });
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
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
