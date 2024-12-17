import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

// Register required components
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Sales Target",
      data: [400, 500, 300, 800, 900, 450, 350, 972, 720, 600, 400, 900],
      borderColor: "#4caf50",
      backgroundColor: "#66bb6a",
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};

function CompanySalesLineChart() {
  return (
    <div>
      <h3>Company Sales Target</h3>
      <Line data={data} />
    </div>
  );
}

export default CompanySalesLineChart;
