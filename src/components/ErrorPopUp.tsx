import React from "react";

interface ErrorPopUpProps {
  Errormsg: string;
  onClose: () => void;
}

const ErrorpopUp: React.FC<ErrorPopUpProps> = ({ Errormsg, onClose }) => {
  return (
    <div className="popup bg-white p-8 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Error</h2>
      <p>{Errormsg}</p>
      <button
        onClick={onClose}
        className="mt-4 w-full bg-gray-500 text-white py-2 rounded"
      >
        Close
      </button>
    </div>
  );
};

export default ErrorpopUp;
