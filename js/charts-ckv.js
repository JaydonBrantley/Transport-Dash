 // REGISTERS ALL THE PLUGINS TO EACH CHART
Chart.register(ChartDataLabels);

//NEW FUNCTION
function fillavgPassangers(datapoint){
    const Stop_ID = datapoint.map(
        function(index){
            return index.Stop_ID;
        })
        const Total_Passengers = datapoint.map(
        function(index){
            return index.Total_Passengers;
        })
    
        avgPassengers.data.labels = Stop_ID;
        avgPassengers.data.datasets[0].data = Total_Passengers;
        avgPassengers.update();
} 

function fillpopularStop(datapoint){
    const Stop_ID = datapoint.map(
        function(index){
            return index.Stop_ID;
        })
        const Total_Passengers = datapoint.map(
        function(index){
            return index.Total_Passengers;
        })

        popularStops.data.labels = Stop_ID;
        popularStops.data.datasets[0].data = Total_Passengers;
        popularStops.update();
} 

function fillunpopularStop(datapoint){
    const Stop_ID = datapoint.map(
        function(index){
            return index.Stop_ID;
        })
        const Total_Passengers = datapoint.map(
        function(index){
            return index.Total_Passengers;
        })

        unpopularStops.data.labels = Stop_ID;
        unpopularStops.data.datasets[0].data = Total_Passengers;
        unpopularStops.update();
} 

function fillavgTrip(datapoint){
    const Stop_ID = datapoint.map(
        function(index){
            return index.Stop_ID;
        })
        const Miles_Per_Stop = datapoint.map(
        function(index){
            return index.Miles_Per_Stop;
        })

        avgTrips.data.labels = Stop_ID;
        avgTrips.data.datasets[0].data = Miles_Per_Stop;
        avgTrips.update();
} 

//FETCHES ALL DATAPOINTS
function updateChart(intdays){
    if(intdays ==null){
        intdays = 365;
    }
    //AVERAGE PASSENGERS
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getPassengersPerStop.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1001&NumDays='+ intdays, function(result){
        fillavgPassangers(result);
    })

    //POPULAR STOPS
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getPopularStops.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1001&NumDays='+ intdays, function(result){
        fillpopularStop(result);
    })

    //UNPOPULAR STOPS
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getUnpopularStops.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1001&NumDays='+ intdays, function(result){
        fillunpopularStop(result);
    })
    
    //AVERAGE TRIP PER MILE
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getMilesPerStop.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1001&NumDays='+ intdays, function(result){
        fillavgTrip(result);
    })
    
}

//FILTER DAY
$(document).on('click','#btnDayCkv', function(){
    updateChart(1);
})

//FILTER WEEK
$(document).on('click','#btnWeekCkv', function(){
    updateChart(7);
})

//FILTER MONTH
$(document).on('click','#btnMonthCkv', function(){
    updateChart(31);
})

//FILTER YEAR
$(document).on('click','#btnYearCkv', function(){
    updateChart(365);
})


//GREEN ROUTES
const avgPassenger = document.getElementById('ckv-101-green');
const avgPassengers = new Chart(avgPassenger, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            data: [],
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
            y: {
                beginAtZero: true
            }
        },
    }
});

const popularStop = document.getElementById('ckv-102-green');
const popularStops = new Chart (popularStop, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            data: [],
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

const unpopularStop = document.getElementById('ckv-103-green');
const unpopularStops = new Chart (unpopularStop, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            data: [],
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

const avgTrip = document.getElementById('ckv-104-green');
const avgTrips = new Chart (avgTrip, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            data: [],
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


//BLUE ROUTES
const avgPassengerBlue = document.getElementById('ckv-201-blue');
const avgPassengersBlue = new Chart (avgPassengerBlue, {
type: 'line',
data: {
    labels: [],
    datasets: [{
        label: 'Blue Route',
        data: [],
        backgroundColor: ['rgb(70,116,185,0.7)'],
        borderColor: ['rgb(70,116,185)'],
        borderWidth: 2,
        tension: 0.4,
    }]
},
options: {
    maintainAspectRatio: true,
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

const popularStopBlue = document.getElementById('ckv-202-blue');
const popularStopsBlue = new Chart (popularStopBlue, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
        }]
    },
    options: {
        maintainAspectRatio: true,
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

  const unpopularStopBlue = document.getElementById('ckv-203-blue');
  const unpopularStopsBlue = new Chart (unpopularStopBlue, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
            borderWidth: 1,
            borderRadius: 5,
            borderSkipped: false,
        }]
    },
    options: {
        maintainAspectRatio: true,
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

const avgTripBlue = document.getElementById('ckv-204-blue');
const avgTripsBlue = new Chart (avgTripBlue, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
            borderWidth: 2,
            tension: 0.4,
        }]
    },
    options: {
        maintainAspectRatio: true,
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
  const avgPassengerBoth = document.getElementById('ckv-301-compare');
  const avgPassengersBoth = new Chart (avgPassengerBoth, {
type: 'line',
data: {
    labels: [],
    datasets: [{
        label: 'Blue Route',
        data: [],
        backgroundColor: ['rgb(70,116,185,0.7)'],
        borderColor: ['rgb(70,116,185)'],
        borderWidth: 2,
        tension: 0.4,
    },
    {
        label: 'Green Route',
        data: [],
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
  
const popularStopBoth = document.getElementById('ckv-302-compare');
const popularStopsBoth = new Chart (popularStopBoth, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Blue Route',
            data: [],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
            borderWidth: 1,
            borderRadius: 5,
            borderSkipped: false,
        },
        {
            label: 'Green Route',
            data: [],
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
        },
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const unpopularStopBoth = document.getElementById('ckv-303-compare');
const unpopularStopsBoth = new Chart (unpopularStopBoth, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Blue Route',
            data: [],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
            borderWidth: 1,
            borderRadius: 5,
            borderSkipped: false,
        },
        {
            label: 'Green Route',
            data: [],
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
        },
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });

const avgTripBoth = document.getElementById('ckv-304-compare');
const avgTripsBoth = new Chart (avgTripBoth, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Blue Route',
            data: [],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
            borderWidth: 2,
            tension: 0.4,
        },
        {
            label: 'Green Route',
            data: [],
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