 // REGISTERS ALL THE PLUGINS TO EACH CHART
Chart.register(ChartDataLabels);

//FETCHES ALL DATAPOINTS
function updateChart(){
    async function fetchData(){
        const url = 'https://dummyjson.com/products'; //INSERT OUT API
        const response = await fetch(url)
        const datapoint = await response.json()
        return datapoint;
    };
    //EXTRACTS ALL DATAPOINTS WITHIN THE API
    fetchData().then(datapoints => {
        //EXTRACTS SPECIFIC POINTS BASE ON THE FILE STRUCTURE
            //GREEN ROUTES, BLUE ROUTES, AND BOTH ROUTES
                const title = datapoints.products.map(
                    function(index){
                        return index.title;
                    })
                const price = datapoints.products.map(
                    function(index){
                        return index.price;
                    })
                const rating = datapoints.products.map(
                    function(index){
                        return index.rating;
                    })
                const stock = datapoints.products.map(
                    function(index){
                        return index.stock;
                    })
                const discountPercentage = datapoints.products.map(
                    function(index){
                        return index.discountPercentage;
                    })
                //GREEN ROUTE
                    //AVG. PASSENGER
                        avgPassengers.data.labels = title;
                        avgPassengers.data.datasets[0].data = price;
                    //AVG. TRIP PER MILE (RATING)
                        avgTrips.data.labels = title;
                        avgTrips.data.datasets[0].data = rating;
                    //AVG. STOPS BOARDED
                        stopsBoarded.data.labels = title;
                        stopsBoarded.data.datasets[0].data = stock;
                    //AVG. POPULAR STOPS
                        popularStops.data.labels = title;
                        popularStops.data.datasets[0].data = discountPercentage;    

                    //UPDATES CHARTS
                        avgPassengers.update(); avgTrips.update(); stopsBoarded.update(); popularStops.update();

                //BLUE ROUTE
                    //AVG. PASSENGER
                        avgPassengersBlue.data.labels = title;
                        avgPassengersBlue.data.datasets[0].data = price;
                    //AVG. TRIP PER MILE (RATING)
                        avgTripsBlue.data.labels = title;
                        avgTripsBlue.data.datasets[0].data = rating;
                    //AVG. STOPS BOARDED
                        stopsBoardedBlue.data.labels = title;
                        stopsBoardedBlue.data.datasets[0].data = stock;
                    //AVG. POPULAR STOPS
                        popularStopsBlue.data.labels = title;
                        popularStopsBlue.data.datasets[0].data = discountPercentage;    
                
                    //UPDATES CHARTS
                        avgPassengersBlue.update(); avgTripsBlue.update(); stopsBoardedBlue.update(); popularStopsBlue.update();

                //BOTH ROUTES ROUTE
                    //AVG. PASSENGER
                        avgPassengersBoth.data.labels = title;
                        avgPassengersBoth.data.datasets[0].data = price;
                    //AVG. TRIP PER MILE (RATING)
                        avgTripsBoth.data.labels = title;
                        avgTripsBoth.data.datasets[0].data = rating;
                    //AVG. STOPS BOARDED
                        stopsBoardedBoth.data.labels = title;
                        stopsBoardedBoth.data.datasets[0].data = stock;
                    //AVG. POPULAR STOPS
                        popularStopsBoth.data.labels = title;
                        popularStopsBoth.data.datasets[0].data = discountPercentage;    

                    //UPDATES CHARTS
                        avgPassengersBoth.update(); avgTripsBoth.update(); stopsBoardedBoth.update(); popularStopsBoth.update();
    });
}

//GREEN ROUTES
/*

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

*/

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

const avgTrip = document.getElementById('ckv-102-green');
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

const stopBoarded = document.getElementById('ckv-103-green');
const stopsBoarded = new Chart (stopBoarded, {
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

const popularStop = document.getElementById('ckv-104-green');
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

/*

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

*/

//BLUE ROUTES
const avgPassengerBlue = document.getElementById('ckv-201-blue');
const avgPassengersBlue = new Chart (avgPassengerBlue, {
type: 'line',
data: {
    labels: ['HUB','KROGER','COURT HOUSE','LIBRARY','TTU - STUDENT CENTER','7TH & WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA','NEWMAN/WILLOW VALLEY CRT','MISSION','WALMART'],
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

const avgTripBlue = document.getElementById('ckv-202-blue');
const avgTripsBlue = new Chart (avgTripBlue, {
    type: 'line',
    data: {
        labels: ['HUB','KROGER','COURT HOUSE','LIBRARY','TTU - STUDENT CENTER','7TH & WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA','NEWMAN/WILLOW VALLEY CRT','MISSION','WALMART'],
        datasets: [{
            data: [19,10,20,14,7,12,6,18,13,1,20,3],
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

const stopBoardedBlue = document.getElementById('ckv-203-blue');
const stopsBoardedBlue = new Chart (stopBoardedBlue, {
    type: 'bar',
    data: {
        labels: ['HUB','KROGER','COURT HOUSE','LIBRARY','TTU - STUDENT CENTER','7TH & WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA','NEWMAN/WILLOW VALLEY CRT','MISSION','WALMART'],
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

  const popularStopBlue = document.getElementById('ckv-104-blue');
const popularStopsBlue = new Chart (popularStopBlue, {
    type: 'bar',
    data: {
        labels: ['HUB','KROGER','COURT HOUSE','LIBRARY','TTU - STUDENT CENTER','7TH & WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA','NEWMAN/WILLOW VALLEY CRT','MISSION','WALMART'],
        datasets: [{
            data: [121,190,111,152,121,190,111,152,184,153,142,111],
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

  //COMPARE ROUTES
  const avgPassengerBoth = document.getElementById('ckv-301-compare');
const avgPassengersBoth = new Chart (avgPassengerBoth, {
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

const avgTripBoth = document.getElementById('ckv-302-compare');
const avgTripsBoth = new Chart (avgTripBoth, {
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

const stopBoardedBoth = document.getElementById('ckv-303-compare');
const stopsBoardedBoth = new Chart (stopBoardedBoth, {
    type: 'bar',
    data: {
        labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
        datasets: [{
            label: 'Blue Route',
            data: [121,190,111,152,121,190,111,152,184,153,142,111],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
            borderWidth: 1,
            borderRadius: 5,
            borderSkipped: false,
        },
        {
            label: 'Green Route',
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
        },
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });
  
const popularStopBoth = document.getElementById('ckv-104-compare');
const popularStopsBoth = new Chart (popularStopBoth, {
    type: 'bar',
    data: {
        labels: ['HUB', 'WALMART', 'LOGANS', 'JACKSON PLAZA', 'SENIOR CENTER', 'PINE','7TH & WILLOW','TTU - STUDENT CENTER','HOSPITAL', 'LIBRARY', 'COURT HOUSE', 'KROGER'],
        datasets: [{
            label: 'Blue Route',
            data: [121,190,111,152,121,190,111,152,184,153,142,111],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
            borderWidth: 1,
            borderRadius: 5,
            borderSkipped: false,
        },
        {
            label: 'Green Route',
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
        },
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});