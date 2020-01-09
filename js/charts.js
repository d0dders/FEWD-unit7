/*---------------------------------------*/
/*                TRAFFIC                */
/*---------------------------------------*/
var ctx = document.getElementById('traffic');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
        2500],
        backgroundColor: 'rgba(83, 89, 147, .3)',
        borderWidth: 1,
        }]
    },
    options: {
        aspectRatio: 2.5,
        animation: {
            duration: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend : {
            display: false
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
            data: [115, 175, 125, 225, 200, 100, 75],
            backgroundColor: '#535993',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                beginAtZero:true
                }
            }]
        },
        legend : {
            display: false
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