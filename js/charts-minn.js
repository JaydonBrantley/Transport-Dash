// Register the plugin to all charts:
Chart.register(ChartDataLabels);

 const AvgPassenger = document.getElementById('minn-101-red');
 const AvgPassengers = new Chart (AvgPassenger, {
     type: 'line',
     data: {
         labels: ['HUB','WEST RIVERSIDE','SENIOR CITIZEN','BEERSHEBA TOWERS','3 STAR MALL','GOODWILL','SAVE A LOT','WALMART','CASCADE AVENUE','GILLEY POOL'],
         datasets: [{
             data: [206,249,143,127,242,145,112,200,290,180,233,270],
             backgroundColor: ['rgb(238,29,35,0.7)'],
             borderColor: ['rgb(238,29,35)'],
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

const AvgTrip = document.getElementById('minn-102-red');
const AvgTrips = new Chart (AvgTrip, {
     type: 'line',
     data: {
         labels: ['HUB','WEST RIVERSIDE','SENIOR CITIZEN','BEERSHEBA TOWERS','3 STAR MALL','GOODWILL','SAVE A LOT','WALMART','CASCADE AVENUE','GILLEY POOL'],
         datasets: [{
             data: [19,10,20,14,7,12,6,18,13,1,20,3],
             backgroundColor: ['rgb(238,29,35,0.7)'],
             borderColor: ['rgb(238,29,35)'],
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

const StopBoarded = document.getElementById('minn-103-red');
const StopsBoarded = new Chart (StopBoarded, {
     type: 'bar',
     data: {
         labels: ['HUB','WEST RIVERSIDE','SENIOR CITIZEN','BEERSHEBA TOWERS','3 STAR MALL','GOODWILL','SAVE A LOT','WALMART','CASCADE AVENUE','GILLEY POOL'],
         datasets: [{
             data: [121,190,111,152,107,120,145,194,124,168],
             backgroundColor: ['rgb(238,29,35,0.7)'],
             borderColor: ['rgb(238,29,35)'],
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

const PopularStop = document.getElementById('minn-104-red');
const PopularStops = new Chart (PopularStop, {
    type: 'bar',
    data: {
        labels: ['HUB','WEST RIVERSIDE','SENIOR CITIZEN','BEERSHEBA TOWERS','3 STAR MALL','GOODWILL','SAVE A LOT','WALMART','CASCADE AVENUE','GILLEY POOL'],
        datasets: [{
            data: [121,190,111,152,121,190,111,152,184,153,142,111],
            backgroundColor: ['rgb(238,29,35,0.7)'],
            borderColor: ['rgb(238,29,35)'],
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

     //BLUE ROUTE
 const AvgPassengerBlue = document.getElementById('minn-201-blue');
 const AvgPassengersBlue = new Chart (AvgPassengerBlue, {
     type: 'line',
     data: {
         labels: ['HUB','REBEL HILL','WEST END AVENUE','CASCADE AVENUE','WALMART','SAVE A LOT','3 STAR MALL','BEERSHEBA TOWERS','DOLLAR STORE-BEERSHEBA HWY','WEST RIVERSIDE'],
         datasets: [{
             data: [206,249,143,127,242,145,112,200,290,180,233,270],
             backgroundColor: ['rgb(37,79,162,0.7)'],
             borderColor: ['rgb(37,79,162)'],
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

 const AvgTripBlue = document.getElementById('minn-202-blue');
 const AvgTripsBlue = new Chart (AvgTripBlue, {
     type: 'line',
     data: {
         labels: ['HUB','REBEL HILL','WEST END AVENUE','CASCADE AVENUE','WALMART','SAVE A LOT','3 STAR MALL','BEERSHEBA TOWERS','DOLLAR STORE-BEERSHEBA HWY','WEST RIVERSIDE'],
         datasets: [{
             data: [19,10,20,14,7,12,6,18,13,1,20,3],
             backgroundColor: ['rgb(37,79,162,0.7)'],
             borderColor: ['rgb(37,79,162)'],
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

 const StopBoardedBlue = document.getElementById('minn-203-blue');
 const StopsBoardedBlue = new Chart (StopBoardedBlue, {
     type: 'bar',
     data: {
         labels: ['HUB','REBEL HILL','WEST END AVENUE','CASCADE AVENUE','WALMART','SAVE A LOT','3 STAR MALL','BEERSHEBA TOWERS','DOLLAR STORE-BEERSHEBA HWY','WEST RIVERSIDE'],
         datasets: [{
             data: [121,190,111,152,152,184,153,142,111,124,165,187],
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
         responsive: false,
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
     });

     const PopularStopBlue = document.getElementById('minn-104-blue');
     const PopularStopsBlue = new Chart (PopularStopBlue, {
         type: 'bar',
         data: {
             labels: ['HUB','REBEL HILL','WEST END AVENUE','CASCADE AVENUE','WALMART','SAVE A LOT','3 STAR MALL','BEERSHEBA TOWERS','DOLLAR STORE-BEERSHEBA HWY','WEST RIVERSIDE'],
             datasets: [{
                 data: [121,190,111,152,121,190,111,152,184,153,142,111],
                 backgroundColor: ['rgb(37,79,162,0.7)'],
                 borderColor: ['rgb(37,79,162)'],
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
             responsive: false,
             scales: {
                 y: {
                     beginAtZero: true
                 }
             }
         }
     });

//COMPARE ROUTES
  const AvgPassengerCompare = document.getElementById('minn-301-compare');
const AvgPassengersCompare = new Chart (AvgPassengerCompare, {
type: 'line',
data: {
    labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
    datasets: [{
        label: 'Red Route',
        data: [206,249,143,127,242,145,112,200,290,180,233,270],
        backgroundColor: ['rgb(238,29,35,0.7)'],
        borderColor: ['rgb(238,29,35)'],
        borderWidth: 2,
        tension: 0.4,
    },
    {
        label: 'Blue Route',
        data: [106,149,43,27,142,45,12,100,190,80,133,170],
        backgroundColor: ['rgb(37,79,162,0.7)'],
        borderColor: ['rgb(37,79,162)'],
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

const AvgTripCompare = document.getElementById('minn-302-compare');
const AvgTripsCompare = new Chart (AvgTripCompare, {
    type: 'line',
    data: {
        labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
        datasets: [{
            label: 'Red Route',
            data: [19,10,20,14,7,12,6,18,13,1,20,3],
            backgroundColor: ['rgb(238,29,35,0.7)'],
            borderColor: ['rgb(238,29,35)'],
            borderWidth: 2,
            tension: 0.4,
        },
        {
            label: 'Blue Route',
            data: [9,5,2,10,5,2,3,8,7,1,20,6],
            backgroundColor: ['rgb(37,79,162,0.7)'],
            borderColor: ['rgb(37,79,162)'],
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

const StopBoardedCompare = document.getElementById('minn-303-compare');
const StopsBoardedCompare = new Chart (StopBoardedCompare, {
    type: 'bar',
    data: {
        labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
        datasets: [{
            label: 'Red Route',
            data: [19,10,20,14,7,12,6,18,13,3,20,3],
            backgroundColor: ['rgb(238,29,35,0.7)'],
            borderColor: ['rgb(238,29,35)'],
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
        },
        {
            label: 'Blue Route',
            data: [9,1,10,7,3,6,3,8,4,1,10,1],
            backgroundColor: ['rgb(37,79,162,0.7)'],
            borderColor: ['rgb(37,79,162)'],
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

  const PopularStopCompare = document.getElementById('minn-104-compare');
  const PopularStopsCompare = new Chart (PopularStopCompare, {
      type: 'bar',
      data: {
          labels: ['HUB', 'WALMART', 'LOGANS', 'JACKSON PLAZA', 'SENIOR CENTER', 'PINE','7TH & WILLOW','TTU - STUDENT CENTER','HOSPITAL', 'LIBRARY', 'COURT HOUSE', 'KROGER'],
          datasets: [{
            label: 'Red Route',
            data: [19,10,20,14,7,12,6,18,13,3,20,3],
            backgroundColor: ['rgb(238,29,35,0.7)'],
            borderColor: ['rgb(238,29,35)'],
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
        },
        {
            label: 'Blue Route',
            data: [9,1,10,7,3,6,3,8,4,1,10,1],
            backgroundColor: ['rgb(37,79,162,0.7)'],
            borderColor: ['rgb(37,79,162)'],
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