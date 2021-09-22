import React from 'react';
// import Style from './Chart.module.css'

import { Bar } from 'react-chartjs-2';

function Dboard({ sales, errMessage, loading }) {
  const data = {
    // labels: ['', 'CURRENT BALANCE', 'LOAN BALANCE'],

    datasets: [
      {
        label: 'DEALER BALANCES',
        //  data: [availableBalance, currentBalance, loanBalance],
        data: [sales.Profit, sales.Discount],

        // backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', '#EB681F'],
        // hoverOffset: 3,
      },
    ],
  };

  return (
    <div>
      <Bar
        data={data}
        options={{
          title: { display: true, fontSize: 50 },
          legend: { display: true, position: 'right' },
        }}
      />
    </div>
  );
}

export default Dboard;
