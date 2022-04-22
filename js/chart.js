//CHARTS FOR COOKEVILLE
                //GREEN ROUTES
                const PassengeronBoard = document.getElementById('PassengeronBoard-Cookeville');
                const PassangersonBoard = new Chart (PassengeronBoard, {
                    type: 'line',
                    data: {
                        labels: ['HUB', 'WALMART', 'LOGANS', 'JACKSON PLAZA', 'SENIOR CENTER', 'PINE','7TH & WILLOW','TTU - STUDENT CENTER','HOSPITAL', 'LIBRARY', 'COURT HOUSE', 'KROGER'],
                        datasets: [{
                            label: 'Green Route',
                            data: [206,249,143,127,242,145,112,200,290,180,233,270],
                            backgroundColor: 'rgb(50,162,71,0.5)',
                            borderColor: 'rgb(50,162,71)',
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

                const AvgTripLength = document.getElementById('AvgTripLength-Cookeville');
                const AvgTripLengths = new Chart (AvgTripLength, {
                    type: 'line',
                    data: {
                        labels: ['HUB', 'WALMART', 'LOGANS', 'JACKSON PLAZA', 'SENIOR CENTER', 'PINE','7TH & WILLOW','TTU - STUDENT CENTER','HOSPITAL', 'LIBRARY', 'COURT HOUSE', 'KROGER'],
                        datasets: [{
                            label: 'Green Route',
                            data: [19,10,20,14,7,12,6,18,13,1,20,3],
                            backgroundColor: [
                            'rgb(50,162,71,0.5)'
                            ],
                            borderColor: [
                            'rgb(50,162,71)'
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

                const PassengerRevenuePerHour = document.getElementById('PassengerRevenuePerHour-Cookeville');
                const PassengersRevenuePerHour = new Chart (PassengerRevenuePerHour, {
                    type: 'pie',
                    data: {
                        labels: ['7am-10am', '10am-1pm', '1pm-4pm', '4pm-7pm'],
                        datasets: [{
                            label: 'Green Route Per Hour',
                            data: [10,20,30,40],
                            backgroundColor: [
                                'rgb(50,162,71,0.5)',
                                'rgb(70,116,185,0.5)',
                                'rgb(167,169,54,0.5)',
                                'rgb(147,80,159,0.5)',
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

                const UnlinkedPassenger = document.getElementById('UnlinkedPassenger-Cookeville');
                const UnlinkedPassengers = new Chart (UnlinkedPassenger, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'WALMART', 'LOGANS', 'JACKSON PLAZA', 'SENIOR CENTER', 'PINE','7TH & WILLOW','TTU - STUDENT CENTER','HOSPITAL', 'LIBRARY', 'COURT HOUSE', 'KROGER'],
                        datasets: [{
                            label: 'Green Route Per Hour',
                            data: [121,190,111,152],
                            backgroundColor: [
                            'rgb(50,162,71,0.5)'
                            ],
                            borderColor: [
                            'rgb(50,162,71)'
                            ],
                            borderWidth: 1
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

                const StopsBoarded = document.getElementById('StopsBoarded-Cookeville');
                const StopBoarded = new Chart (StopsBoarded, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'WALMART', 'LOGANS', 'JACKSON PLAZA', 'SENIOR CENTER', 'PINE','7TH & WILLOW','TTU - STUDENT CENTER','HOSPITAL', 'LIBRARY', 'COURT HOUSE', 'KROGER'],
                        datasets: [{
                            label: 'Green Route Per Hour',
                            data: [121,190,111,152],
                            backgroundColor: [
                            'rgb(50,162,71,0.5)'
                            ],
                            borderColor: [
                            'rgb(50,162,71)'
                            ],
                            borderWidth: 1
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

                const StopsAlighted = document.getElementById('StopsAlighted-Cookeville');
                const StopAlighted = new Chart (StopsAlighted, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'WALMART', 'LOGANS', 'JACKSON PLAZA', 'SENIOR CENTER', 'PINE','7TH & WILLOW','TTU - STUDENT CENTER','HOSPITAL', 'LIBRARY', 'COURT HOUSE', 'KROGER'],
                        datasets: [{
                            label: 'Green Route Per Hour',
                            data: [121,190,111,152],
                            backgroundColor: ['rgb(50,162,71,0.5)'],
                            borderColor: ['rgb(50,162,71)'],
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

                //BLUE ROUTES
            const PassengeronBoardBlue = document.getElementById('PassengeronBoardBlue-Cookeville');
            const PassangersonBoardBlue = new Chart (PassengeronBoardBlue, {
                type: 'line',
                data: {
                    labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
                    datasets: [{
                        label: 'Blue Route',
                        data: [206,249,143,127,242,145,112,200,290,180,233,270],
                        backgroundColor: ['rgb(70,116,185,0.5)'],
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
            
                const AvgTripLengthBlue = document.getElementById('AvgTripLengthBlue-Cookeville');
                const AvgTripLengthsBlue = new Chart (AvgTripLengthBlue, {
                    type: 'line',
                    data: {
                        labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
                        datasets: [{
                            label: 'Blue Route',
                            data: [19,10,20,14,7,12,6,18,13,1,20,3],
                            backgroundColor: [
                            'rgb(70,116,185,0.5)'
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
                
                  const PassengerRevenueBlue = document.getElementById('PassengerRevenueBlue-Cookeville');
                  const PassengersRevenueBlue = new Chart (PassengerRevenueBlue, {
                      type: 'pie',
                      data: {
                          labels: ['7am-10am', '10am-1pm', '1pm-4pm', '4pm-7pm'],
                          datasets: [{
                              label: 'Blue Route Per Hour',
                              data: [10,20,30,40],
                              backgroundColor: [
                              'rgb(70,116,185,0.5)'
                              ],
                              borderColor: [
                              'rgb(70,116,185)'
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

                const UnlinkedPassengerBlue = document.getElementById('UnlinkedPassengerBlue-Cookeville');
                const UnlinkedPassengersBlue = new Chart (UnlinkedPassengerBlue, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
                        datasets: [{
                            label: 'Blue Route',
                            data: [19,10,20,14,7,12,6,18,13,1,20,3],
                            backgroundColor: [
                            'rgb(70,116,185,0.5)'
                            ],
                            borderColor: [
                            'rgb(70,116,185)'
                            ],
                            borderWidth: 2
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

                const StopsBoardedBlue = document.getElementById('StopsBoardedBlue-Cookeville');
                const StopBoardedBlue = new Chart (StopsBoardedBlue, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
                        datasets: [{
                            label: 'Blue Route',
                            data: [19,10,20,14,7,12,6,18,13,1,20,3],
                            backgroundColor: [
                            'rgb(70,116,185,0.5)'
                            ],
                            borderColor: [
                            'rgb(70,116,185)'
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
                  
                const StopsAlightedBlue = document.getElementById('StopsAlightedBlue-Cookeville');
                const StopAlightedBlue = new Chart (StopsAlightedBlue, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
                        datasets: [{
                            label: 'Blue Route',
                            data: [19,10,20,14,7,12,6,18,13,1,20,3],
                            backgroundColor: ['rgb(70,116,185,0.5)'],
                            borderColor: ['rgb(70,116,185)'],
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

//CHARTS FOR ALGOOD
                const PassengeronBoardA = document.getElementById('PassengeronBoard-Algood');
                const PassangersonBoardA = new Chart (PassengeronBoardA, {
                    type: 'line',
                    data: {
                        labels: ['HUB', 'JUSTICE CENTER', 'PREMIER MEDICAL', 'NORTHSIDE IGA', 'FIRST HORIZON BANK', 'WALMART', 'ROLLING MEADOWS APTS.', 'ALGOOD HOUSING', 'ALGOOD MANOR', 'SENIOR CENTER', 'GARDEN GROVER APTS.', 'QUINLAND RIDGE APTS.', ' WYNONA','SOCIAL SECURITY OFFICE', 'CHECH', 'EMPLOYMENT SECURITY OFFICE',],
                        datasets: [{
                            label: 'Purple Route',
                            data: [206,249,143,127,242,145,112,200,290,180,233,270],
                            backgroundColor: ['rgb(147,80,159,0.5)'],
                            borderColor: ['rgb(147,80,159)'],
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

                const AvgTripLengthA = document.getElementById('AvgTripLength-Algood');
                const AvgTripLengthsA = new Chart (AvgTripLengthA, {
                    type: 'line',
                    data: {
                        labels: ['HUB', 'JUSTICE CENTER', 'PREMIER MEDICAL', 'NORTHSIDE IGA', 'FIRST HORIZON BANK', 'WALMART', 'ROLLING MEADOWS APTS.', 'ALGOOD HOUSING', 'ALGOOD MANOR', 'SENIOR CENTER', 'GARDEN GROVER APTS.', 'QUINLAND RIDGE APTS.', ' WYNONA','SOCIAL SECURITY OFFICE', 'CHECH', 'EMPLOYMENT SECURITY OFFICE',],
                        datasets: [{
                            label: 'Purple Route',
                            data: [19,10,20,14,7,12,6,18,13,1,20,3],
                            backgroundColor: [
                            'rgb(147,80,159,0.5)'
                            ],
                            borderColor: [
                            'rgb(147,80,159)'
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

                const PassengerRevenuePerHourA = document.getElementById('PassengerRevenuePerHour-Algood');
                const PassengersRevenuePerHourA = new Chart (PassengerRevenuePerHourA, {
                    type: 'pie',
                    data: {
                        labels: ['7am-10am', '10am-1pm', '1pm-4pm', '4pm-7pm'],
                        datasets: [{
                            label: 'Purple Route',
                            data: [10,20,30,40],
                            backgroundColor: [
                            'rgb(147,80,159,0.5)'
                            ],
                            borderColor: [
                            'rgb(147,80,159)'
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

                const UnlinkedPassengerA = document.getElementById('UnlinkedPassenger-Algood');
                const UnlinkedPassengersA = new Chart (UnlinkedPassengerA, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'JUSTICE CENTER', 'PREMIER MEDICAL', 'NORTHSIDE IGA', 'FIRST HORIZON BANK', 'WALMART', 'ROLLING MEADOWS APTS.', 'ALGOOD HOUSING', 'ALGOOD MANOR', 'SENIOR CENTER', 'GARDEN GROVER APTS.', 'QUINLAND RIDGE APTS.', ' WYNONA','SOCIAL SECURITY OFFICE', 'CHECH', 'EMPLOYMENT SECURITY OFFICE',],
                        datasets: [{
                            label: 'Purple Route',
                            data: [121,190,111,152],
                            backgroundColor: [
                            'rgb(147,80,159,0.5)'
                            ],
                            borderColor: [
                            'rgb(147,80,159)'
                            ],
                            borderWidth: 2
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

                const StopsBoardedA = document.getElementById('StopsBoarded-Algood');
                const StopBoardedA = new Chart (StopsBoardedA, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'JUSTICE CENTER', 'PREMIER MEDICAL', 'NORTHSIDE IGA', 'FIRST HORIZON BANK', 'WALMART', 'ROLLING MEADOWS APTS.', 'ALGOOD HOUSING', 'ALGOOD MANOR', 'SENIOR CENTER', 'GARDEN GROVER APTS.', 'QUINLAND RIDGE APTS.', ' WYNONA','SOCIAL SECURITY OFFICE', 'CHECH', 'EMPLOYMENT SECURITY OFFICE',],
                        datasets: [{
                            label: 'Purple Route',
                            data: [121,190,111,152],
                            backgroundColor: [
                            'rgb(147,80,159,0.5)'
                            ],
                            borderColor: [
                            'rgb(147,80,159)'
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

                const StopsAlightedA = document.getElementById('StopsAlighted-Algood');
                const StopAlightedA = new Chart (StopsAlightedA, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'JUSTICE CENTER', 'PREMIER MEDICAL', 'NORTHSIDE IGA', 'FIRST HORIZON BANK', 'WALMART', 'ROLLING MEADOWS APTS.', 'ALGOOD HOUSING', 'ALGOOD MANOR', 'SENIOR CENTER', 'GARDEN GROVER APTS.', 'QUINLAND RIDGE APTS.', ' WYNONA','SOCIAL SECURITY OFFICE', 'CHECH', 'EMPLOYMENT SECURITY OFFICE',],
                        datasets: [{
                            label: 'Purple Route',
                            data: [121,190,111,152],
                            backgroundColor: ['rgb(147,80,159,0.5)'],
                            borderColor: ['rgb(147,80,159)'],
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

//CROSSVILLE
                    //BLUE ROUTE
                const PassengeronBoardblueCR = document.getElementById('PassengeronBoard-blueCR');
                const PassengersonBoardblueCR = new Chart (PassengeronBoardblueCR, {
                    type: 'line',
                    data: {
                        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
                        datasets: [{
                            label: 'Blue Route',
                            data: [206,249,143,127,242,145,112,200,290,180,233,270],
                            backgroundColor: ['rgb(70,116,185,0.5)'],
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

                const AvgTripLengthblueCR = document.getElementById('AvgTripLength-blueCR');
                const AvgTripLengthsblueCR = new Chart (AvgTripLengthblueCR, {
                    type: 'line',
                    data: {
                        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
                        datasets: [{
                            label: 'Blue Route',
                            data: [19,10,20,14,7,12,6,18,13,1,20,3],
                            backgroundColor: [
                            'rgb(70,116,185,0.5)'
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

                const PassengerRevenuePerHourblueCR = document.getElementById('PassengerRevenuePerHour-blueCR');
                const PassengersRevenuePerHourblueCR = new Chart (PassengerRevenuePerHourblueCR, {
                    type: 'pie',
                    data: {
                        labels: ['7am-10am', '10am-1pm', '1pm-4pm', '4pm-7pm'],
                        datasets: [{
                            label: 'Blue Route',
                            data: [10,20,30,40],
                            backgroundColor: [
                            'rgb(70,116,185,0.5)'
                            ],
                            borderColor: [
                            'rgb(70,116,185)'
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

                const UnlinkedPassengerblueCR = document.getElementById('UnlinkedPassenger-blueCR');
                const UnlinkedPassengersblueCR = new Chart (UnlinkedPassengerblueCR, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
                        datasets: [{
                            label: 'Blue Route',
                            data: [121,190,111,152],
                            backgroundColor: [
                            'rgb(70,116,185,0.5)'
                            ],
                            borderColor: [
                            'rgb(70,116,185)'
                            ],
                            borderWidth: 2
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

                const StopsBoardedblueCR = document.getElementById('StopsBoarded-blueCR');
                const StopBoardedblueCR = new Chart (StopsBoardedblueCR, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
                        datasets: [{
                            label: 'Blue Route',
                            data: [121,190,111,152],
                            backgroundColor: [
                            'rgb(70,116,185,0.5)'
                            ],
                            borderColor: [
                            'rgb(70,116,185)'
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

                const StopsAlightedblueCR = document.getElementById('StopsAlighted-blueCR');
                const StopAlightedblueCR = new Chart (StopsAlightedblueCR, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
                        datasets: [{
                            label: 'Blue Route',
                            data: [121,190,111,152],
                            backgroundColor: ['rgb(70,116,185,0.5)'],
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

                    //GOLD ROUTE
                const PassengeronBoardgoldCR = document.getElementById('PassengeronBoard-goldCR');
                const PassengersonBoardgoldCR = new Chart (PassengeronBoardgoldCR, {
                    type: 'line',
                    data: {
                        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
                        datasets: [{
                            label: 'Gold Route',
                            data: [206,249,143,127,242,145,112,200,290,180,233,270],
                            backgroundColor: ['rgb(167,169,54,0.5)'],
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
                            'rgb(167,169,54,0.5)'
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
                            'rgb(167,169,54,0.5)'
                            ],
                            borderColor: [
                            'rgb(167,169,54)'
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
                            data: [121,190,111,152],
                            backgroundColor: [
                            'rgb(167,169,54,0.5)'
                            ],
                            borderColor: [
                            'rgb(167,169,54)'
                            ],
                            borderWidth: 2
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
                            data: [121,190,111,152],
                            backgroundColor: [
                            'rgb(167,169,54,0.5)'
                            ],
                            borderColor: [
                            'rgb(167,169,54)'
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

                const StopsAlightedgoldCR = document.getElementById('StopsAlighted-goldCR');
                const StopAlightedgoldCR = new Chart (StopsAlightedgoldCR, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
                        datasets: [{
                            label: 'Gold Route',
                            data: [121,190,111,152],
                            backgroundColor: ['rgb(167,169,54,0.5)'],
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

//MCMINNVILLE
                    //RED ROUTE
                const PassengeronBoardredMC = document.getElementById('PassengeronBoard-redMC');
                const PassengersonBoardredMC = new Chart (PassengeronBoardredMC, {
                    type: 'line',
                    data: {
                        labels: ['HUB', 'WEST RIVERSIDE', 'SENIOR CITIZEN', 'BEERSHEBA TOWER', '3 START MALL', 'GOODWILL', 'SAVE A LOT', 'WALMART', 'CASCADE AVANUE', 'GILLEY POOL'],
                        datasets: [{
                            label: 'Red Route',
                            data: [206,249,143,127,242,145,112,200,290,180,233,270],
                            backgroundColor: ['rgb(238,29,35,0.5)'],
                            borderColor: ['rgb(238,29,35)'],
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

                const AvgTripLengthredMC = document.getElementById('AvgTripLength-redMC');
                const AvgTripLengthsredMC = new Chart (AvgTripLengthredMC, {
                    type: 'line',
                    data: {
                        labels: ['HUB', 'WEST RIVERSIDE', 'SENIOR CITIZEN', 'BEERSHEBA TOWER', '3 START MALL', 'GOODWILL', 'SAVE A LOT', 'WALMART', 'CASCADE AVANUE', 'GILLEY POOL'],
                        datasets: [{
                            label: 'Red Route',
                            data: [19,10,20,14,7,12,6,18,13,1,20,3],
                            backgroundColor: [
                            'rgb(238,29,35,0.5)'
                            ],
                            borderColor: [
                            'rgb(238,29,35)'
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

                const PassengerRevenuePerHourredMC = document.getElementById('PassengerRevenuePerHour-redMC');
                const PassengersRevenuePerHourredMC = new Chart (PassengerRevenuePerHourredMC, {
                    type: 'pie',
                    data: {
                        labels: ['7am-10am', '10am-1pm', '1pm-4pm', '4pm-7pm'],
                        datasets: [{
                            label: 'Red Route',
                            data: [10,20,30,40],
                            backgroundColor: [
                            'rgb(238,29,35,0.5)'
                            ],
                            borderColor: [
                            'rgb(238,29,35)'
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

                const UnlinkedPassengerredMC = document.getElementById('UnlinkedPassenger-redMC');
                const UnlinkedPassengersredMC = new Chart (UnlinkedPassengerredMC, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'WEST RIVERSIDE', 'SENIOR CITIZEN', 'BEERSHEBA TOWER', '3 START MALL', 'GOODWILL', 'SAVE A LOT', 'WALMART', 'CASCADE AVANUE', 'GILLEY POOL'],
                        datasets: [{
                            label: 'Red Route',
                            data: [121,190,111,152],
                            backgroundColor: [
                            'rgb(238,29,35,0.5)'
                            ],
                            borderColor: [
                            'rgb(238,29,35)'
                            ],
                            borderWidth: 2,
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

                const StopsBoardedredMC = document.getElementById('StopsBoarded-redMC');
                const StopBoardedredMC = new Chart (StopsBoardedredMC, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'WEST RIVERSIDE', 'SENIOR CITIZEN', 'BEERSHEBA TOWER', '3 START MALL', 'GOODWILL', 'SAVE A LOT', 'WALMART', 'CASCADE AVANUE', 'GILLEY POOL'],
                        datasets: [{
                            label: 'Red Route',
                            data: [121,190,111,152],
                            backgroundColor: [
                            'rgb(238,29,35,0.5)'
                            ],
                            borderColor: [
                            'rgb(238,29,35)'
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

                const StopsAlightedredMC = document.getElementById('StopsAlighted-redMC');
                const StopAlightedredMC = new Chart (StopsAlightedredMC, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'WEST RIVERSIDE', 'SENIOR CITIZEN', 'BEERSHEBA TOWER', '3 START MALL', 'GOODWILL', 'SAVE A LOT', 'WALMART', 'CASCADE AVANUE', 'GILLEY POOL'],
                        datasets: [{
                            label: 'Red Route',
                            data: [121,190,111,152],
                            backgroundColor: ['rgb(238,29,35,0.5)'],
                            borderColor: ['rgb(238,29,35)'],
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

                    //BLUE ROUTE
                const PassengeronBoardblueMC = document.getElementById('PassengeronBoard-blueMC');
                const PassengersonBoardblueMC = new Chart (PassengeronBoardblueMC, {
                    type: 'line',
                    data: {
                        labels: ['HUB', 'REBEL HILL', 'WESTEDN AVENUE', 'CASCADE AVENUE', 'WALMART', 'SAVE A LOT', '3 STAR MALL', 'BEERSHEBA TOWERS', 'DOLLAR STORE-BEERSHEBA HWY', 'WEST RIVIERSIDE'],
                        datasets: [{
                            label: 'Blue Route',
                            data: [206,249,143,127,242,145,112,200,290,180,233,270],
                            backgroundColor: ['rgb(37,79,162,0.5)'],
                            borderColor: ['rgb(37,79,162)'],
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

                const AvgTripLengthblueMC = document.getElementById('AvgTripLength-blueMC');
                const AvgTripLengthsblueMC = new Chart (AvgTripLengthblueMC, {
                    type: 'line',
                    data: {
                        labels: ['HUB', 'REBEL HILL', 'WESTEDN AVENUE', 'CASCADE AVENUE', 'WALMART', 'SAVE A LOT', '3 STAR MALL', 'BEERSHEBA TOWERS', 'DOLLAR STORE-BEERSHEBA HWY', 'WEST RIVIERSIDE'],
                        datasets: [{
                            label: 'Blue Route',
                            data: [19,10,20,14,7,12,6,18,13,1,20,3],
                            backgroundColor: [
                            'rgb(37,79,162,0.5)'
                            ],
                            borderColor: [
                            'rgb(37,79,162)'
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

                const PassengerRevenuePerHourblueMC = document.getElementById('PassengerRevenuePerHour-blueMC');
                const PassengersRevenuePerHourblueMC = new Chart (PassengerRevenuePerHourblueMC, {
                    type: 'pie',
                    data: {
                        labels: ['7am-10am', '10am-1pm', '1pm-4pm', '4pm-7pm'],
                        datasets: [{
                            label: 'Blue Route',
                            data: [121,190,111,152],
                            backgroundColor: [
                            'rgb(37,79,162,0.5)'
                            ],
                            borderColor: [
                            'rgb(37,79,162)'
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

                const UnlinkedPassengerblueMC = document.getElementById('UnlinkedPassenger-blueMC');
                const UnlinkedPassengersblueMC = new Chart (UnlinkedPassengerblueMC, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'REBEL HILL', 'WESTEDN AVENUE', 'CASCADE AVENUE', 'WALMART', 'SAVE A LOT', '3 STAR MALL', 'BEERSHEBA TOWERS', 'DOLLAR STORE-BEERSHEBA HWY', 'WEST RIVIERSIDE'],
                        datasets: [{
                            label: 'Blue Route',
                            data: [121,190,111,152],
                            backgroundColor: [
                            'rgb(37,79,162,0.5)'
                            ],
                            borderColor: [
                            'rgb(37,79,162)'
                            ],
                            borderWidth: 2
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

                const StopsBoardedblueMC = document.getElementById('StopsBoarded-blueMC');
                const StopBoardedblueMC = new Chart (StopsBoardedblueMC, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'REBEL HILL', 'WESTEDN AVENUE', 'CASCADE AVENUE', 'WALMART', 'SAVE A LOT', '3 STAR MALL', 'BEERSHEBA TOWERS', 'DOLLAR STORE-BEERSHEBA HWY', 'WEST RIVIERSIDE'],
                        datasets: [{
                            label: 'Blue Route',
                            data: [121,190,111,152],
                            backgroundColor: [
                            'rgb(37,79,162,0.5)'
                            ],
                            borderColor: [
                            'rgb(37,79,162)'
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

                const StopsAlightedblueMC = document.getElementById('StopsAlighted-blueMC');
                const StopAlightedblueMC = new Chart (StopsAlightedblueMC, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'REBEL HILL', 'WESTEDN AVENUE', 'CASCADE AVENUE', 'WALMART', 'SAVE A LOT', '3 STAR MALL', 'BEERSHEBA TOWERS', 'DOLLAR STORE-BEERSHEBA HWY', 'WEST RIVIERSIDE'],
                        datasets: [{
                            label: 'Blue Route',
                            data: [121,190,111,152],
                            backgroundColor: ['rgb(37,79,162,0.5)'],
                            borderColor: ['rgb(37,79,162)'],
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