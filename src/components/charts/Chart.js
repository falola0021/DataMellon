import React from 'react';
import salesData from '../../services/salesData';
import BarChart from './Bar';

export default function chart() {
  const { errormessage, sales, loading } = salesData();
  return (
    <div>
      <BarChart loading={loading} sales={sales} errormessage={errormessage} />
    </div>
  );
}
