// Register the plugin to all charts:
Chart.register(ChartDataLabels);


//GREEN ROUTES
// Filter by Day
const day = [
    {x: Date.parse('2022-08-01 00:00: GMT-0500'), y: 50 },
    {x: Date.parse('2022-08-02 00:00: GMT-0500'), y: 125 },
    {x: Date.parse('2022-08-03 00:00: GMT-0500'), y: 75 },
    {x: Date.parse('2022-08-04 00:00: GMT-0500'), y: 80 },
    {x: Date.parse('2022-08-05 00:00: GMT-0500'), y: 130 },
    {x: Date.parse('2022-08-06 00:00: GMT-0500'), y: 115 },
    {x: Date.parse('2022-08-07 00:00: GMT-0500'), y: 60 },
    {x: Date.parse('2022-08-08 00:00: GMT-0500'), y: 75 },
    {x: Date.parse('2022-08-09 00:00: GMT-0500'), y: 45 },
    {x: Date.parse('2022-08-10 00:00: GMT-0500'), y: 65 },
    {x: Date.parse('2022-08-11 00:00: GMT-0500'), y: 70 },
    {x: Date.parse('2022-08-12 00:00: GMT-0500'), y: 75 },
];

//Filter by Week
const week = [
    {x: Date.parse('2022-08-01 00:00: GMT-0500'), y: 50 },
    {x: Date.parse('2022-08-07 00:00: GMT-0500'), y: 125 },
    {x: Date.parse('2022-08-14 00:00: GMT-0500'), y: 75 },
    {x: Date.parse('2022-08-21 00:00: GMT-0500'), y: 80 },
    {x: Date.parse('2022-08-28 00:00: GMT-0500'), y: 45 },
];

var AvgPassenger = document.getElementById('ckv-101-green');
var AvgPassengers = new Chart(AvgPassenger, {
    type: 'line',
    data: {
        //labels: ['HUB', 'WALMART', 'LOGANS', 'JACKSON PLAZA', 'SENIOR CENTER', 'PINE','7TH & WILLOW','TTU - STUDENT CENTER','HOSPITAL', 'LIBRARY', 'COURT HOUSE', 'KROGER'],
        datasets: [{
            data: day,//[206,249,143,127,242,145,112,200,290,180,233,270],
            backgroundColor: ['rgb(50,162,71,0.7)'],
            borderColor: ['rgb(50,162,71)'],
            borderWidth: 2,
            tension: 0.4,
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day'
                }
            },
            y: {
                beginAtZero: true
            }
        },
    }
});

