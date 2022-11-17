// Register the plugin to all charts:
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

        console.log(Miles_Per_Stop)
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

//GREEN ROUTES

//FILTER DAY
$(document).on('click','#btnDayTech', function(){
    updateChart(1);
})

//FILTER WEEK
$(document).on('click','#btnWeekTech', function(){
    updateChart(7);
})

//FILTER MONTH
$(document).on('click','#btnMonthTech', function(){
    updateChart(31);
})

//FILTER YEAR
$(document).on('click','#btnYearTech', function(){
    updateChart(365);
})

const avgPassenger = document.getElementById('tech-101-gold');
const avgPassengers = new Chart (avgPassenger, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['rgb(255,215,0,0.7)'],
            borderColor: ['rgb(255,215,0)'],
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

const popularStop = document.getElementById('tech-102-gold');
const popularStops = new Chart (popularStop, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['rgb(255,215,0,0.7)'],
            borderColor: ['rgb(255,215,0)'],
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

const unpopularStop = document.getElementById('tech-103-gold');
const unpopularStops = new Chart (unpopularStop, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['rgb(255,215,0,0.7)'],
            borderColor: ['rgb(255,215,0)'],
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
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    });

const avgTrip = document.getElementById('tech-104-gold');
const avgTrips = new Chart (avgTrip, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['rgb(255,215,0,0.7)'],
            borderColor: ['rgb(255,215,0)'],
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