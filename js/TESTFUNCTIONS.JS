//URL FOR WEBSITE: https://aiw.ojr.mybluehost.me/index.html

//API URL https://aiw.ojr.mybluehost.me/api/getStops.php?strRouteID=1002 (VERIFIY FIRST)


//INSTRUCTIONS ON CHART.JS updateChart() funtion
function updateChart(){
/* DO NOT MESS WITH THIS FUNCTION (UNTIL WE ARE READY TO ADD OUR API)
    async function fetchData(){
        const url = 'https://dummyjson.com/products';
        const response = await fetch(url)
        const datapoint = await response.json()
        return datapoint;
    };
*/
    //EXTRACTS SPECIFIC DATAPOINTS WITHIN THE API IN TOTAL
    fetchData().then(datapoints => {
        //EXTRACTS SPECICIF POINTS BASE ON THE FILE STRUCTURE
        const title = datapoints.products.map(
            function(index){
                return index.title;
            })

        const price = datapoints.products.map(
            function(index){
                return index.price;
            })


            //PUSHES DATA TO ALLOCATED CHART
            AvgPassengers.data.labels = title;
            AvgPassengers.data.datasets[0].data = price;
            AvgPassengers.update();
    });
}


//SPARE FUNCTION
function getRoutes(){
    $.getJSON('https://dummyjson.com/products', function(data){
        let arrData = [];
        let products = [];
        $.each(data,function(getRoutes){
            arrData.push({x:products.title,y:products.stock});
        })
        return arrData;
    })
}