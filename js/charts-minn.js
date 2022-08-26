
 const AvgPassenger = document.getElementById('minn-101-red');
 const AvgPassengers = new Chart (AvgPassenger, {
     type: 'line',
     data: {
         labels: ['HUB', 'WEST RIVERSIDE', 'SENIOR CITIZEN', 'BEERSHEBA TOWER', '3 START MALL', 'GOODWILL', 'SAVE A LOT', 'WALMART', 'CASCADE AVANUE', 'GILLEY POOL'],
         datasets: [{
             data: [206,249,143,127,242,145,112,200,290,180,233,270],
             backgroundColor: ['rgb(238,29,35,0.7)'],
             borderColor: ['rgb(238,29,35)'],
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

const PassengerRevenue = document.getElementById('minn-102-red');
const PassengersRevenue = new Chart (PassengerRevenue, {
         type: 'doughnut',
         data: {
             datasets: [{
                 data: [10],
                 backgroundColor: ['rgb(238,29,35,0.7)',],
                 borderColor: ['rgb(238,29,35)',],
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

const AvgTrip = document.getElementById('minn-103-red');
const AvgTrips = new Chart (AvgTrip, {
     type: 'line',
     data: {
         labels: ['HUB', 'WEST RIVERSIDE', 'SENIOR CITIZEN', 'BEERSHEBA TOWER', '3 START MALL', 'GOODWILL', 'SAVE A LOT', 'WALMART', 'CASCADE AVANUE', 'GILLEY POOL'],
         datasets: [{
             data: [19,10,20,14,7,12,6,18,13,1,20,3],
             backgroundColor: [
             'rgb(238,29,35,0.7)'
             ],
             borderColor: [
             'rgb(238,29,35)'
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

const StopBoarded = document.getElementById('minn-104-red');
const StopsBoarded = new Chart (StopBoarded, {
     type: 'bar',
     data: {
         labels: ['HUB', 'WEST RIVERSIDE', 'SENIOR CITIZEN', 'BEERSHEBA TOWER', '3 START MALL', 'GOODWILL', 'SAVE A LOT', 'WALMART', 'CASCADE AVANUE', 'GILLEY POOL'],
         datasets: [{
             data: [121,190,111,152,107,120,145,194,124,168],
             backgroundColor: [
             'rgb(238,29,35,0.7)'
             ],
             borderColor: [
             'rgb(238,29,35)'
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

const StopAlighted = document.getElementById('minn-105-red');
const StopsAlighted = new Chart (StopAlighted, {
     type: 'bar',
     data: {
         labels: ['HUB', 'WEST RIVERSIDE', 'SENIOR CITIZEN', 'BEERSHEBA TOWER', '3 START MALL', 'GOODWILL', 'SAVE A LOT', 'WALMART', 'CASCADE AVANUE', 'GILLEY POOL'],
         datasets: [{
             data: [121,190,111,152,125,107,120,145,194,124,168,152,197],
             backgroundColor: ['rgb(238,29,35,0.7)'],
             borderColor: ['rgb(238,29,35)'],
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

const UnlinkedPassenger = document.getElementById('minn-106-red');
const UnlinkedPassengers = new Chart (UnlinkedPassenger, {
         type: 'bar',
         data: {
             labels: ['HUB', 'WEST RIVERSIDE', 'SENIOR CITIZEN', 'BEERSHEBA TOWER', '3 START MALL', 'GOODWILL', 'SAVE A LOT', 'WALMART', 'CASCADE AVANUE', 'GILLEY POOL'],
             datasets: [{
                 data: [121,190,111,152,107,120,145,194,124,168],
                 backgroundColor: [
                 'rgb(238,29,35,0.7)'
                 ],
                 borderColor: [
                 'rgb(238,29,35)'
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

     //BLUE ROUTE
 const AvgPassengerBlue = document.getElementById('minn-201-blue');
 const AvgPassengersBlue = new Chart (AvgPassengerBlue, {
     type: 'line',
     data: {
         labels: ['HUB', 'REBEL HILL', 'WESTEDN AVENUE', 'CASCADE AVENUE', 'WALMART', 'SAVE A LOT', '3 STAR MALL', 'BEERSHEBA TOWERS', 'DOLLAR STORE-BEERSHEBA HWY', 'WEST RIVIERSIDE'],
         datasets: [{
             data: [206,249,143,127,242,145,112,200,290,180,233,270],
             backgroundColor: ['rgb(37,79,162,0.7)'],
             borderColor: ['rgb(37,79,162)'],
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

const PassengerRevenueBlue = document.getElementById('minn-202-blue');
const PassengersRevenueBlue = new Chart (PassengerRevenueBlue, {
         type: 'doughnut',
         data: {
             labels: ['7am-10am', '10am-1pm', '1pm-4pm', '4pm-7pm'],
             datasets: [{
                 data: [121],
                 backgroundColor: ['rgb(37,79,162,0.7)',],
                 borderColor: ['rgb(37,79,162)'],
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

 const AvgTripBlue = document.getElementById('minn-203-blue');
 const AvgTripsBlue = new Chart (AvgTripBlue, {
     type: 'line',
     data: {
         labels: ['HUB', 'REBEL HILL', 'WESTEDN AVENUE', 'CASCADE AVENUE', 'WALMART', 'SAVE A LOT', '3 STAR MALL', 'BEERSHEBA TOWERS', 'DOLLAR STORE-BEERSHEBA HWY', 'WEST RIVIERSIDE'],
         datasets: [{
             data: [19,10,20,14,7,12,6,18,13,1,20,3],
             backgroundColor: [
             'rgb(37,79,162,0.7)'
             ],
             borderColor: [
             'rgb(37,79,162)'
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

 const StopBoardedBlue = document.getElementById('minn-204-blue');
 const StopsBoardedBlue = new Chart (StopBoardedBlue, {
     type: 'bar',
     data: {
         labels: ['HUB', 'REBEL HILL', 'WESTEDN AVENUE', 'CASCADE AVENUE', 'WALMART', 'SAVE A LOT', '3 STAR MALL', 'BEERSHEBA TOWERS', 'DOLLAR STORE-BEERSHEBA HWY', 'WEST RIVIERSIDE'],
         datasets: [{
             data: [121,190,111,152,152,184,153,142,111,124,165,187],
             backgroundColor: [
             'rgb(37,79,162,0.7)'
             ],
             borderColor: [
             'rgb(37,79,162)'
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

 const StopAlightedBlue = document.getElementById('minn-205-blue');
 const StopsAlightedBlue = new Chart (StopAlightedBlue, {
     type: 'bar',
     data: {
         labels: ['HUB', 'REBEL HILL', 'WESTEDN AVENUE', 'CASCADE AVENUE', 'WALMART', 'SAVE A LOT', '3 STAR MALL', 'BEERSHEBA TOWERS', 'DOLLAR STORE-BEERSHEBA HWY', 'WEST RIVIERSIDE'],
         datasets: [{
             data: [121,190,111,152,184,153,142,111,124,165,187,198],
             backgroundColor: ['rgb(37,79,162,0.7)'],
             borderColor: ['rgb(37,79,162)'],
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

const UnlinkedPassengerBlue = document.getElementById('minn-206-blue');
const UnlinkedPassengersBlue = new Chart (UnlinkedPassengerBlue, {
         type: 'bar',
         data: {
             labels: ['HUB', 'REBEL HILL', 'WESTEDN AVENUE', 'CASCADE AVENUE', 'WALMART', 'SAVE A LOT', '3 STAR MALL', 'BEERSHEBA TOWERS', 'DOLLAR STORE-BEERSHEBA HWY', 'WEST RIVIERSIDE'],
             datasets: [{
                 data: [121,190,111,152,152,184,153,142,111,124,165,187],
                 backgroundColor: [
                 'rgb(37,79,162,0.7)'
                 ],
                 borderColor: [
                 'rgb(37,79,162)'
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