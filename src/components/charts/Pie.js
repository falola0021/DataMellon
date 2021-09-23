import React from 'react';

import { Pie } from 'react-chartjs-2';

function Dboard({
  firstYearSales,
  secondYearSales,
  thirdYearSales,
  fourthYearSales,
  errMessage,
  loading,
}) {
  const data = {
    labels: ['2014', '2015', '2016', '2017'],

    datasets: [
      {
        label: 'Number of sales in 4 years',
        data: [
          firstYearSales.length,
          secondYearSales.length,
          thirdYearSales.length,
          fourthYearSales.length,
        ],
        maintainAspectRatio: true,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          // 'rgba(153, 102, 255, 1)',
          // 'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,

        hoverOffset: 4,
      },
    ],
  };
  const options = {
    indexAxis: 'x',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide

    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Yearly Sales',
      },
    },
  };

  return (
    <div>
      <Pie width={500} height={500} data={data} options={options} />
    </div>
  );
}

export default Dboard;
