import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";

const GraphItself = ({ currentGraph }) => {
  const computedStyle = getComputedStyle(document.documentElement);
  const bgColorSecondary = computedStyle
    .getPropertyValue("--bg-secondary")
    .trim();

  const { categories, xAxisValues, title, yAxisLabel, xAxisLabel } =
    currentGraph;

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: title,
        font: {
          size: 30,
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: xAxisLabel,
          font: {
            size: 20,
          },
        },
        grid: {
          color: bgColorSecondary,
        },
      },
      y: {
        title: {
          display: true,
          text: yAxisLabel,
          font: {
            size: 20,
          },
        },
        grid: {
          color: bgColorSecondary,
        },
      },
    },
  };

  const data = {
    labels: categories,
    datasets: [
      {
        label: "",
        data: categories.map((_, i) => xAxisValues[i]),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="w-4/5 h-[900px] pt-9">
      <Bar options={options} data={data} />
    </div>
  );
};

export default GraphItself;
