import React from "react";

const Templates = () => {
  return (
    <div className="bg-gray-100 p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Download Templates</h2>
      <ul className="list-disc pl-5">
        <li>Booking Forms</li>
        <li>Maintenance Checklists</li>
        <li>Guest Communication Guides</li>
      </ul>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Download All Templates
      </button>
    </div>
  );
};

export default Templates;
