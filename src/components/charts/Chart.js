import React from 'react';
import Styles from './Chart.module.css';
import salesData from '../../services/salesData';
import BarChart from './Bar';
import PieChart from './Pie';
import LineChart from './Line';
import ComponentBarChart from './ComponentBar';
export default function chart() {
  const { errormessage, sales, loading } = salesData();
  const firstYearSales = [];
  const secondYearSales = [];
  const thirdYearSales = [];
  const fourthYearSales = [];

  sales.filter(function (sale) {
    if (sale['Order Date'].includes('/2014')) {
      return firstYearSales.push(sale);
    } else if (sale['Order Date'].includes('/2015')) {
      return secondYearSales.push(sale);
    } else if (sale['Order Date'].includes('/2016')) {
      return thirdYearSales.push(sale);
    } else if (sale['Order Date'].includes('/2017')) {
      return fourthYearSales.push(sale);
    } else {
      return;
    }
  });
  return (
    <div>
      <div className={Styles.chartbox}>
        <div className={Styles.chart}>
          <BarChart
            loading={loading}
            firstYearSales={firstYearSales}
            secondYearSales={secondYearSales}
            thirdYearSales={thirdYearSales}
            fourthYearSales={fourthYearSales}
            errormessage={errormessage}
          />
        </div>
        <div className={Styles.chart}>
          <PieChart
            loading={loading}
            firstYearSales={firstYearSales}
            secondYearSales={secondYearSales}
            thirdYearSales={thirdYearSales}
            fourthYearSales={fourthYearSales}
            errormessage={errormessage}
          />
        </div>
      </div>
      <div className={Styles.chartbox}>
        <div className={Styles.chart}>
          <LineChart
            loading={loading}
            firstYearSales={firstYearSales}
            secondYearSales={secondYearSales}
            thirdYearSales={thirdYearSales}
            fourthYearSales={fourthYearSales}
            errormessage={errormessage}
          />
        </div>
        <div className={Styles.chart}>
          <ComponentBarChart
            loading={loading}
            firstYearSales={firstYearSales}
            secondYearSales={secondYearSales}
            thirdYearSales={thirdYearSales}
            fourthYearSales={fourthYearSales}
            errormessage={errormessage}
          />
        </div>
      </div>
    </div>
  );
}
