import React from "react";

interface Props {
  data: { [key: string]: { Mean: number; Median: number; Mode: number | number[] } };
  title: string;
}

const StatisticsTable: React.FC<Props> = ({ data, title }) => {
  const classes = Object.keys(data); // Extract class names from object keys

  const renderMode = (mode: number | number[]) => {
    if (Array.isArray(mode)) {
      // Take the first three mode values, round them to 3 decimal places, and join them with a comma
      const firstThreeModes = mode.slice(0, 3).map((m) => Math.round(m * 1000) / 1000);
      return firstThreeModes.join(", ");
    } else {
      return Math.round(mode * 1000) / 1000; // Round the single mode to 3 decimal places
    }
  };

  return (
    <div>
      <h2>{title} Statistics</h2>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {classes.map((cls) => (
              <th key={cls}>{cls}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{title} Mean</td>
            {classes.map((cls) => (
              <td key={cls}>{data[cls].Mean}</td>
            ))}
          </tr>
          <tr>
            <td>{title} Median</td>
            {classes.map((cls) => (
              <td key={cls}>{data[cls].Median}</td>
            ))}
          </tr>
          <tr>
            <td>{title} Mode</td>
            {classes.map((cls) => (
              <td key={cls}>{renderMode(data[cls].Mode)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default StatisticsTable;
