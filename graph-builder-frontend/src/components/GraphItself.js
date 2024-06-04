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
} from "chart.js";

const GraphItself = ({ currentGraph }) => {
  const { categories, xAxisValues } = currentGraph;

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const data = {
    labels: categories,
    datasets: [
      {
        label: "Dataset 1",
        data: categories.map((_, i) => currentGraph.xAxisValues[i]),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="w-1/2 h-[900px]">
      <Bar options={options} data={data} />
    </div>
  );
};

export default GraphItself;
