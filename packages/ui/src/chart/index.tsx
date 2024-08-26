import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import { ReportChartType } from '@st-fly/types';

type ChartProps = {
  data: ReportChartType;
};

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Chart = ({ data }: ChartProps) => {
  const options = {
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
      tooltip: {
        titleColor: 'white',
        bodyColor: 'lightgreen',
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white',
        },
      },
      y: {
        ticks: {
          color: 'white',
        },
      },
    },
  };

  return (
    <Bar data={data} options={options} />
  );
}
