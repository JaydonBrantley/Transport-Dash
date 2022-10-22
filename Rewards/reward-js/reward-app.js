/* //DATA FUNCTIONS

    //AVG PASSANGER FUNCTIONS

    function getCustomers(){
        $.getJSON('api_files/restful/getstops.php',{strSessionID:sessionStorage.getItem('sessionID')}, function(data){
            let arrData = [];
            $.each(data,function(stops){
                arrData.push({x:stops.Total_Rides});
            })
            return arrData;
        })
    }*/


    const gaugeElement = document.querySelector(".gauge");

    function setGaugeValue(gauge, value) {
      if (value < 0 || value > 1) {
        return;
      }
    
      gauge.querySelector(".gauge__fill").style.transform = `rotate(${
        value / 2
      }turn)`;
      gauge.querySelector(".gauge__cover").textContent = `${Math.round(
        value * 100
      )}%`;
    }
    
    setGaugeValue(gaugeElement, 0.5);

/*
  //TOTAL RIDE CHART
  const TotalRide = document.getElementById('total-rides');
  const TotalRides = new Chart (TotalRide,{
      type: 'doughnut',
      data: {
            //labels: ['HUB', 'JUSTICE CENTER', 'PREMIER MEDICAL', 'NORTHSIDE IGA', 'FIRST HORIZON BANK', 'WALMART', 'ROLLING MEADOWS APTS.', 'ALGOOD HOUSING', 'ALGOOD MANOR', 'SENIOR CENTER', 'GARDEN GROVER APTS.', 'QUINLAND RIDGE APTS.', ' WYNONA','SOCIAL SECURITY OFFICE', 'CHECH', 'EMPLOYMENT SECURITY OFFICE',],
            datasets: [{
            data: [9, 1],
            backgroundColor: ['rgb(255,215,0, 0.7)', 'rgb(102,102,102,0.2'],
            borderColor: ['rgb(255,215,0)', 'rgb(102,102,102,0.2'],
            borderWidth: 2,
            tension: 0.4,
          }]
      },
      options: {
          circumference: 180,
          rotation: 270,
          cutout: '70%',
          maintainAspectRatio: true,
          plugins: {
              legend: {
                  display: false
              },
              tooltip:{
                filter:(tooltipItem) =>{
                  console.log(tooltipItem)
                  return tooltipItem.dataIndex === 0;
                }
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
    */