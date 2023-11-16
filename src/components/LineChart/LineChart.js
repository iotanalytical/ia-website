import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  elements: {
    line: {
      tension: 0.4,
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
  },
};

export function LineChart({ chartData }) {
  return <Line options={options} data={chartData} />;
}
