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

// Register the necessary components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ["Accounting", "Customer Service", "Human Resource", "Purchase"],
  datasets: [
    {
      label: "Expenses",
      data: [300, 450, 800, 350],
      backgroundColor: ["#4caf50", "#f44336", "#4caf50", "#f44336"],
      borderRadius: 5,
    },
  ],
};

function OperatingExpensesBarChart() {
  return (
    <Card sx={{ backgroundColor: "#1E1E20", color: "#fff" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Operating Expenses
        </Typography>
        <Bar
          data={data}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: true,
                labels: { color: "#fff" },
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
          }}
        />
      </CardContent>
    </Card>
  );
}

export default OperatingExpensesBarChart;
