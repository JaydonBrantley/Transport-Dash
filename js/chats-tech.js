/* //DATA FUNCTIONS

    //AVG PASSANGER FUNCTIONS

    function getStops(){
        $.getJSON('api_files/restful/getstops.php',{strSessionID:sessionStorage.getItem('sessionID')}, function(data){
            let arrData = [];
            $.each(data,function(stops){
                arrData.push({x:stops.Stop_Name,y:stops.Passenger_Boarded});
            })
            return arrData;
        })
    }

//AVG TRIP FUNCTIONS

        function getStops(){
            $.getJSON('api_files/restful/getstops.php',{strSessionID:sessionStorage.getItem('sessionID')}, function(data){
                let arrData = [];
                $.each(data,function(stops){
                    arrData.push({x:stops.Stop_Name,y:stops.Passenger_Boarded});
                })
                return arrData;
            })
        }

//STOPS BOARDED FUNCTIONS

function getStops(){
    $.getJSON('api_files/restful/getstops.php',{strSessionID:sessionStorage.getItem('sessionID')}, function(data){
        let arrData = [];
        $.each(data,function(stops){
            arrData.push({x:stops.Stop_Name,y:stops.Passenger_Boarded});
        })
        return arrData;
    })
}

//POPULAR STOPS FUNCTIONS

    function getStops(){
        $.getJSON('api_files/restful/getstops.php',{strSessionID:sessionStorage.getItem('sessionID')}, function(data){
            let arrData = [];
            $.each(data,function(stops){
                arrData.push({x:stops.Stop_Name,y:stops.Passenger_Boarded});
            })
            return arrData;
        })
    }*/

// Register the plugin to all charts:
Chart.register(ChartDataLabels);

const AvgPassenger = document.getElementById('tech-101-gold');
const AvgPassengers = new Chart (AvgPassenger, {
    type: 'line',
    data: {
        labels: ['FOUNDATION HALL','QUAD AT 7TH ST','PEACHTREE AVE & WILLIAM L JONES DR','UNIVERSITY DR & PEACHTREE AVE','WEST RED LOT','WEST PURPLE LOT','W 10TH ST & STADIUM DR'],
        datasets: [{
            data: [206,249,143,127,242,145,112,200,290,180,233,270,127,242,145,112],
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

const AvgTrip = document.getElementById('tech-102-gold');
const AvgTrips = new Chart (AvgTrip, {
    type: 'line',
    data: {
        labels: ['FOUNDATION HALL','QUAD AT 7TH ST','PEACHTREE AVE & WILLIAM L JONES DR','UNIVERSITY DR & PEACHTREE AVE','WEST RED LOT','WEST PURPLE LOT','W 10TH ST & STADIUM DR'],
        datasets: [{
            data: [19,10,20,14,7,12,6,18,13,1,20,3,14,7,12,3],
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

const StopBoarded = document.getElementById('tech-103-gold');
const StopsBoarded = new Chart (StopBoarded, {
    type: 'bar',
    data: {
        labels: ['FOUNDATION HALL','QUAD AT 7TH ST','PEACHTREE AVE & WILLIAM L JONES DR','UNIVERSITY DR & PEACHTREE AVE','WEST RED LOT','WEST PURPLE LOT','W 10TH ST & STADIUM DR'],
        datasets: [{
            data: [121,190,111,152,195,102,206,142,125,123,167,182,138,129,182,182],
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

const PopularStop = document.getElementById('tech-104-gold');
const PopularStops = new Chart (PopularStop, {
    type: 'bar',
    data: {
        labels: ['FOUNDATION HALL','QUAD AT 7TH ST','PEACHTREE AVE & WILLIAM L JONES DR','UNIVERSITY DR & PEACHTREE AVE','WEST RED LOT','WEST PURPLE LOT','W 10TH ST & STADIUM DR'],
        datasets: [{
            data: [121,190,111,152,121,190,111,152,184,153,142,111],
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