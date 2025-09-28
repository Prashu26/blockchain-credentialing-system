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
        labels: {
          color: '#0096C7',
          font: {
            size: 12,
            weight: 'bold'
          }
        }
      },
      title: {
        display: !!title,
        text: title,
        color: '#0096C7',
        font: {
          size: 16,
          weight: 'bold'
        }
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#0096C7',
        },
        grid: {
          color: 'rgba(0, 150, 199, 0.2)',
        },
      },
      y: {
        ticks: {
          color: '#0096C7',
        },
        grid: {
          color: 'rgba(0, 150, 199, 0.2)',
        },
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
    <div className="backdrop-blur-sm rounded-2xl p-6 shadow-lg transition-all duration-300 border" 
         style={{
           background: 'rgba(255, 255, 255, 0.1)',
           borderColor: 'rgba(0, 150, 199, 0.3)',
           boxShadow: '0 8px 32px rgba(0, 150, 199, 0.2)'
         }}>
      <div className="h-80">
        {renderChart()}
      </div>
    </div>
  );
};

export default Chart;
