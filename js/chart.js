//CHARTS FOR COOKEVILLE
                //ALL GREEN ROUTES
            const PassangeronBoard = document.getElementById('PassengeronBoard-Cookeville');
            const PassangersonBoard = new Chart (PassangeronBoard, {
                type: 'bar',
                data: {
                    labels: ['HUB', 'WALMART', 'LOGANS', 'JACKSON PLAZA', 'SENIOR CENTER', 'PINE','7TH & WILLOW','TTU - STUDENT CENTER','HOSPITAL', 'LIBRARY', 'COURT HOUSE', 'KROGER'],
                    datasets: [{
                        label: 'Green Route',
                        data: [206,249,143,127,242,145,112,200,290,180,233,270],
                        backgroundColor: [
                        'rgb(50,162,71)'
                        ],
                        borderColor: [
                        'rgb(50,162,71)'
                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
                });

                const AvgTripLength = document.getElementById('AvgTripLength-Cookeville');
                const AvgTripLengths = new Chart (AvgTripLength, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'WALMART', 'LOGANS', 'JACKSON PLAZA', 'SENIOR CENTER', 'PINE','7TH & WILLOW','TTU - STUDENT CENTER','HOSPITAL', 'LIBRARY', 'COURT HOUSE', 'KROGER'],
                        datasets: [{
                            label: 'Green Route',
                            data: [19,10,20,14,7,12,6,18,13,1,20,3],
                            backgroundColor: [
                            'rgb(50,162,71)'
                            ],
                            borderColor: [
                            'rgb(50,162,71)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                  });

                const PassengerRevenuePerHour = document.getElementById('PassengerRevenuePerHour-Cookeville');
                const PassengersRevenuePerHour = new Chart (PassengerRevenuePerHour, {
                    type: 'bar',
                    data: {
                        labels: ['7am-10am', '10am-1pm', '1pm-4pm', '4pm-7pm'],
                        datasets: [{
                            label: 'Green Route Per Hour',
                            data: [121,190,111,152],
                            backgroundColor: [
                            'rgb(50,162,71)'
                            ],
                            borderColor: [
                            'rgb(50,162,71)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                    });

                //ALL BLUE ROUTES
            const PassangeronBoardBlue = document.getElementById('PassangeronBoardBlue-Cookeville');
            const PassangersonBoardBlue = new Chart (PassangeronBoardBlue, {
                type: 'bar',
                data: {
                    labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
                    datasets: [{
                        label: 'Blue Route',
                        data: [206,249,143,127,242,145,112,200,290,180,233,270],
                        backgroundColor: [
                        'rgb(70,116,185)'
                        ],
                        borderColor: [
                        'rgb(70,116,185)'
                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
                });
            
                const AvgTripLengthBlue = document.getElementById('AvgTripLengthBlue-Cookeville');
                const AvgTripLengthsBlue = new Chart (AvgTripLengthBlue, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
                        datasets: [{
                            label: 'Green Route',
                            data: [19,10,20,14,7,12,6,18,13,1,20,3],
                            backgroundColor: [
                            'rgb(70,116,185)'
                            ],
                            borderColor: [
                            'rgb(70,116,185)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                  });
                
                  const PassengerRevenueBlue = document.getElementById('PassengerRevenueBlue-Cookeville');
                  const PassengersRevenueBlue = new Chart (PassengerRevenueBlue, {
                      type: 'bar',
                      data: {
                          labels: ['7am-10am', '10am-1pm', '1pm-4pm', '4pm-7pm'],
                          datasets: [{
                              label: 'Green Route Per Hour',
                              data: [121,190,111,152],
                              backgroundColor: [
                              'rgb(70,116,185)'
                              ],
                              borderColor: [
                              'rgb(70,116,185)'
                              ],
                              borderWidth: 1
                          }]
                      },
                      options: {
                          scales: {
                              y: {
                                  beginAtZero: true
                              }
                          }
                      }
                      });