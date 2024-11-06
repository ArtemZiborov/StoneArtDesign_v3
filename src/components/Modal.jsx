import PropTypes from "prop-types";

// Modal component definition
function Modal({ isOpen, onClose, title, children }) {
  // If the modal is not open, return null (do not render anything)
  if (!isOpen) return null;

  return (
    // Modal overlay
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      {/* Modal content container */}
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-lg w-full">
        {/* Modal header */}
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">{title}</h2>
          {/* Close button */}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>
        {/* Modal body */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

// PropTypes validation for the Modal component
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Boolean to control the visibility of the modal
  onClose: PropTypes.func.isRequired, // Function to handle closing the modal
  title: PropTypes.string.isRequired, // Title of the modal
  children: PropTypes.node.isRequired, // Content to be displayed inside the modal
};

export default Modal;
