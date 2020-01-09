/*---------------------------------------*/
/*                TRAFFIC                */
/*---------------------------------------*/
var ctx = document.getElementById('traffic');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
            data: [{
                x: new Date(),
                y: 20
            }, {
                x: new Date(),
                y: 10
            }]
        }],
    },
    
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
                    max: 250,
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
            "#2B98C1",
            "#00B382",
            "#535993"
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
            fontSize: 16,
            padding: 20,
            boxWidth: 20
          }
        }
      }
    
});