import React from "react";

interface PopUpDashboardProps {
  ForcedReload: () => void;
  onClose: () => void;
}

const PopUpDashboard: React.FC<PopUpDashboardProps> = ({
  ForcedReload,
  onClose,
}) => {
  return (
    <div className="popup bg-white p-8 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
      <form onSubmit={ForcedReload}>
        <input
          type="text"
          placeholder="Project Title"
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="date"
          placeholder="Deadline"
          className="w-full mb-4 p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Add Project
        </button>
      </form>
      <button
        onClick={onClose}
        className="mt-4 w-full bg-gray-500 text-white py-2 rounded"
      >
        Close
      </button>
    </div>
  );
};

export default PopUpDashboard;
