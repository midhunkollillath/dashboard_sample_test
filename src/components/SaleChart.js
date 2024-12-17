import React from "react";
import { Bar } from "react-chartjs-2";
import { Card, CardContent, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Sales",
      data: [500, 300, 800, 400, 700, 600, 900, 450, 350, 972, 600, 720],
      backgroundColor: "#4caf50",
      borderRadius: 5,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      labels: {
        color: "#fff", // Legend text color
      },
    },
    tooltip: {
      backgroundColor: "#333",
      titleColor: "#fff",
      bodyColor: "#fff",
    },
  },
  scales: {
    x: {
      ticks: { color: "#fff" },
      grid: { color: "rgba(255, 255, 255, 0.1)" },
    },
    y: {
      beginAtZero: true,
      ticks: { color: "#fff" },
      grid: { color: "rgba(255, 255, 255, 0.1)" },
    },
  },
};

function SalesTargetChart() {
  return (
    <Card sx={{ backgroundColor: "#1E1E20", color: "#fff" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Company Sales Target
        </Typography>
        <Bar data={data} options={options} />
      </CardContent>
    </Card>
  );
}

export default SalesTargetChart;
