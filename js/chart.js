//CHARTS FOR COOKEVILLE
                //ALL GREEN ROUTES
                const PassengeronBoard = document.getElementById('PassengeronBoard-Cookeville');
                const PassangersonBoard = new Chart (PassengeronBoard, {
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

                const UnlinkedPassnager = document.getElementById('UnlinkedPassnager-Cookeville');
                const UnlinkedPassnagers = new Chart (UnlinkedPassnager, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'WALMART', 'LOGANS', 'JACKSON PLAZA', 'SENIOR CENTER', 'PINE','7TH & WILLOW','TTU - STUDENT CENTER','HOSPITAL', 'LIBRARY', 'COURT HOUSE', 'KROGER'],
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

                const StopsBoarded = document.getElementById('StopsBoarded-Cookeville');
                const StopBoarded = new Chart (StopsBoarded, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'WALMART', 'LOGANS', 'JACKSON PLAZA', 'SENIOR CENTER', 'PINE','7TH & WILLOW','TTU - STUDENT CENTER','HOSPITAL', 'LIBRARY', 'COURT HOUSE', 'KROGER'],
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

                const StopsAlighted = document.getElementById('StopsAlighted-Cookeville');
                const StopAlighted = new Chart (StopsAlighted, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'WALMART', 'LOGANS', 'JACKSON PLAZA', 'SENIOR CENTER', 'PINE','7TH & WILLOW','TTU - STUDENT CENTER','HOSPITAL', 'LIBRARY', 'COURT HOUSE', 'KROGER'],
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
                            label: 'Blue Route',
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
                              label: 'Blue Route Per Hour',
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

                const UnlinkedPassnagerBlue = document.getElementById('UnlinkedPassnagerBlue-Cookeville');
                const UnlinkedPassnagersBlue = new Chart (UnlinkedPassnagerBlue, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
                        datasets: [{
                            label: 'Blue Route',
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

                const StopsBoardedBlue = document.getElementById('StopsBoardedBlue-Cookeville');
                const StopBoardedBlue = new Chart (StopsBoardedBlue, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
                        datasets: [{
                            label: 'Blue Route',
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
                  
                const StopsAlightedBlue = document.getElementById('StopsAlightedBlue-Cookeville');
                const StopAlightedBlue = new Chart (StopsAlightedBlue, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'KROGER', 'COURT HOUSE', 'LIBRARY', 'TTU - STUDENT CENTER', '7TH 7 WILLOW','PINE','OAK TREE TOWERS','JACKSON PLAZA', 'NEWMAN/WILLOW VALLEY CRT.', 'MISSION', 'WALMART'],
                        datasets: [{
                            label: 'Blue Route',
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

//CHARTS FOR ALGOOD
                const PassengeronBoardA = document.getElementById('PassengeronBoard-Algood');
                const PassangersonBoardA = new Chart (PassengeronBoardA, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'JUSTICE CENTER', 'PREMIER MEDICAL', 'NORTHSIDE IGA', 'FIRST HORIZON BANK', 'WALMART', 'ROLLING MEADOWS APTS.', 'ALGOOD HOUSING', 'ALGOOD MANOR', 'SENIOR CENTER', 'GARDEN GROVER APTS.', 'QUINLAND RIDGE APTS.', ' WYNONA','SOCIAL SECURITY OFFICE', 'CHECH', 'EMPLOYMENT SECURITY OFFICE',],
                        datasets: [{
                            label: 'Purple Route',
                            data: [206,249,143,127,242,145,112,200,290,180,233,270],
                            backgroundColor: [
                            'rgb(147,80,159)'
                            ],
                            borderColor: [
                            'rgb(147,80,159)'
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

                const AvgTripLengthA = document.getElementById('AvgTripLength-Algood');
                const AvgTripLengthsA = new Chart (AvgTripLengthA, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'JUSTICE CENTER', 'PREMIER MEDICAL', 'NORTHSIDE IGA', 'FIRST HORIZON BANK', 'WALMART', 'ROLLING MEADOWS APTS.', 'ALGOOD HOUSING', 'ALGOOD MANOR', 'SENIOR CENTER', 'GARDEN GROVER APTS.', 'QUINLAND RIDGE APTS.', ' WYNONA','SOCIAL SECURITY OFFICE', 'CHECH', 'EMPLOYMENT SECURITY OFFICE',],
                        datasets: [{
                            label: 'Purple Route',
                            data: [19,10,20,14,7,12,6,18,13,1,20,3],
                            backgroundColor: [
                            'rgb(147,80,159)'
                            ],
                            borderColor: [
                            'rgb(147,80,159)'
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

                const PassengerRevenuePerHourA = document.getElementById('PassengerRevenuePerHour-Algood');
                const PassengersRevenuePerHourA = new Chart (PassengerRevenuePerHourA, {
                    type: 'bar',
                    data: {
                        labels: ['7am-10am', '10am-1pm', '1pm-4pm', '4pm-7pm'],
                        datasets: [{
                            label: 'Purple Route',
                            data: [121,190,111,152],
                            backgroundColor: [
                            'rgb(147,80,159)'
                            ],
                            borderColor: [
                            'rgb(147,80,159)'
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

                const UnlinkedPassnagerA = document.getElementById('UnlinkedPassnager-Algood');
                const UnlinkedPassnagersA = new Chart (UnlinkedPassnagerA, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'JUSTICE CENTER', 'PREMIER MEDICAL', 'NORTHSIDE IGA', 'FIRST HORIZON BANK', 'WALMART', 'ROLLING MEADOWS APTS.', 'ALGOOD HOUSING', 'ALGOOD MANOR', 'SENIOR CENTER', 'GARDEN GROVER APTS.', 'QUINLAND RIDGE APTS.', ' WYNONA','SOCIAL SECURITY OFFICE', 'CHECH', 'EMPLOYMENT SECURITY OFFICE',],
                        datasets: [{
                            label: 'Purple Route',
                            data: [121,190,111,152],
                            backgroundColor: [
                            'rgb(147,80,159)'
                            ],
                            borderColor: [
                            'rgb(147,80,159)'
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

                const StopsBoardedA = document.getElementById('StopsBoarded-Algood');
                const StopBoardedA = new Chart (StopsBoardedA, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'JUSTICE CENTER', 'PREMIER MEDICAL', 'NORTHSIDE IGA', 'FIRST HORIZON BANK', 'WALMART', 'ROLLING MEADOWS APTS.', 'ALGOOD HOUSING', 'ALGOOD MANOR', 'SENIOR CENTER', 'GARDEN GROVER APTS.', 'QUINLAND RIDGE APTS.', ' WYNONA','SOCIAL SECURITY OFFICE', 'CHECH', 'EMPLOYMENT SECURITY OFFICE',],
                        datasets: [{
                            label: 'Purple Route',
                            data: [121,190,111,152],
                            backgroundColor: [
                            'rgb(147,80,159)'
                            ],
                            borderColor: [
                            'rgb(147,80,159)'
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

                const StopsAlightedA = document.getElementById('StopsAlighted-Algood');
                const StopAlightedA = new Chart (StopsAlightedA, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'JUSTICE CENTER', 'PREMIER MEDICAL', 'NORTHSIDE IGA', 'FIRST HORIZON BANK', 'WALMART', 'ROLLING MEADOWS APTS.', 'ALGOOD HOUSING', 'ALGOOD MANOR', 'SENIOR CENTER', 'GARDEN GROVER APTS.', 'QUINLAND RIDGE APTS.', ' WYNONA','SOCIAL SECURITY OFFICE', 'CHECH', 'EMPLOYMENT SECURITY OFFICE',],
                        datasets: [{
                            label: 'Purple Route',
                            data: [121,190,111,152],
                            backgroundColor: [
                            'rgb(147,80,159)'
                            ],
                            borderColor: [
                            'rgb(147,80,159)'
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

//CROSSVILLE
                    //BLUE ROUTE
                const PassengeronBoardblueCR = document.getElementById('PassengeronBoard-blueCR');
                const PassengersonBoardblueCR = new Chart (PassengeronBoardblueCR, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
                        datasets: [{
                            label: 'blue Route',
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

                const AvgTripLengthblueCR = document.getElementById('AvgTripLength-blueCR');
                const AvgTripLengthsblueCR = new Chart (AvgTripLengthblueCR, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
                        datasets: [{
                            label: 'blue Route',
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

                const PassengerRevenuePerHourblueCR = document.getElementById('PassengerRevenuePerHour-blueCR');
                const PassengersRevenuePerHourblueCR = new Chart (PassengerRevenuePerHourblueCR, {
                    type: 'bar',
                    data: {
                        labels: ['7am-10am', '10am-1pm', '1pm-4pm', '4pm-7pm'],
                        datasets: [{
                            label: 'blue Route',
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

                const UnlinkedPassnagerblueCR = document.getElementById('UnlinkedPassnager-blueCR');
                const UnlinkedPassnagersblueCR = new Chart (UnlinkedPassnagerblueCR, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
                        datasets: [{
                            label: 'blue Route',
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

                const StopsBoardedblueCR = document.getElementById('StopsBoarded-blueCR');
                const StopBoardedblueCR = new Chart (StopsBoardedblueCR, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
                        datasets: [{
                            label: 'blue Route',
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

                const StopsAlightedblueCR = document.getElementById('StopsAlighted-blueCR');
                const StopAlightedblueCR = new Chart (StopsAlightedblueCR, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'KROGER', 'AUTUMN APTS', 'AZELEA APTS', 'RESCUE MISSION', 'HOUSING AUTHORITY', 'LIBRARY', 'TWIN OAKS APTS.', 'WALMART', 'PINEWOOD DRIVE', 'SATURDAYS TRIP'],
                        datasets: [{
                            label: 'blue Route',
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