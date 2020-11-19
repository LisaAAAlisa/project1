//setting up ajax request to get a list of currencies from API
$.ajax({
    url: "http://api.currencylayer.com/list?access_key=7c8ce31c312ebeee8c5489c55a4939fd"
}).then(function (from) {
    console.log(from)
    searchCurrencyURL(from);
})

//function to get the currency list from API do display in drop down menus
function searchCurrencyURL(response) {

    const object = response.currencies;

    for (const property in object) {
        console.log(`${property}: ${object[property]}`);
        //this object[property] is the long form name of our currency
        //inside this for loop we are going to create a new option html element
        var op = $("<option>").text(object[property]);
        var op1 = $("<option>").text(object[property]);
        op.val(property);
        op1.val(property);
        $("#convertedFrom").append(op)
        $("#convertedTo").append(op1)

    }
}
//function that converts currencies using API
function getExchange() {
    var amount = $("#search-exchange").val();
    var from = $("#convertedFrom").val();
    var to = $("#convertedTo").val();
    console.log(amount, from, to)

    var convert = "http://api.currencylayer.com/convert?access_key=7c8ce31c312ebeee8c5489c55a4939fd&from=" + from + "&to=" + to + "&amount=" + amount + "&format=1"
//setting up ajax call to get a response for the currency conccecrsions
    $.ajax({
        url: convert,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        //this sets up the response to be displayed to user
        $("#output").val(response.result.toFixed(2));
        console.log(response.result);
    })

}
//event handlers for drop down 
$("#convertedFrom").on("change", function () {
    getExchange();
});
$("#convertedTo").on("change", function () {
    getExchange();
});
//event handler for user input
$("#search-exchange").on("input", function () {
    getExchange();
});
//date functions to display date on top of the constant currencies display
//first formats the date
function formatDate() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var formattedDate = (month) + "/" + (day) + "/" + now.getFullYear();
    return (formattedDate);
}
//second functino displayes the date
function getCurrentDay() {
    var day = formatDate();
    let currentDay = document.querySelector('.current-date');
    currentDay.innerHTML = "<strong>DATE: " + day + "</strong>";
    console.log(currentDay);
}
getCurrentDay();

//setting up variables for the constant currencies display
var AUD = $(".AUD");
var USD = $(".USD");
var CAD = $(".CAD");

queryUrl = "https://api.exchangeratesapi.io/latest?symbols=USD,AUD,CAD";
//ajax call to get the current exchange rate with Euro as base
$.ajax({
    url: queryUrl,
    method: "GET"

}).then(function (response) {
    console.log(response);
    var currencies = response;
    AUD.html("AUD: " + "<i class='fa fa-dollar'></i>" + currencies.rates.AUD.toFixed(2));
    USD.html("USD: " + "<i class='fa fa-dollar'></i>" + currencies.rates.USD.toFixed(2));
    CAD.html("CAD: " + "<i class='fa fa-dollar'></i>" + currencies.rates.CAD.toFixed(2));
});