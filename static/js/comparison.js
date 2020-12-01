// Gold price data source: https://www.investing.com/currencies/xau-usd-historical-data

d3.csv("../resources/Cleaned_10_Yr_Gold_Data.csv")
.then(makeChart);

function makeChart(gold) {
   var ten_yr_dateData = gold.map(function(d) {return d.Date});
   var priceLabels = gold.map(function(d) {return d.Price});
   var btcLabels = gold.map(function(d) {return d.BTC_Price});
   var spLabels = gold.map(function(d) {return d.SP_Price});

   var chart = new Chart('chart10yr', {
      type: 'line',
      data: {
         labels: ten_yr_dateData,
         datasets: [
            {
               data: priceLabels,
               label: 'Gold Closing Price',
               backgroundColor: 'rgba(250, 222, 17, 0.2)',
               borderColor: 'rgba(250, 222, 17, 1)',
               pointRadius: 0.1,
               borderWidth: 0.5,
               fill: true               
            }, {
               data: btcLabels,
               label: 'Bitcoin Price',
               backgroundColor: 'rgba(255, 99, 132, 0.2)',
               borderColor: 'rgba(255, 99, 132, 1)',
               pointRadius: 0.1,
               borderWidth: 0.5,
               fill: true               
            }, {
               data: spLabels,
               label: 'S&P 500 Price',
               backgroundColor: 'rgba(54, 162, 235, 0.2)',
               borderColor: 'rgba(54, 162, 235, 1)',
               pointRadius: 0.1,
               borderWidth: 0.5,
               fill: true               
            },
         ]
      },
      options: {
         title: {
            display: true,
            fontSize: 24,
            fontColor: 'rgba(255, 255, 255, 0.7)',
            padding: 15,
            text: "Historical Prices of Gold, Bitcoin, and the S&P 500 Index over 10 Years",
         },
         legend: {
            display: true,
            labels: {
                fontColor: 'rgba(255, 255, 255, 0.7)',
            }
         },         
         elements: {
            line: {
               tension: 0.8         
            }
         },
         scales: {
            xAxes: [{
               ticks: {
                  fontSize: 12,
                  fontColor: 'rgba(255, 255, 255, 0.7)',
               },
               gridLines: {
                  color: 'rgb(148, 68, 250, 0.6)',
                  borderDash: [2, 5],
               },
               scaleLabel: {
                  display: true,
                  labelString: "Date",
                  fontColor: 'rgba(255, 255, 255, 0.7)',
                  fontSize: 20,
               }
            }],
            yAxes: [{
               ticks: {
                  fontSize: 12,
                  fontColor: 'rgba(255, 255, 255, 0.7)',
               },
               gridLines: {
                  color: 'rgba(148, 68, 250, 0.8)',
                  borderDash: [2, 5],
               },
               scaleLabel: {
                  display: true,
                  labelString: "Price in USD",
                  fontColor: 'rgba(255, 255, 255, 0.7)',
                  fontSize: 20,
               }
            }]      
         }
      }


   });
}
