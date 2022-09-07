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
            backgroundColor: ['rgb(255,215,0,0.7)'],
            borderColor: ['rgb(255,215,0)'],
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
            backgroundColor: ['rgb(255,215,0,0.7)'],
            borderColor: ['rgb(255,215,0)'],
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
            indexAxis: 'y',
            responsive: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
        });

//COMPARE ROUTES
  const AvgPassengerBlue3 = document.getElementById('cross-301-compare');
  const AvgPassengersBlue3 = new Chart (AvgPassengerBlue3, {
  type: 'line',
  data: {
      labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
      datasets: [{
          label: 'Red Route',
          data: [206,249,143,127,242,145,112,200,290,180,233,270],
          backgroundColor: ['rgb(70,116,185,0.7)'],
          borderColor: ['rgb(70,116,185)'],
          borderWidth: 2,
          tension: 0.4,
      },
      {
          label: 'Gold Route',
          data: [106,149,43,27,142,45,12,100,190,80,133,170],
          backgroundColor: ['rgb(255,215,0,0.7)'],
          borderColor: ['rgb(255,215,0)'],
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
  
  const PassengerRevenueBlue3 = document.getElementById('cross-302-compare');
  const PassengersRevenueBlue3 = new Chart (PassengerRevenueBlue3, {
      type: 'doughnut',
      data: {
          label: 'Red Route',
          datasets: [{
              data: [10],
              backgroundColor: ['rgb(70,116,185,0.7)',],
              borderColor: ['rgb(70,116,185)',],
              borderWidth: 2
          },
          {
              label: 'Gold Route',
              data: [20],
              backgroundColor: ['rgb(255,215,0,0.7)'],
              borderColor: ['rgb(255,215,0)'],
              borderWidth: 2,
              tension: 0.4,
          }]
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
  
  const AvgTripBlue3 = document.getElementById('cross-303-compare');
  const AvgTripsBlue3 = new Chart (AvgTripBlue3, {
      type: 'line',
      data: {
          labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
          datasets: [{
              data: [19,10,20,14,7,12,6,18,13,1,20,3],
              backgroundColor: ['rgb(70,116,185,0.7)'],
              borderColor: ['rgb(70,116,185)'],
              borderWidth: 2,
              tension: 0.4,
          },
          {
              label: 'Gold Route',
              data: [9,5,2,10,5,2,3,8,7,1,20,6],
              backgroundColor: ['rgb(255,215,0,0.7)'],
              borderColor: ['rgb(255,215,0)'],
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
  
  const StopBoardedBlue3 = document.getElementById('cross-304-compare');
  const StopsBoardedBlue3 = new Chart (StopBoardedBlue3, {
      type: 'bar',
      data: {
          labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
          datasets: [{
              data: [19,10,20,14,7,12,6,18,13,3,20,3],
              backgroundColor: ['rgb(70,116,185,0.7)'],
              borderColor: ['rgb(70,116,185)'],
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
          },
          {
              label: 'Gold Route',
              data: [9,1,10,7,3,6,3,8,4,1,10,1],
              backgroundColor: ['rgb(255,215,0,0.7)'],
              borderColor: ['rgb(255,215,0)'],
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
    
  const StopAlightedBlue3 = document.getElementById('cross-305-compare');
  const StopsAlightedBlue3 = new Chart (StopAlightedBlue3, {
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
          },
          {
              label: 'Gold Route',
              data: [9,5,10,7,4,6,3,8,7,4,10,1],
              backgroundColor: ['rgb(255,215,0,0.7)'],
              borderColor: ['rgb(255,215,0)'],
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
  
  const UnlinkedPassengerBlue3 = document.getElementById('cross-306-compare');
  const UnlinkedPassengersBlue3 = new Chart (UnlinkedPassengerBlue3, {
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
          },
          {
              label: 'Gold Route',
              data: [9,5,10,7,3,6,3,8,3,4,10,3],
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
          responsive: false,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
    });