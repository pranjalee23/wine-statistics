import React from "react";
import StatisticsTable from "./components/StatisticsTable";
import wineData from "./data/wineData.json";
import { calculateGamma, calculateClassWiseStatistics } from "./utils/statistics";
import "./App.css";

function App() {
  // Calculate Gamma for the entire dataset
  const dataWithGamma = calculateGamma(wineData);

  // Calculate class-wise Flavonoids statistics
  const flavonoidStatistics = calculateClassWiseStatistics(wineData, "Flavanoids");

  // Calculate class-wise Gamma statistics
  const gammaStatistics = calculateClassWiseStatistics(dataWithGamma, "Gamma");

  return (
    <div className="App">
      <h1>Wine Statistics</h1>
      <StatisticsTable data={flavonoidStatistics} title="Flavanoids" />
      <StatisticsTable data={gammaStatistics} title="Gamma" />
    </div>
  );
}

export default App;
