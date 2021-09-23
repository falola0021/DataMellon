import React from 'react';

import { Bar } from 'react-chartjs-2';

function Dboard({
  firstYearSales,
  secondYearSales,
  thirdYearSales,
  fourthYearSales,
  errMessage,
  loading,
}) {
  //I used a Demo Data here because i dont know what I am plotting against
  const data = {
    labels: ['2014', '2015', '2016', '2017'],
    datasets: [
      {
        label: '# of Red Votes',
        data: [12, 19, 3, 5],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: '# of Blue Votes',
        data: [2, 3, 20, 5],
        backgroundColor: 'rgb(54, 162, 235)',
      },
      {
        label: '# of Green Votes',
        data: [3, 10, 22, 30],
        backgroundColor: 'rgb(75, 192, 192)',
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
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
      <Bar width={500} height={500} data={data} options={options} />
    </div>
  );
}

export default Dboard;
