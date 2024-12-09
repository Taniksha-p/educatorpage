// PerformanceSection.jsx
import React from "react";
import ChartComponent from "./ChartComponent";
import DataTable from "./DataTable";

const PerformanceSection = () => {
  // Sample data (replace with real data fetching logic)
  const studentPerformance = [
    { name: "John Doe", score: 85 },
    { name: "Jane Smith", score: 90 },
    { name: "Mark Taylor", score: 70 },
  ];
   
  const chartData = {
    labels: ["John Doe", "Jane Smith", "Mark Taylor"],
    datasets: [
      {
        label: "Scores",
        data: [85, 90, 70],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="performance-section">
      <h2>Performance Overview</h2>
      <div className="chart-container">
        <ChartComponent chartData={chartData} />
      </div>
      <div className="table-container">
        <DataTable data={studentPerformance} />
      </div>
    </div>
  );
};

export default PerformanceSection;
