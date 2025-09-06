export const bubbleData = {
  data: {
    datasets: [
      {
        label: 'Bubbles',
        data: [
          { x: 1.5, y: 1, r: 60, value: 541, color: '#e11d48' },
          { x: 2, y: 1, r: 80, value: 3824, color: '#dc2626' },
          { x: 2.2, y: 1, r: 50, value: 60, color: '#f97316' },
          { x: 2.5, y: 1, r: 30, value: 2, color: '#16a34a' },
        ],
        backgroundColor: (ctx) => ctx.raw.color,
      },
    ],
  },
  options: {
    plugins: {
      legend: { display: true },
      datalabels: {
        color: 'white',
        font: { weight: 'bold', size: 14 },
        formatter: (val) => val.value,
      },
    },
    scales: { x: { display: false }, y: { display: false } },
    maintainAspectRatio: true,
  },
}

export const areaData = {
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Fund A',
        data: [0.2, 0.25, 0.15, 0.4, 0.5, 0.3],
        borderColor: 'rgba(37, 99, 235, 1)',
        backgroundColor: 'rgba(37, 99, 235, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Fund B',
        data: [0.3, 0.2, 0.35, 0.25, 0.15, 0.1],
        borderColor: 'rgba(239, 68, 68, 1)',
        backgroundColor: 'rgba(239, 68, 68, 0.4)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Fund C',
        data: [0.25, 0.3, 0.2, 0.5, 0.45, 0.25],
        borderColor: 'rgba(34, 197, 94, 1)',
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  },

  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Fund Performance Comparison' },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (val) => {
            if (typeof val === 'number') {
              return `${val.toFixed(2)} Cr`
            }
            return val
          },
        },
      },
    },
  },
}

export const LineBarData = {
    data : {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        type: 'bar',
        label: 'Revenue',
        data: [120, 190, 300, 500, 200, 300],
        backgroundColor: 'rgba(37, 99, 235, 0.6)', 
        borderRadius: 6,
      },
      {
        type: 'line',
        label: 'Growth %',
        data: [5, 10, 6, 15, 8, 12],
        borderColor: '#f97316', 
        backgroundColor: '#f97316',
        tension: 0.3,
        yAxisID: 'y1', 
      },
    ],
  },

  options : {
    responsive: true,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Revenue vs Growth (Mixed Chart)' },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Revenue (₹)' },
      },
      y1: {
        beginAtZero: true,
        position: 'right',
        grid: { drawOnChartArea: false }, 
        title: { display: true, text: 'Growth %' },
      },
    },
  }
}