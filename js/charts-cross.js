const AvgPassenger = document.getElementById('cross-101-blue');
const AvgPassengers = new Chart(AvgPassenger, {
    type: 'line',
    data: {
        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
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

const PassengerRevenue = document.getElementById('cross-102-blue');
const PassengersRevenue = new Chart(PassengerRevenue, {
        type: 'pie',
        data: {
            labels: ['7am-10am', '10am-1pm', '1pm-4pm', '4pm-7pm'],
            datasets: [{
                label: 'Blue Route',
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

const AvgTrip = document.getElementById('cross-103-blue');
const AvgTrips = new Chart(AvgTrip, {
    type: 'line',
    data: {
        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
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

const StopBoarded = document.getElementById('cross-104-blue');
const StopsBoarded = new Chart(StopBoarded, {
    type: 'bar',
    data: {
        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
        datasets: [{
            label: 'Blue Route',
            data: [121,190,111,152,162,190,111,152,102,206,142,125,123],
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

const StopAlighted = document.getElementById('cross-105-blue');
const StopsAlighted = new Chart(StopAlighted, {
    type: 'bar',
    data: {
        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
        datasets: [{
            label: 'Blue Route',
            data: [121,190,111,152,121,190,111,152,105,190,111,152,102,206,142],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    });

const UnlinkedPassenger = document.getElementById('cross-106-blue');
const UnlinkedPassengers = new Chart(UnlinkedPassenger, {
    type: 'bar',
    data: {
        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
        datasets: [{
            label: 'Blue Route',
            data: [121,190,111,152,102,206,142,125,123,167,182,],
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
        indexAxis: 'y',
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    });

    //GOLD ROUTE
const PassengeronBoardgoldCR = document.getElementById('PassengeronBoard-goldCR');
const PassengersonBoardgoldCR = new Chart (PassengeronBoardgoldCR, {
    type: 'line',
    data: {
        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
        datasets: [{
            label: 'Gold Route',
            data: [206,249,143,127,242,145,112,200,290,180,233,270],
            backgroundColor: ['rgb(167,169,54,0.7)'],
            borderColor: ['rgb(167,169,54)'],
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

const AvgTripLengthgoldCR = document.getElementById('AvgTripLength-goldCR');
const AvgTripLengthsgoldCR = new Chart (AvgTripLengthgoldCR, {
    type: 'line',
    data: {
        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
        datasets: [{
            label: 'Gold Route',
            data: [19,10,20,14,7,12,6,18,13,1,20,3],
            backgroundColor: [
            'rgb(167,169,54,0.7)'
            ],
            borderColor: [
            'rgb(167,169,54)'
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

const PassengerRevenuePerHourgoldCR = document.getElementById('PassengerRevenuePerHour-goldCR');
const PassengersRevenuePerHourgoldCR = new Chart (PassengerRevenuePerHourgoldCR, {
    type: 'pie',
    data: {
        labels: ['7am-10am', '10am-1pm', '1pm-4pm', '4pm-7pm'],
        datasets: [{
            label: 'Gold Route',
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

const UnlinkedPassengergoldCR = document.getElementById('UnlinkedPassenger-goldCR');
const UnlinkedPassengersgoldCR = new Chart (UnlinkedPassengergoldCR, {
    type: 'bar',
    data: {
        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
        datasets: [{
            label: 'Gold Route',
            data: [121,190,111,152,105,190,111,152,102,206,142],
            backgroundColor: [
            'rgb(167,169,54,0.7)'
            ],
            borderColor: [
            'rgb(167,169,54)'
            ],
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

const StopsBoardedgoldCR = document.getElementById('StopsBoarded-goldCR');
const StopBoardedgoldCR = new Chart (StopsBoardedgoldCR, {
    type: 'bar',
    data: {
        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
        datasets: [{
            label: 'Gold Route',
            data: [121,190,111,152,117,152,105,190,156,152,102,206,],
            backgroundColor: [
            'rgb(167,169,54,0.7)'
            ],
            borderColor: [
            'rgb(167,169,54)'
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

const StopsAlightedgoldCR = document.getElementById('StopsAlighted-goldCR');
const StopAlightedgoldCR = new Chart (StopsAlightedgoldCR, {
    type: 'bar',
    data: {
        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
        datasets: [{
            label: 'Gold Route',
            data: [121,190,171,152,112,152,105,190,161,152,102,206,],
            backgroundColor: ['rgb(167,169,54,0.7)'],
            borderColor: ['rgb(167,169,54)'],
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