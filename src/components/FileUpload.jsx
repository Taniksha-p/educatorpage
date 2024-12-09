import React from "react";

const FileUpload = () => {
  return (
    <div className="border-2 border-dashed p-6 text-center">
      <input type="file" className="hidden" id="file-upload" />
      <label
        htmlFor="file-upload"
        className="cursor-pointer bg-gray-200 p-2 rounded"
      >
        Drag and drop files or click to upload
      </label>
    </div>
  );
};

export default FileUpload;
