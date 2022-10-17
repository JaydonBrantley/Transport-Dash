// Register the plugin to all charts:
Chart.register(ChartDataLabels);

const AvgPassenger = document.getElementById('alg-101-purple');
const AvgPassengers = new Chart (AvgPassenger, {
    type: 'line',
    data: {
        labels: ['HUB','JUSTICE CENTER','PREMIER MEDICAL','NORTHSIDE IGA','FIRST HORIZON BANK - 10TH STREET','WALMART (ALGOOD)','ROLLING MEADOWS APTS','ALGOOD HOUSING','ALGOOD MANOR','SENIOR CENTER','GARDEN GROVER APTS.','GREENWOOD PLACE APTS.','QUINLAND RIDGE APTS.','SENIOR CENTER','ROLLING MEADOWS APTS.','WYNONA','YMCA','SOCIAL SECURITY OFFICE','CHEC - NEAL STREET','EMPLOYMENT SECURITY OFFICE',],
        datasets: [{
            data: [206,249,143,127,242,145,112,200,290,180,233,270,127,242,145,112],
            backgroundColor: ['rgb(147,80,159,0.7)'],
            borderColor: ['rgb(147,80,159)'],
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

const AvgTrip = document.getElementById('alg-102-purple');
const AvgTrips = new Chart (AvgTrip, {
    type: 'line',
    data: {
        labels: ['HUB','JUSTICE CENTER','PREMIER MEDICAL','NORTHSIDE IGA','FIRST HORIZON BANK - 10TH STREET','WALMART (ALGOOD)','ROLLING MEADOWS APTS','ALGOOD HOUSING','ALGOOD MANOR','SENIOR CENTER','GARDEN GROVER APTS.','GREENWOOD PLACE APTS.','QUINLAND RIDGE APTS.','SENIOR CENTER','ROLLING MEADOWS APTS.','WYNONA','YMCA','SOCIAL SECURITY OFFICE','CHEC - NEAL STREET','EMPLOYMENT SECURITY OFFICE',],
        datasets: [{
            data: [19,10,20,14,7,12,6,18,13,1,20,3,14,7,12,3],
            backgroundColor: ['rgb(147,80,159,0.7)'],
            borderColor: ['rgb(147,80,159)'],
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

const StopBoarded = document.getElementById('alg-103-purple');
const StopsBoarded = new Chart (StopBoarded, {
    type: 'bar',
    data: {
        labels: ['HUB','JUSTICE CENTER','PREMIER MEDICAL','NORTHSIDE IGA','FIRST HORIZON BANK - 10TH STREET','WALMART (ALGOOD)','ROLLING MEADOWS APTS','ALGOOD HOUSING','ALGOOD MANOR','SENIOR CENTER','GARDEN GROVER APTS.','GREENWOOD PLACE APTS.','QUINLAND RIDGE APTS.','SENIOR CENTER','ROLLING MEADOWS APTS.','WYNONA','YMCA','SOCIAL SECURITY OFFICE','CHEC - NEAL STREET','EMPLOYMENT SECURITY OFFICE',],
        datasets: [{
            data: [121,190,111,152,195,102,206,142,125,123,167,182,138,129,182,182],
            backgroundColor: ['rgb(147,80,159,0.7)'],
            borderColor: ['rgb(147,80,159)'],
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

    const PopularStop = document.getElementById('alg-104-purple');
    const PopularStops = new Chart (PopularStop, {
        type: 'bar',
        data: {
            labels: ['HUB', 'WALMART', 'LOGANS', 'JACKSON PLAZA', 'SENIOR CENTER', 'PINE','7TH & WILLOW','TTU - STUDENT CENTER','HOSPITAL', 'LIBRARY', 'COURT HOUSE', 'KROGER'],
            datasets: [{
                data: [121,190,111,152,121,190,111,152,184,153,142,111],
                backgroundColor: ['rgb(147,80,159,0.7)'],
                borderColor: ['rgb(147,80,159)'],
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