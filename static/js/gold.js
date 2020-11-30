// data source : https://www.investing.com/currencies/xau-usd-historical-data

d3.csv("../resources/Cleaned_10_Yr_Gold_Data.csv", conversor, (d) => { 
   console.log(d) 
})

function conversor(d){
   d.Price = +d.Price;
   d.High = +d.High;
   d.Low = +d.Low;
   return d;
}

chartIt();

async function chartIt() {
   const data = await getData();
   const ctx = document.getElementById('chart').getContext("2d");
   const myChart = new Chart(ctx, {
      type: 'line',
      data: {
         labels: data.xs,
         datasets: [
            {
               label: 'Close Price',
               data: data.yPrice,
               backgroundColor: 'rgba(255, 159, 64, 0.2)',
               borderColor: 'rgba(255, 159, 64, 1)',
               borderWidth: 1,
               fill: false
         // }, {
         //       label: 'Daily Low',
         //       data: data.yLow,
         //       backgroundColor: 'rgba(255, 99, 132, 0.2)',
         //       borderColor: 'rgba(255, 99, 132, 1)',
         //       borderWidth: 1,
         //       fill: false
         // }, {
         //       label: 'daily High',
         //       data: data.yHigh,
         //       backgroundColor: 'rgba(54, 162, 235, 0.2)',
         //       borderColor: 'rgba(54, 162, 235, 1)',
         //       borderWidth: 1,
         //       fill: false
         // }, {
         //       label: 'Predicted Price',
         //       data: data.yPredict,
         //       backgroundColor: 'rgba(255, 206, 86, 0.2)',
         //       borderColor: 'rgba(255, 206, 86, 1)',
         //       borderWidth: 1,
         //       fill: false
         }]
      }
      // options: {
      //    title: {
      //       display: true,
      //       text: 'Gold Price Predicions (USD)' 
      //    },
      //    scales: {
      //       yAxes: [{
      //          ticks: {
      //             // beginAtZero: true
      //             major: enabled
      //          }
      //       }]
      //    }
      // }
   });
}

async function getData() {
   const xs = [];
   const yPrice = [];
   // const yLow = [];
   // const yHigh = [];
   // const yPredict = [];

   const response = await fetch('../resources/Cleaned_10_Yr_Gold_Data');
   const data = await response.text();
   //console.log(data);
 
   const table = data;
   table.forEach(row => {
      const Date = row[0];
      xs.push(Date);
      const Price = row[1];
      yPrice.push(parseFloat(Price));
      // const Low = row[2];
      // yLow.push(parseFloat(Low));
      // const High = row[3];
      // yHigh.push(parseFloat(High));
      // const Predict = row[4];
      // yPredict.push(parseFloat(Predict));
      console.log(Date, Price); //Low, High, Predict);
   });
   return {xs, yPrice };
}
