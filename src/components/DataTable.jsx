// DataTable.jsx
import React from "react";

const DataTable = ({ data }) => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
