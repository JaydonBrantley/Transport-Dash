
 const AvgPassenger = document.getElementById('minn-101-red');
 const AvgPassengers = new Chart (AvgPassenger, {
     type: 'line',
     data: {
         labels: ['HUB', 'WEST RIVERSIDE', 'SENIOR CITIZEN', 'BEERSHEBA TOWER', '3 START MALL', 'GOODWILL', 'SAVE A LOT', 'WALMART', 'CASCADE AVANUE', 'GILLEY POOL'],
         datasets: [{
             label: 'Red Route',
             data: [206,249,143,127,242,145,112,200,290,180,233,270],
             backgroundColor: ['rgb(238,29,35,0.7)'],
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

const PassengerRevenue = document.getElementById('minn-102-red');
const PassengersRevenue = new Chart (PassengerRevenue, {
         type: 'pie',
         data: {
             labels: ['7am-10am', '10am-1pm', '1pm-4pm', '4pm-7pm'],
             datasets: [{
                 label: 'Red Route',
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

const AvgTrip = document.getElementById('minn-103-red');
const AvgTrips = new Chart (AvgTrip, {
     type: 'line',
     data: {
         labels: ['HUB', 'WEST RIVERSIDE', 'SENIOR CITIZEN', 'BEERSHEBA TOWER', '3 START MALL', 'GOODWILL', 'SAVE A LOT', 'WALMART', 'CASCADE AVANUE', 'GILLEY POOL'],
         datasets: [{
             label: 'Red Route',
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
             label: 'Red Route',
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
             label: 'Red Route',
             data: [121,190,111,152,125,107,120,145,194,124,168,152,197],
             backgroundColor: ['rgb(238,29,35,0.7)'],
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

const UnlinkedPassenger = document.getElementById('minn-106-red');
const UnlinkedPassengers = new Chart (UnlinkedPassenger, {
         type: 'bar',
         data: {
             labels: ['HUB', 'WEST RIVERSIDE', 'SENIOR CITIZEN', 'BEERSHEBA TOWER', '3 START MALL', 'GOODWILL', 'SAVE A LOT', 'WALMART', 'CASCADE AVANUE', 'GILLEY POOL'],
             datasets: [{
                 label: 'Red Route',
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
             backgroundColor: ['rgb(37,79,162,0.7)'],
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

 const UnlinkedPassengerblueMC = document.getElementById('UnlinkedPassenger-blueMC');
 const UnlinkedPassengersblueMC = new Chart (UnlinkedPassengerblueMC, {
     type: 'bar',
     data: {
         labels: ['HUB', 'REBEL HILL', 'WESTEDN AVENUE', 'CASCADE AVENUE', 'WALMART', 'SAVE A LOT', '3 STAR MALL', 'BEERSHEBA TOWERS', 'DOLLAR STORE-BEERSHEBA HWY', 'WEST RIVIERSIDE'],
         datasets: [{
             label: 'Blue Route',
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
             data: [121,190,111,152,184,153,142,111,124,165,187,198],
             backgroundColor: ['rgb(37,79,162,0.7)'],
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