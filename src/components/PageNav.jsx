import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png"; // Adjust the path as necessary

function PageNav() {
  // State to manage the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo and site title */}
        <div className="flex items-center space-x-4">
          <NavLink to="/">
            <img src={logo} alt="Stone Art Design Logo" className="h-10 w-10" />
          </NavLink>
          <h1 className="text-2xl font-bold text-white">Stone Art Design</h1>
        </div>
        {/* Contact information */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span className="text-white flex items-center">
            <i className="fas fa-phone-alt mr-2"></i>+44 7563 366199
          </span>
          <NavLink to="/contact" className="text-white flex items-center">
            <i className="fas fa-envelope mr-2"></i>
            stoneartspecialists@gmail.com
          </NavLink>
        </div>
        {/* Hamburger menu button for mobile view */}
        <button
          className="text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars h-6 w-6"></i>
        </button>
        {/* Navigation links */}
        <div
          className={`w-full md:flex md:items-center md:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-white font-bold" : "text-gray-400"
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive ? "text-white font-bold" : "text-gray-400"
                }
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-white font-bold" : "text-gray-400"
                }
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive ? "text-white font-bold" : "text-gray-400"
                }
                onClick={() => setIsOpen(false)}
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/materials"
                className={({ isActive }) =>
                  isActive ? "text-white font-bold" : "text-gray-400"
                }
                onClick={() => setIsOpen(false)}
              >
                Materials
              </NavLink>
            </li>
          </ul>
          {/* Social media links */}
          <div className="flex space-x-4 ml-4 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/share/9ZUDxR6r2LqBTY4p/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              title="Follow us on Facebook"
            >
              <i className="fa-brands fa-facebook h-4 w-4"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              title="Follow us on Instagram"
            >
              <i className="fab fa-instagram h-6 w-6"></i>
            </a>
            <a
              href="https://noblestone.uk/visualizer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              title="Product Visualization"
            >
              <i className="fas fa-eye h-6 w-6"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default PageNav;
