import { BrowserRouter, Route, Routes } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import "./App.css";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import "@fortawesome/fontawesome-free/css/all.css";
import Materials from "./pages/Materials";
import Contact from "./pages/Contact"; // Import the Contact component

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDeFjK91YmK65VR1pFQTN6jYa_pP0rEZao",
  authDomain: "stoneartdesign-6eab7.firebaseapp.com",
  projectId: "stoneartdesign-6eab7",
  storageBucket: "stoneartdesign-6eab7.firebasestorage.app",
  messagingSenderId: "798755352924",
  appId: "1:798755352924:web:069091140fa4b40f6f5199",
  measurementId: "G-TCYXMCTRRR",
});
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="materials" element={<Materials />} />
        <Route path="contact" element={<Contact />} />{" "}
        {/* Add the Contact route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
