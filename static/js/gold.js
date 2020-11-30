
d3.csv("../resources/Cleaned_10_Yr_Gold_Data.csv")
.then(makeChart);

function makeChart(gold) {
   var ten_yr_dateData = gold.map(function(d) {return d.Date});
   
   var monthago = new Date(new Date().setDate(new Date().getDate() - 30));
   var thirty_day_dateData = gold.map(function(d) {return (d.Date > monthago)});
   console.log(thirty_day_dateData)

   var priceLabels = gold.map(function(d) {return d.Price});
   var highLabels = gold.map(function(d) {return d.High});
   var lowLabels = gold.map(function(d) {return d.Low});
 
   var chart = new Chart('chart10yr', {
      type: 'line',
      data: {
         labels: ten_yr_dateData,
         datasets: [
            {
               data: priceLabels,
               label: 'Close Price',
               backgroundColor: 'rgba(255, 159, 64, 1)',
               borderColor: 'rgba(255, 159, 64, 1)',
               pointRadius: 0.1,
               borderWidth: 0.2,
               fill: false               
            }, {
               data: highLabels,
               label: 'Daily High',
               backgroundColor: 'rgba(255, 99, 132, 1)',
               borderColor: 'rgba(255, 99, 132, 1)',
               pointRadius: 0.1,
               borderWidth: 0.2,
               fill: false               
            }, {
               data: lowLabels,
               label: 'Daily Low',
               backgroundColor: 'rgba(54, 162, 235, 1)',
               borderColor: 'rgba(54, 162, 235, 1)',
               pointRadius: 0.1,
               borderWidth: 0.2,
               fill: false               
            },
         ]
      }
   });

   var chart = new Chart('chart30day', {
      type: 'line',
      data: {
         labels: thirty_day_dateData,
         datasets: [
            {
               data: priceLabels,
               label: 'Close Price',
               backgroundColor: 'rgba(255, 159, 64, 0.2)',
               borderColor: 'rgba(255, 159, 64, 1)',
               pointRadius: 0.1,
               borderWidth: 0.2,
               fill: false               
            }, {
               data: highLabels,
               label: 'Daily High',
               backgroundColor: 'rgba(255, 99, 132, 0.2)',
               borderColor: 'rgba(255, 99, 132, 1)',
               pointRadius: 0.1,
               borderWidth: 0.2,
               fill: false               
            }, {
               data: lowLabels,
               label: 'Daily Low',
               backgroundColor: 'rgba(54, 162, 235, 0.2)',
               borderColor: 'rgba(54, 162, 235, 1)',
               pointRadius: 0.1,
               borderWidth: 0.2,
               fill: false               
            },
         ]
      }
   });
}