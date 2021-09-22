import React from 'react';
import Styles from './Chart.module.css';
import salesData from '../../services/salesData';
import BarChart from './Bar';
import PieChart from './Pie';
import LineChart from './Line';
import ComponentBarChart from './ComponentBar';
export default function chart() {
  const { errormessage, sales, loading } = salesData();
  return (
    <div>
      <div className={Styles.chartbox}>
        <div className={Styles.chart}>
          <BarChart
            loading={loading}
            sales={sales}
            errormessage={errormessage}
          />
        </div>
        <div className={Styles.chart}>
          <PieChart
            loading={loading}
            sales={sales}
            errormessage={errormessage}
          />
        </div>
      </div>
      <div className={Styles.chartbox}>
        <div className={Styles.chart}>
          <LineChart
            loading={loading}
            sales={sales}
            errormessage={errormessage}
          />
        </div>
        <div className={Styles.chart}>
          <ComponentBarChart
            loading={loading}
            sales={sales}
            errormessage={errormessage}
          />
        </div>
      </div>
    </div>
  );
}
