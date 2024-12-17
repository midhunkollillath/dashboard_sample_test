import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register components
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Promoters", "Passives", "Detractors"],
  datasets: [
    {
      data: [75, 13.5, 11.5],
      backgroundColor: ["#4caf50", "#FFC107", "#f44336"],
      hoverBackgroundColor: ["#66bb6a", "#FFD54F", "#e57373"],
    },
  ],
};

function CustomerSatisfactionChart() {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Customer Satisfaction</h3>
      <Doughnut data={data} />
    </div>
  );
}

export default CustomerSatisfactionChart;
