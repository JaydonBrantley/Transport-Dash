//GREEN ROUTES
var AvgPassenger = document.getElementById('ckv-101-green');
var AvgPassengers = new Chart(AvgPassenger, {
    type: 'line',
    data: {
        labels: ['HUB', 'WALMART', 'LOGANS', 'JACKSON PLAZA', 'SENIOR CENTER', 'PINE','7TH & WILLOW','TTU - STUDENT CENTER','HOSPITAL', 'LIBRARY', 'COURT HOUSE', 'KROGER'],
        datasets: [{
            label: 'Green Route',
            data: [206,249,143,127,242,145,112,200,290,180,233,270],
            backgroundColor: 'rgb(50,162,71,0.7)',
            borderColor: 'rgb(50,162,71)',
            borderWidth: 2,
            tension: 0.4,
            fill: true,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const PassengerRevenue = document.getElementById('ckv-102-green');
const PassengersRevenue = new Chart (PassengerRevenue, {
    type: 'pie',
    data: {
        labels: ['7am-10am', '10am-1pm', '1pm-4pm', '4pm-7pm'],
        datasets: [{
            label: 'Green Route Per Hour',
            data: [10,20,30,40],
            backgroundColor: [
                'rgb(50,162,71,0.7)',
                'rgb(70,116,185,0.7)',
                'rgb(167,169,54,0.7)',
                'rgb(147,80,159,0.7)',
            ],
            borderColor: [
                'rgb(50,162,71)',
                'rgb(70,116,185)',
                'rgb(167,169,54)',
                'rgb(147,80,159)',
            ],

            borderWidth: 2
        }]
    },
    options: {
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
            label: 'Green Route',
            data: [19,10,20,14,7,12,6,18,13,1,20,3],
            backgroundColor: [
            'rgb(50,162,71,0.7)'
            ],
            borderColor: [
            'rgb(50,162,71)'
            ],
            borderWidth: 2,
            tension: 0.4,
        }]
    },
    options: {
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
            label: 'Green Route Per Hour',
            data: [121,190,111,152,121,190,111,152,184,153,142,111],
            backgroundColor: [
            'rgb(50,162,71,0.7)'
            ],
            borderColor: [
            'rgb(50,162,71)'
            ],
            borderWidth: 1,
            borderRadius: 5,
            borderSkipped: false,
        }]
    },
    options: {
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
            label: 'Green Route Per Hour',
            data: [121,190,111,152,121,190,111,152,121,190,111,152],
            backgroundColor: ['rgb(50,162,71,0.7)'],
            borderColor: ['rgb(50,162,71)'],
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
        }]
    },
    options: {
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
            label: 'Green Route Per Hour',
            data: [121,190,111,152,184,153,142,111,124,165,187,198],
            backgroundColor: [
            'rgb(50,162,71,0.7)'
            ],
            borderColor: [
            'rgb(50,162,71)'
            ],
            borderWidth: 1,
            borderRadius: 5,
            borderSkipped: false,
        }]
    },
    options: {
            responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
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
        fill: true,
    }]
},
options: {
    responsive: true,
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
            label: 'Blue Route Per Hour',
            data: [10,20,30,40],
            backgroundColor: [
              'rgb(50,162,71,0.7)',
              'rgb(70,116,185,0.7)',
              'rgb(167,169,54,0.7)',
              'rgb(147,80,159,0.7)',
          ],
          borderColor: [
              'rgb(50,162,71)',
              'rgb(70,116,185)',
              'rgb(167,169,54)',
              'rgb(147,80,159)',
          ],
            borderWidth: 2
        }]
    },
    options: {
      responsive: true,
        scales: {
            y: {
                beginAtZero: true
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
            label: 'Blue Route',
            data: [19,10,20,14,7,12,6,18,13,1,20,3],
            backgroundColor: [
            'rgb(70,116,185,0.7)'
            ],
            borderColor: [
            'rgb(70,116,185)'
            ],
            borderWidth: 2,
            tension: 0.4,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });

const StopBoardedBlue = document.getElementById('ckv-204-blue');
const StopsBoardedBlue = new Chart (StopsBoardedBlue, {
    type: 'bar',
    data: {
        labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
        datasets: [{
            label: 'Blue Route',
            data: [19,10,20,14,7,12,6,18,13,1,20,3],
            backgroundColor: [
            'rgb(70,116,185,0.7)'
            ],
            borderColor: [
            'rgb(70,116,185)'
            ],
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });
  
const StopAlightedBlue = document.getElementById('ckv-205-blue');
const StopsAlightedBlue = new Chart (StopsAlightedBlue, {
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
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
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
            label: 'Blue Route',
            data: [19,10,20,14,7,12,6,18,13,1,20,3],
            backgroundColor: [
            'rgb(70,116,185,0.7)'
            ],
            borderColor: [
            'rgb(70,116,185)'
            ],
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });