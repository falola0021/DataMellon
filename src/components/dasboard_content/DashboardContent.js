import React from 'react';
import Styles from './DashboardContent.module.css';
import Chart from '../charts/Chart';

export default function DashboardContent() {
  return (
    <div>
      <div className={Styles.title}>Dashboard</div>
      <div className={Styles.chart}>
        <Chart />
      </div>
    </div>
  );
}
