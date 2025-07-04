import React from "react";

const ThankYouModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl p-8 shadow-lg max-w-md text-center">
        <h2 className="text-2xl font-bold text-[#0F1F44] mb-4">Thank You!</h2>
        <p className="text-gray-700 mb-6">Your message has been successfully sent.</p>
        <button
          onClick={onClose}
          className="bg-[#D6BA73] hover:bg-[#c4a957] text-white font-semibold py-2 px-6 rounded-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ThankYouModal;
