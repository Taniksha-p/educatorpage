import React from "react";

const Sidebar = ({ setActiveTab }) => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen">
      <ul>
        <li
          className="p-4 hover:bg-gray-700 cursor-pointer"
          onClick={() => setActiveTab("upload")}
        >
          Upload
        </li>
        <li
          className="p-4 hover:bg-gray-700 cursor-pointer"
          onClick={() => setActiveTab("performance")}
        >
          Performance
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
