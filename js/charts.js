/*---------------------------------------*/
/*                TRAFFIC                */
/*---------------------------------------*/
const toggle = document.querySelector('.switch-toggle');
var data;
toggle.addEventListener('click', (e) => {
    const selectedOption = e.target.getAttribute("for");
    if(selectedOption === "day3") {
        dailyTraffic(myLineChart);
    } else if (selectedOption === "month3") {
        monthlyTraffic(myLineChart);
    } else if (selectedOption === "hour3") {
        houryTraffic(myLineChart);
    } else if (selectedOption === "week3") {
        weeklyTraffic(myLineChart);
    }
});

var data = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
    backgroundColor: 'rgba(83, 89, 147, .3)',
    borderWidth: 1,
    }]
}



var ctx = document.getElementById('traffic');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        
        datasets: [{
        
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

houryTraffic(myLineChart);

function houryTraffic(chart) {
    chart.data.labels = ["00-15", "15-30", "30-45", "45-60", "00-15", "15-30", "30-45",
    "45-60"];
    chart.data.datasets.forEach((dataset) => {
        dataset.data = [1500, 2300, 600, 1250, 1500, 1750, 1300, 1900]; 
    });
    chart.update();
}

function dailyTraffic(chart) {
    chart.data.labels = ["00-02", "02-04", "04-06", "06-08", "08-10", "10-12", "12-02",
    "02-04", "04-06", "06-08", "08-10", "10-12"];
    chart.data.datasets.forEach((dataset) => {
        dataset.data = [1000, 1500, 750, 2000, 1250, 1500, 1750, 1850, 2250, 2000,
            900, 800]; 
    });
    chart.update();
}

function weeklyTraffic(chart) {
    chart.data.labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    chart.data.datasets.forEach((dataset) => {
        dataset.data = [1300, 1900, 2200, 2400, 1650, 1750, 1250]; 
    });
    chart.update();
}

function monthlyTraffic(chart) {
    chart.data.labels = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"];
    chart.data.datasets.forEach((dataset) => {
        dataset.data = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500]; 
    });
    chart.update();
}

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