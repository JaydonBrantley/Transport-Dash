//SWEET ALERTS
$(document).on('click','#btnUserProfile',function(){
    Swal.fire({
        title: 'Profile',
        html: `<div class="container align-left">
                <p><b>User:</b> FirstName LastName</p>
                <p><b>Phone:</b> 931-123-4567</p>
                <p><b>Email:</b> firstnamelastname@example.com</p>
                </div>`,
    })
})


$(document).on('click','#btnLogout',function(){
    Swal.fire({
        title: 'Logout?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#bfbfbf',
        confirmButtonText: 'Logout!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Logged Out!',
          )
        }
      })
      
})

//TOTAL RIDE CHART
const TotalRide = document.getElementById('total-rides');
const TotalRides = new Chart (TotalRide,{
    type: 'doughnut',
    data: {
          //labels: ['HUB', 'JUSTICE CENTER', 'PREMIER MEDICAL', 'NORTHSIDE IGA', 'FIRST HORIZON BANK', 'WALMART', 'ROLLING MEADOWS APTS.', 'ALGOOD HOUSING', 'ALGOOD MANOR', 'SENIOR CENTER', 'GARDEN GROVER APTS.', 'QUINLAND RIDGE APTS.', ' WYNONA','SOCIAL SECURITY OFFICE', 'CHECH', 'EMPLOYMENT SECURITY OFFICE',],
          datasets: [{
          data: [10],
          backgroundColor: ['rgb(147,80,159,0.7)'],
          borderColor: ['rgb(147,80,159)'],
          borderWidth: 2,
          tension: 0.4,
        }]
    },
    options: {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        responsive: true,
        scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false,
              }
            },
            y: {
                beginAtZero: true,
                grid: {
                  display: false,
                  drawBorder: false,
                },
                ticks: {
                  display: false,
                }
            }
        }
    }
    });
  