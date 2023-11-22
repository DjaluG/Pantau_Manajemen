'use client'

import React, { useEffect } from 'react';
import ApexCharts from 'react-apexcharts';

const Chart: React.FC = () => {
  useEffect(() => {
    // ApexCharts options and data

    if (document.getElementById('area-chart')) {
      const chart = new ApexCharts(document.getElementById('area-chart'), chartOptions);
      chart.render();
    }
  }, []);

  const chartOptions = {
    chart: {
      height: '260px',
      minWidth: '100%',
      type: 'area',
      fontFamily: 'Inter, sans-serif',
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: '#1B59F8',
        gradientToColors: ['#FFD338'],
      },  
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 10,
        right: 7,
        top: 0,
      },
    },
    series: [
      {
        name: 'New users',
        data: [0, 10, 15, 10, 50, 22, 80, 50, 55, 55, 70, 80],
        color: '#1B59F8',
      },
    ],
    xaxis: {
      categories: [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MEI',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OKT',
        'NOV',
        'DES',
      ],
      labels: {
        show: true,
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
    },
    yaxis: {
      show: true,
    },
  };

  return (
    <div className="w-full h-auto bg-white rounded-lg shadow dark:bg-gray-800 ">
      <div className='flex items-center justify-between w-full px-4 py-2 border-b-2'>
        <div>Overall activity</div>
        <div>
            2023
        </div>
      </div>
      <div id="area-chart">
        <ApexCharts options={chartOptions} series={chartOptions.series} type="area" height={200} />
      </div>
    </div>
  );
};

export default Chart;
