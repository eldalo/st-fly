import styles from './app.module.css';
import { useEffect, useState } from 'react';

import { fetchCoinData } from '@st-fly/shared';
import { ReportChartType } from '@st-fly/types';
import { Chart, ScreenLoading } from '@st-fly/ui';

export function App() {
  const [chartData, setChartData] = useState<ReportChartType | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCoinData();
        console.log({ data })
        const mappedData: ReportChartType = {
          labels: data.map(({ name }: { name: string }) => name),
          datasets: [
            {
              label: 'Market Cap (USD)',
              data: data.map(({ market_cap }: { market_cap: string }) => market_cap),
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
          ],
        };
        console.log({ mappedData })
        setChartData(mappedData);
      } catch (error) {
        console.error('Error loading chart data:', error);
      }
    };

    loadData();
  }, []);

  return (
    <section className={styles.wrapper}>
      <h2 className="title-section">
        Reports <i className="icon-Atom_Icon-Filters" />
      </h2>
      <section className={styles.container}>
        {chartData ? <Chart data={chartData} /> : <ScreenLoading />}
      </section>
    </section>
  );
}

export default App;
