                const AvgPassenger = document.getElementById('alg-101-purple');
                const AvgPassengers = new Chart (AvgPassenger, {
                    type: 'line',
                    data: {
                        labels: ['HUB', 'JUSTICE CENTER', 'PREMIER MEDICAL', 'NORTHSIDE IGA', 'FIRST HORIZON BANK', 'WALMART', 'ROLLING MEADOWS APTS.', 'ALGOOD HOUSING', 'ALGOOD MANOR', 'SENIOR CENTER', 'GARDEN GROVER APTS.', 'QUINLAND RIDGE APTS.', ' WYNONA','SOCIAL SECURITY OFFICE', 'CHECH', 'EMPLOYMENT SECURITY OFFICE',],
                        datasets: [{
                            label: 'Purple Route',
                            data: [206,249,143,127,242,145,112,200,290,180,233,270,127,242,145,112],
                            backgroundColor: ['rgb(147,80,159,0.7)'],
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

                const PassengerRevenue = document.getElementById('alg-102-purple');
                const PassengersRevenue = new Chart (PassengerRevenue, {
                        type: 'pie',
                        data: {
                            labels: ['7am-10am', '10am-1pm', '1pm-4pm', '4pm-7pm'],
                            datasets: [{
                                label: 'Purple Route',
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

                const AvgTrip = document.getElementById('alg-103-purple');
                const AvgTrips = new Chart (AvgTrip, {
                    type: 'line',
                    data: {
                        labels: ['HUB', 'JUSTICE CENTER', 'PREMIER MEDICAL', 'NORTHSIDE IGA', 'FIRST HORIZON BANK', 'WALMART', 'ROLLING MEADOWS APTS.', 'ALGOOD HOUSING', 'ALGOOD MANOR', 'SENIOR CENTER', 'GARDEN GROVER APTS.', 'QUINLAND RIDGE APTS.', ' WYNONA','SOCIAL SECURITY OFFICE', 'CHECH', 'EMPLOYMENT SECURITY OFFICE',],
                        datasets: [{
                            label: 'Purple Route',
                            data: [19,10,20,14,7,12,6,18,13,1,20,3,14,7,12,3],
                            backgroundColor: [
                            'rgb(147,80,159,0.7)'
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

                const StopBoarded = document.getElementById('alg-104-purple');
                const StopsBoarded = new Chart (StopBoarded, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'JUSTICE CENTER', 'PREMIER MEDICAL', 'NORTHSIDE IGA', 'FIRST HORIZON BANK', 'WALMART', 'ROLLING MEADOWS APTS.', 'ALGOOD HOUSING', 'ALGOOD MANOR', 'SENIOR CENTER', 'GARDEN GROVER APTS.', 'QUINLAND RIDGE APTS.', ' WYNONA','SOCIAL SECURITY OFFICE', 'CHECH', 'EMPLOYMENT SECURITY OFFICE',],
                        datasets: [{
                            label: 'Purple Route',
                            data: [121,190,111,152,195,102,206,142,125,123,167,182,138,129,182,182],
                            backgroundColor: [
                            'rgb(147,80,159,0.7)'
                            ],
                            borderColor: [
                            'rgb(147,80,159)'
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

                const StopAlighted = document.getElementById('alg-105-purple');
                const StopsAlighted = new Chart (StopAlighted, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'JUSTICE CENTER', 'PREMIER MEDICAL', 'NORTHSIDE IGA', 'FIRST HORIZON BANK', 'WALMART', 'ROLLING MEADOWS APTS.', 'ALGOOD HOUSING', 'ALGOOD MANOR', 'SENIOR CENTER', 'GARDEN GROVER APTS.', 'QUINLAND RIDGE APTS.', ' WYNONA','SOCIAL SECURITY OFFICE', 'CHECH', 'EMPLOYMENT SECURITY OFFICE',],
                        datasets: [{
                            label: 'Purple Route',
                            data: [121,190,111,152,195,102,206,142,125,123,167,182,138,129,182,182],
                            backgroundColor: ['rgb(147,80,159,0.7)'],
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

                const UnlinkedPassenger = document.getElementById('alg-106-purple');
                const UnlinkedPassengers = new Chart (UnlinkedPassenger, {
                    type: 'bar',
                    data: {
                        labels: ['HUB', 'JUSTICE CENTER', 'PREMIER MEDICAL', 'NORTHSIDE IGA', 'FIRST HORIZON BANK', 'WALMART', 'ROLLING MEADOWS APTS.', 'ALGOOD HOUSING', 'ALGOOD MANOR', 'SENIOR CENTER', 'GARDEN GROVER APTS.', 'QUINLAND RIDGE APTS.', ' WYNONA','SOCIAL SECURITY OFFICE', 'CHECH', 'EMPLOYMENT SECURITY OFFICE',],
                        datasets: [{
                            label: 'Purple Route',
                            data: [121,190,111,152,195,102,206,142,125,123,167,182,138,129,182,182],
                            backgroundColor: [
                            'rgb(147,80,159,0.7)'
                            ],
                            borderColor: [
                            'rgb(147,80,159)'
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