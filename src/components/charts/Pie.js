import React from 'react';

import { Pie } from 'react-chartjs-2';

function Dboard({ sales, errMessage, loading }) {
  // all my original Api Data is in sales state and i can get any value from it
  // I ressolve to using demo Data just to show that the chart is working
  const data = {
    labels: ['Discount', 'Profit', 'Quantity', 'Sales'],

    datasets: [
      {
        label: false,
        data: ['40', '800', '120', '40', '80', '120'],
        // data: [sales],

        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', '#EB681F'],
        hoverOffset: 6,
      },
    ],
  };

  return (
    <div>
      <Pie
        data={data}
        options={{
          title: { display: true, fontSize: 20 },
          legend: { display: true, position: 'right' },
        }}
      />
    </div>
  );
}

export default Dboard;
