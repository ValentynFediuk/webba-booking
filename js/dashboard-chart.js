import Chart from 'chart.js/auto';

const ctx = document.getElementById('myChart').getContext("2d")

  let gradient = ctx.createLinearGradient(0, 0, 0, 490);
  gradient.addColorStop(0, 'rgba(118, 217, 219, 1)');
  gradient.addColorStop(1, 'rgba(96, 146, 147, 0)');

  const labels = [
    '',
    'Aug 10',
    'Aug 11',
    'Aug 12',
    'Aug 13',
    'Aug 14',
    'Aug 15',
    'Aug 16',
    'Aug 17',
    '',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Bookings',
      fill: true,
      backgroundColor: gradient,
      borderColor: '#609293',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      radius: [0, 4, 4, 4, 4, 4, 4, 4, 4, 0],
      data: [1000, 1000, 650, 1000, 1000, 800, 1000, 200, 500, 500, 3000],
    }, {
      label: 'Revenue',
      hidden: true,
      fill: false,
      backgroundColor: gradient,
      borderColor: '#00B5EE',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      radius: [0, 4, 4, 4, 4, 4, 4, 4, 4, 0],
      data: [1400, 1400, 1400, 1200, 1350, 1400, 1600, 1450, 1200, 1200, 3000],
    }]

  };

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            color: '#212121',
            font: {
              size: 12,
              family: 'Poppins'
            }
          }
        },
        y: {
          ticks: {
            color: '#212121',
            font: {
              size: 12,
              family: 'Poppins'
            }
          }
        },
      },
      plugins: {
        legend: {
          align: 'start',
          labels: {
            boxWidth: 2,
            boxHeight: 2,
            padding: 20,
            usePointStyle: true,
            font: {
              size: 14,
              family: 'Poppins'
            }
          }
        }
      }
    }
  };

  const myChart = new Chart(ctx, config)