
apiKey =  '_66tvRgY5_szTgfB7aeB'

var url =`https://www.quandl.com/api/v3/datasets/bitstamp/usd.json?&api_key=${apiKey}`;



d3.json(url).then(function(data) {
    console.log(data.dataset);

      
    var x = []
    var y = []

    for (i = 0; i < 14 ; i++) {
        x.push(data.dataset.data[i][0])
        y.push(data.dataset.data[i][3])
    }
      
      var y = y.reverse()
      var x = x.reverse()
      var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: x,
            datasets: [{
                label: 'Closing price of Bitcoin',
                data: y,
                borderColor: 'red',
                
                
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });

    var x2 = []
    var y2 = []

    for (i = 0; i < 30 ; i++) {
        x2.push(data.dataset.data[i][0])
        y2.push(data.dataset.data[i][3])
    }
      
      var y2 = y2.reverse()
      var x2 = x2.reverse()
      var ctx2 = document.getElementById('myChart2').getContext('2d');
      var myChart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: x2,
            datasets: [{
                label: 'Closing price of Bitcoin',
                data: y2,
                borderColor: 'red',
                
                
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });

    var x3 = []
    var y3 = []

    for (i = 0; i < 90 ; i++) {
        x3.push(data.dataset.data[i][0])
        y3.push(data.dataset.data[i][3])
    }
      
      var y3 = y3.reverse()
      var x3 = x3.reverse()
      var ctx2 = document.getElementById('myChart3').getContext('2d');
      var myChart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: x3,
            datasets: [{
                label: 'Closing price of Bitcoin',
                data: y3,
                borderColor: 'red',
                
                
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });
})