import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EducatorDashboard from "./pages/EducatorDashboard";
import PerformanceSection from "./components/PerformanceSection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EducatorDashboard />} />
        <Route path="/performance" element={<PerformanceSection/>} />
      </Routes>
    </Router>
  );
}

export default App;
