var AUD = $(".AUD");
var USD = $(".USD");
var CAD = $(".CAD");

queryUrl = "https://api.exchangeratesapi.io/latest?symbols=USD,AUD,CAD";
//ajax call to get the current exchange rate with Euro as base
$.ajax({
    url: queryUrl,
    method: "GET"

}).then(function (response) {
    var currencies = response;
 //chart to display currencies
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['AUD', 'USD', 'CAD'], //x-axis
        datasets: [{
            label: 'Current Rates for 1 Euro',
            data: [currencies.rates.AUD, currencies.rates.USD, currencies.rates.CAD], //y-axis
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
});


