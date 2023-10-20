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
      maxWidth: '100%',
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
        shade: '#1C64F2',
        gradientToColors: ['#1C64F2'],
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
        left: 2,
        right: 2,
        top: 0,
      },
    },
    series: [
      {
        name: 'New users',
        data: [0, 20, 10, 15, 10, 50, 22, 80, 57, 60, 55, 57, 55, 70, 65, 80],
        color: '#1A56DB',
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
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  };

  return (
    <div className="w-5/6 h-[200px] bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:pb-6 px-6 pt-2">
      <div id="area-chart">
        <ApexCharts options={chartOptions} series={chartOptions.series} type="area" height={200} />
      </div>
      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div className="flex justify-between items-center pt-5">
          {/* Dropdown Button */}
        </div>
      </div>
    </div>
  );
};

export default Chart;
