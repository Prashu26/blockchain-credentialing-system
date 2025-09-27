import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Chart = ({ type, data, options, title }) => {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: !!title,
        text: title,
      },
    },
    ...options,
  };

  const renderChart = () => {
    switch (type) {
      case 'bar':
        return <Bar data={data} options={defaultOptions} />;
      case 'pie':
        return <Pie data={data} options={defaultOptions} />;
      case 'line':
        return <Line data={data} options={defaultOptions} />;
      default:
        return <Bar data={data} options={defaultOptions} />;
    }
  };

  return (
    <div className="dashboard-card">
      <div className="h-80">
        {renderChart()}
      </div>
    </div>
  );
};

export default Chart;
