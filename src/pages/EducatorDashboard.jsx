import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import UploadSection from "./UploadSection";
import PerformanceSection from "../components/PerformanceSection";

const EducatorDashboard = () => {
  const [activeTab, setActiveTab] = useState("upload");

  const renderContent = () => {
    switch (activeTab) {
      case "upload":
        return <UploadSection />;
      case "performance":
        return <PerformanceSection />;
      default:
        return <UploadSection />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="flex flex-col flex-grow">
        <Header />
        <main className="p-6 bg-gray-100">{renderContent()}</main>
      </div>
    </div>
  );
};

export default EducatorDashboard;
