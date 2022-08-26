const AvgPassenger = document.getElementById('cross-101-blue');
const AvgPassengers = new Chart(AvgPassenger, {
    type: 'line',
    data: {
        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
        datasets: [{
            data: [206,249,143,127,242,145,112,200,290,180,233,270],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
            borderWidth: 2,
            tension: 0.4,
            fill: true,
        }]
    },
    options: {
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

const PassengerRevenue = document.getElementById('cross-102-blue');
const PassengersRevenue = new Chart(PassengerRevenue, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [10],
                backgroundColor: ['rgb(70,116,185,0.7)'],
                borderColor: ['rgb(70,116,185)',],
                borderWidth: 2
            }]
        },
        options: {
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

const AvgTrip = document.getElementById('cross-103-blue');
const AvgTrips = new Chart(AvgTrip, {
    type: 'line',
    data: {
        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
        datasets: [{
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

const StopBoarded = document.getElementById('cross-104-blue');
const StopsBoarded = new Chart(StopBoarded, {
    type: 'bar',
    data: {
        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
        datasets: [{
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

const StopAlighted = document.getElementById('cross-105-blue');
const StopsAlighted = new Chart(StopAlighted, {
    type: 'bar',
    data: {
        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
        datasets: [{
            data: [121,190,111,152,121,190,111,152,105,190,111,152,102,206,142],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
            borderWidth: 2
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
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

    //GOLD ROUTE
const AvgPassengerGold = document.getElementById('cross-201-gold');
const AvgPassengersGold = new Chart (AvgPassengerGold, {
    type: 'line',
    data: {
        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
        datasets: [{
            data: [206,249,143,127,242,145,112,200,290,180,233,270],
            backgroundColor: ['rgb(167,169,54,0.7)'],
            borderColor: ['rgb(167,169,54)'],
            borderWidth: 2,
            tension: 0.4,
            fill: true,
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

const PassengerRevenueGold = document.getElementById('cross-202-gold');
const PassengersRevenueGold = new Chart (PassengerRevenueGold, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [10],
            backgroundColor: ['rgb(167,169,54,0.7)',],
            borderColor: ['rgb(167,169,54)'],
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

const AvgTripGold = document.getElementById('cross-203-gold');
const AvgTripsGold = new Chart (AvgTripGold, {
        type: 'line',
        data: {
            labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
            datasets: [{

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

const StopBoardedGold = document.getElementById('cross-204-gold');
const StopsBoardedGold = new Chart (StopBoardedGold, {
    type: 'bar',
    data: {
        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
        datasets: [{
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

const StopAlightedGold = document.getElementById('cross-205-gold');
const StopsAlightedGold = new Chart (StopAlightedGold, {
    type: 'bar',
    data: {
        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
        datasets: [{
            data: [121,190,171,152,112,152,105,190,161,152,102,206,],
            backgroundColor: ['rgb(167,169,54,0.7)'],
            borderColor: ['rgb(167,169,54)'],
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

const UnlinkedPassengerGold = document.getElementById('cross-206-gold');
const UnlinkedPassengersGold = new Chart (UnlinkedPassengerGold, {
        type: 'bar',
        data: {
            labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
            datasets: [{
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