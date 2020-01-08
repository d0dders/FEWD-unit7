/*---------------------------------------*/
/*                TRAFFIC                */
/*---------------------------------------*/
var ctx = document.getElementById('traffic');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

/*---------------------------------------*/
/*             DAILY TRAFFIC             */
/*---------------------------------------*/
var ctx = document.getElementById('daily-traffic');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
            label: '# of Visits',
            data: [50, 75, 150, 100, 200, 180, 75],
            backgroundColor: [
                '#535993',
                '#535993',
                '#535993',         
                '#535993',
                '#535993',
                '#535993',
                '#535993'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        legend: {
            display: false,
         },
        scales: {
            yAxes: [{
                
                ticks: {
                    beginAtZero: true,
                    max: 250
                },
                gridLines: {
                    offsetGridLines: true
                }
            }]
        }
    }
});

/*---------------------------------------*/
/*             MOBILE USERS           */
/*---------------------------------------*/
var ctx = document.getElementById('mobile-users');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Phone", "Tablet", "Desktop"],
        datasets: [
        {
            label: "User platforms",
            data: [15, 15, 70],
            backgroundColor: [
            "#DEB887",
            "#A9A9A9",
            "#DC143C"
            ],
        }
        ]
    },
    options: {
        legend: {
          display: true,
          position: "right",
          labels: {
            fontColor: "#333",
            fontSize: 16
          }
        }
      }
    
});