const PassengerRevenue = document.getElementById('ckv-102-green');
const PassengersRevenue = new Chart (PassengerRevenue, {
    type: 'pie',
    data: {
        datasets: [{
            data: [10],
            backgroundColor: ['rgb(50,162,71,0.7)',],
            borderColor: ['rgb(50,162,71)',],
            borderWidth: 2
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        responsive: true, 
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const AvgTrip = document.getElementById('ckv-103-green');
const AvgTrips = new Chart (AvgTrip, {
    type: 'line',
    data: {
        labels: ['HUB', 'WALMART', 'LOGANS', 'JACKSON PLAZA', 'SENIOR CENTER', 'PINE','7TH & WILLOW','TTU - STUDENT CENTER','HOSPITAL', 'LIBRARY', 'COURT HOUSE', 'KROGER'],
        datasets: [{
            data: [19,10,20,14,7,12,6,18,13,1,20,3],
            backgroundColor: ['rgb(50,162,71,0.7)'],
            borderColor: ['rgb(50,162,71)'],
            borderWidth: 2,
            tension: 0.4,
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const StopBoarded = document.getElementById('ckv-104-green');
const StopsBoarded = new Chart (StopBoarded, {
    type: 'bar',
    data: {
        labels: ['HUB', 'WALMART', 'LOGANS', 'JACKSON PLAZA', 'SENIOR CENTER', 'PINE','7TH & WILLOW','TTU - STUDENT CENTER','HOSPITAL', 'LIBRARY', 'COURT HOUSE', 'KROGER'],
        datasets: [{
            data: [121,190,111,152,121,190,111,152,184,153,142,111],
            backgroundColor: ['rgb(50,162,71,0.7)'],
            borderColor: ['rgb(50,162,71)'],
            borderWidth: 1,
            borderRadius: 5,
            borderSkipped: false,
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const StopsAlighted = document.getElementById('ckv-105-green');
const StopAlighted = new Chart (StopsAlighted, {
    type: 'bar',
    data: {
        labels: ['HUB', 'WALMART', 'LOGANS', 'JACKSON PLAZA', 'SENIOR CENTER', 'PINE','7TH & WILLOW','TTU - STUDENT CENTER','HOSPITAL', 'LIBRARY', 'COURT HOUSE', 'KROGER'],
        datasets: [{
            data: [121,190,111,152,121,190,111,152,121,190,111,152],
            backgroundColor: ['rgb(50,162,71,0.7)'],
            borderColor: ['rgb(50,162,71)'],
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        indexAxis: 'y',
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const UnlinkedPassenger = document.getElementById('ckv-106-green');
const UnlinkedPassengers = new Chart (UnlinkedPassenger, {
    type: 'bar',
    data: {
        labels: ['HUB', 'WALMART', 'LOGANS', 'JACKSON PLAZA', 'SENIOR CENTER', 'PINE','7TH & WILLOW','TTU - STUDENT CENTER','HOSPITAL', 'LIBRARY', 'COURT HOUSE', 'KROGER'],
        datasets: [{
            data: [121,190,111,152,184,153,142,111,124,165,187,198],
            backgroundColor: ['rgb(50,162,71,0.7)'],
            borderColor: ['rgb(50,162,71)'],
            borderWidth: 1,
            borderRadius: 5,
            borderSkipped: false,
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
            responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//FILTER GREEN CHARTS
$(document).on('click','#btnDayCkv',function(){
    AvgPassengers.config.options.scales.x.time.unit = 'day';
    AvgPassengers.config.data.datasets[0].data = day;
    AvgPassengers.update();
});

$(document).on('click','#btnWeekCkv',function(){
    AvgPassengers.config.options.scales.x.time.unit = 'week';
    AvgPassengers.config.data.datasets[0].data = week;
    AvgPassengers.update();
});


//BLUE ROUTES
const AvgPassengerBlue = document.getElementById('ckv-201-blue');
const AvgPassengersBlue = new Chart (AvgPassengerBlue, {
type: 'line',
data: {
    labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
    datasets: [{
        label: 'Blue Route',
        data: [206,249,143,127,242,145,112,200,290,180,233,270],
        backgroundColor: ['rgb(70,116,185,0.7)'],
        borderColor: ['rgb(70,116,185)'],
        borderWidth: 2,
        tension: 0.4,
    }]
},
options: {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        }
    },
    responsive: false,
    scales: {
        y: {
            beginAtZero: true
        }
    }
}
});

const PassengerRevenueBlue = document.getElementById('ckv-202-blue');
const PassengersRevenueBlue = new Chart (PassengerRevenueBlue, {
    type: 'pie',
    data: {
        labels: ['7am-10am', '10am-1pm', '1pm-4pm', '4pm-7pm'],
        datasets: [{
            data: [10],
            backgroundColor: ['rgb(70,116,185,0.7)',],
            borderColor: ['rgb(70,116,185)',],
            borderWidth: 2
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
      responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
    });

const AvgTripBlue = document.getElementById('ckv-203-blue');
const AvgTripsBlue = new Chart (AvgTripBlue, {
    type: 'line',
    data: {
        labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
        datasets: [{
            data: [19,10,20,14,7,12,6,18,13,1,20,3],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
            borderWidth: 2,
            tension: 0.4,
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });

const StopBoardedBlue = document.getElementById('ckv-204-blue');
const StopsBoardedBlue = new Chart (StopBoardedBlue, {
    type: 'bar',
    data: {
        labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
        datasets: [{
            data: [19,10,20,14,7,12,6,18,13,1,20,3],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });
  
const StopAlightedBlue = document.getElementById('ckv-205-blue');
const StopsAlightedBlue = new Chart (StopAlightedBlue, {
    type: 'bar',
    data: {
        labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
        datasets: [{
            data: [19,10,20,14,7,12,6,18,13,1,20,3],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        indexAxis: 'y',
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });

const UnlinkedPassengerBlue = document.getElementById('ckv-206-blue');
const UnlinkedPassengersBlue = new Chart (UnlinkedPassengerBlue, {
    type: 'bar',
    data: {
        labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
        datasets: [{
            data: [19,10,20,14,7,12,6,18,13,1,20,3],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });

  //COMPARE ROUTES
  const AvgPassengerBlue2 = document.getElementById('ckv-301-compare');
const AvgPassengersBlue2 = new Chart (AvgPassengerBlue2, {
type: 'line',
data: {
    labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
    datasets: [{
        label: 'Blue Route',
        data: [206,249,143,127,242,145,112,200,290,180,233,270],
        backgroundColor: ['rgb(70,116,185,0.7)'],
        borderColor: ['rgb(70,116,185)'],
        borderWidth: 2,
        tension: 0.4,
    },
    {
        label: 'Green Route',
        data: [106,149,43,27,142,45,12,100,190,80,133,170],
        backgroundColor: ['rgb(50,162,71,0.7)'],
        borderColor: ['rgb(50,162,71)'],
        borderWidth: 2,
        tension: 0.4,
    }]
},
options: {
    maintainAspectRatio: false,
    plugins: {
    },
    responsive: false,
    scales: {
        y: {
            beginAtZero: true
        }
    }
}
});

const PassengerRevenueBlue2 = document.getElementById('ckv-302-compare');
const PassengersRevenueBlue2 = new Chart (PassengerRevenueBlue2, {
    type: 'pie',
    data: {
        labels: ['Blue Route', 'Green Route'],
        datasets: [{
            label: ['Blue Route'],
            data: [10, 20],
            backgroundColor: ['rgb(70,116,185,0.7)', 'rgb(50,162,71,0.7)'],
            borderColor: ['rgb(70,116,185)','rgb(50,162,71)'],
            borderWidth: 2
        },
]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
        },
      responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
    });

const AvgTripBlue2 = document.getElementById('ckv-303-compare');
const AvgTripsBlue2 = new Chart (AvgTripBlue2, {
    type: 'line',
    data: {
        labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
        datasets: [{
            label: 'Blue Route',
            data: [19,10,20,14,7,12,6,18,13,1,20,3],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
            borderWidth: 2,
            tension: 0.4,
        },
        {
            label: 'Green Route',
            data: [9,5,2,10,5,2,3,8,7,1,20,6],
            backgroundColor: ['rgb(50,162,71,0.7)'],
            borderColor: ['rgb(50,162,71)'],
            borderWidth: 2,
            tension: 0.4,
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
        },
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });

const StopBoardedBlue2 = document.getElementById('ckv-304-compare');
const StopsBoardedBlue2 = new Chart (StopBoardedBlue2, {
    type: 'bar',
    data: {
        labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
        datasets: [{
            label: 'Blue Route',
            data: [19,10,20,14,7,12,6,18,13,3,20,3],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
        },
        {
            label: 'Green Route',
            data: [9,1,10,7,3,6,3,8,4,1,10,1],
            backgroundColor: ['rgb(50,162,71,0.7)'],
            borderColor: ['rgb(50,162,71)'],
            borderWidth: 2,
            tension: 0.4,
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
        },
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });
  
const StopAlightedBlue2 = document.getElementById('ckv-305-compare');
const StopsAlightedBlue2 = new Chart (StopAlightedBlue2, {
    type: 'bar',
    data: {
        labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
        datasets: [{
            label: 'Blue Route',
            data: [19,10,20,14,7,12,6,18,13,1,20,3],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
        },
        {
            label: 'Green Route',
            data: [9,5,10,7,4,6,3,8,7,4,10,1],
            backgroundColor: ['rgb(50,162,71,0.7)'],
            borderColor: ['rgb(50,162,71)'],
            borderWidth: 2,
            tension: 0.4,
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
        },
        indexAxis: 'y',
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });

const UnlinkedPassengerBlue2 = document.getElementById('ckv-306-compare');
const UnlinkedPassengersBlue2 = new Chart (UnlinkedPassengerBlue2, {
    type: 'bar',
    data: {
        labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
        datasets: [{
            label: 'Blue Route',
            data: [19,10,20,14,7,12,6,18,13,1,20,3],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
        },
        {
            label: 'Green Route',
            data: [9,5,10,7,3,6,3,8,3,4,10,3],
            backgroundColor: ['rgb(50,162,71,0.7)'],
            borderColor: ['rgb(50,162,71)'],
            borderWidth: 2,
            tension: 0.4,
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
        },
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });