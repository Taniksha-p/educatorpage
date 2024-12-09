import React from "react";
import FileUpload from "../components/FileUpload";

const UploadSection = () => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Upload Questions or Resources</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Select Type:</label>
          <select className="w-full mt-2 p-2 border rounded">
            <option value="pdf">PDF</option>
            <option value="mcq">MCQ</option>
            <option value="descriptive">Descriptive</option>
          </select>
        </div>
        <FileUpload />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadSection;
