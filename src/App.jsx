import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import "@fortawesome/fontawesome-free/css/all.css";
import Materials from "./pages/Materials";
import Contact from "./pages/Contact"; // Import the Contact component

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
