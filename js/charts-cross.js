/* //DATA FUNCTIONS

    //AVG PASSANGER FUNCTIONS

            //BLUE ROUTE
                function getStops(){
                    $.getJSON('api_files/restful/getstops.php',{strSessionID:sessionStorage.getItem('sessionID')}, function(data){
                        let arrData = [];
                        $.each(data,function(stops){
                            arrData.push({x:stops.Stop_Name,y:stops.Passenger_Boarded});
                        })
                        return arrData;
                    })
                }
                
            //GOLD ROUTE
                function getStops(){
                    $.getJSON('api_files/restful/getstops.php',{strSessionID:sessionStorage.getItem('sessionID')}, function(data){
                        let arrData = [];
                        $.each(data,function(stops){
                            arrData.push({x:stops.Stop_Name,y:stops.Passenger_Boarded});
                        })
                        return arrData;
                    })
                }
    
            //COMPARE ROUTES
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
            
                //BLUE ROUTE
                    function getStops(){
                        $.getJSON('api_files/restful/getstops.php',{strSessionID:sessionStorage.getItem('sessionID')}, function(data){
                            let arrData = [];
                            $.each(data,function(stops){
                                arrData.push({x:stops.Stop_Name,y:stops.Passenger_Boarded});
                            })
                            return arrData;
                        })
                    }
                    
                //GOLD ROUTE
                    function getStops(){
                        $.getJSON('api_files/restful/getstops.php',{strSessionID:sessionStorage.getItem('sessionID')}, function(data){
                            let arrData = [];
                            $.each(data,function(stops){
                                arrData.push({x:stops.Stop_Name,y:stops.Passenger_Boarded});
                            })
                            return arrData;
                        })
                    }
        
                //COMPARE ROUTES
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

        //BLUE ROUTE
            function getStops(){
                $.getJSON('api_files/restful/getstops.php',{strSessionID:sessionStorage.getItem('sessionID')}, function(data){
                    let arrData = [];
                    $.each(data,function(stops){
                        arrData.push({x:stops.Stop_Name,y:stops.Passenger_Boarded});
                    })
                    return arrData;
                })
            }
            
        //GOLD ROUTE
            function getStops(){
                $.getJSON('api_files/restful/getstops.php',{strSessionID:sessionStorage.getItem('sessionID')}, function(data){
                    let arrData = [];
                    $.each(data,function(stops){
                        arrData.push({x:stops.Stop_Name,y:stops.Passenger_Boarded});
                    })
                    return arrData;
                })
            }

        //COMPARE ROUTES
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

                //BLUE ROUTE
                function getStops(){
                    $.getJSON('api_files/restful/getstops.php',{strSessionID:sessionStorage.getItem('sessionID')}, function(data){
                        let arrData = [];
                        $.each(data,function(stops){
                            arrData.push({x:stops.Stop_Name,y:stops.Passenger_Boarded});
                        })
                        return arrData;
                    })
                }
                
            //GOLD ROUTE
                function getStops(){
                    $.getJSON('api_files/restful/getstops.php',{strSessionID:sessionStorage.getItem('sessionID')}, function(data){
                        let arrData = [];
                        $.each(data,function(stops){
                            arrData.push({x:stops.Stop_Name,y:stops.Passenger_Boarded});
                        })
                        return arrData;
                    })
                }
    
            //COMPARE ROUTES
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

const AvgPassenger = document.getElementById('cross-101-blue');
const AvgPassengers = new Chart(AvgPassenger, {
    type: 'line',
    data: {
        labels: ['HUB','KROGER','AUTUMN APTS.','AZELEA APTS','RESCUE MISSION','HOUSING AUTHORITY','LIBRARY','TWIN OAKS APTS.','WALMART','PINEWOOD DRIVE','SATURDAYS TRIPS'],
        datasets: [{
            data: [206,249,143,127,242,145,112,200,290,180,233,270],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
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

const AvgTrip = document.getElementById('cross-102-blue');
const AvgTrips = new Chart(AvgTrip, {
    type: 'line',
    data: {
        labels: ['HUB','KROGER','AUTUMN APTS.','AZELEA APTS','RESCUE MISSION','HOUSING AUTHORITY','LIBRARY','TWIN OAKS APTS.','WALMART','PINEWOOD DRIVE','SATURDAYS TRIPS'],
        datasets: [{
            data: [19,10,20,14,7,12,6,18,13,1,20,3],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
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

const StopBoarded = document.getElementById('cross-103-blue');
const StopsBoarded = new Chart(StopBoarded, {
    type: 'bar',
    data: {
        labels: ['HUB','KROGER','AUTUMN APTS.','AZELEA APTS','RESCUE MISSION','HOUSING AUTHORITY','LIBRARY','TWIN OAKS APTS.','WALMART','PINEWOOD DRIVE','SATURDAYS TRIPS'],
        datasets: [{
            data: [121,190,111,152,162,190,111,152,102,206,142,125,123],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
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

const PopularStop = document.getElementById('cross-104-blue');
const PopularStops = new Chart (PopularStop, {
    type: 'bar',
    data: {
        labels: ['HUB','KROGER','AUTUMN APTS.','AZELEA APTS','RESCUE MISSION','HOUSING AUTHORITY','LIBRARY','TWIN OAKS APTS.','WALMART','PINEWOOD DRIVE','SATURDAYS TRIPS'],
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

//GOLD ROUTE
const AvgPassengerGold = document.getElementById('cross-201-gold');
const AvgPassengersGold = new Chart (AvgPassengerGold, {
    type: 'line',
    data: {
        labels: ['HUB','WALMART','SAVE A LOT','LIBRARY','HOSPITAL','HEALTH DEPARTMENT','RESCUE MISSION','GARRISON PARK','JACOBS CROSSING APTS.','FOOD CITY','KROGER'],
        datasets: [{
            data: [206,249,143,127,242,145,112,200,290,180,233,270],
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

const AvgTripGold = document.getElementById('cross-202-gold');
const AvgTripsGold = new Chart (AvgTripGold, {
        type: 'line',
        data: {
            labels: ['HUB','WALMART','SAVE A LOT','LIBRARY','HOSPITAL','HEALTH DEPARTMENT','RESCUE MISSION','GARRISON PARK','JACOBS CROSSING APTS.','FOOD CITY','KROGER'],
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

const StopBoardedGold = document.getElementById('cross-203-gold');
const StopsBoardedGold = new Chart (StopBoardedGold, {
    type: 'bar',
    data: {
        labels: ['HUB','WALMART','SAVE A LOT','LIBRARY','HOSPITAL','HEALTH DEPARTMENT','RESCUE MISSION','GARRISON PARK','JACOBS CROSSING APTS.','FOOD CITY','KROGER'],
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

const PopularStopGold = document.getElementById('cross-104-gold');
const PopularStopsGold = new Chart (PopularStopGold, {
    type: 'bar',
    data: {
        labels: ['HUB','WALMART','SAVE A LOT','LIBRARY','HOSPITAL','HEALTH DEPARTMENT','RESCUE MISSION','GARRISON PARK','JACOBS CROSSING APTS.','FOOD CITY','KROGER'],
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
  const AvgPassengerCompare = document.getElementById('cross-301-compare');
  const AvgPassengersCompare = new Chart (AvgPassengerCompare, {
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
  
  const AvgTripCompare = document.getElementById('cross-302-compare');
  const AvgTripsCompare = new Chart (AvgTripCompare, {
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
  
  const StopBoardedCompare = document.getElementById('cross-303-compare');
  const StopsBoardedCompare = new Chart (StopBoardedCompare, {
      type: 'bar',
      data: {
          labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
          datasets: [{
              label: 'Blue Route',
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

const PopularStopCompare = document.getElementById('cross-104-compare');
const PopularStopsCompare = new Chart (PopularStopCompare, {
    type: 'bar',
    data: {
        labels: ['HUB', 'WALMART', 'LOGANS', 'JACKSON PLAZA', 'SENIOR CENTER', 'PINE','7TH & WILLOW','TTU - STUDENT CENTER','HOSPITAL', 'LIBRARY', 'COURT HOUSE', 'KROGER'],
        datasets: [{
            label: 'Blue Route',
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