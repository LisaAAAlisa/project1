$.ajax({
  url: "http://api.currencylayer.com/list?access_key=7c8ce31c312ebeee8c5489c55a4939fd"
}).then(function (from) {
  console.log(from)
  $("#convertedFrom").text(from.value);
  $("#convertedTo").text(from.value);
searchCurrencyURL(from);
//  var from = $("#convertedFrom").text(response);
// var to = $("#convertedTo").text(respons);
// var amount = $("#search-exchange").text();
// var res = $("#Response").text();
})
function searchCurrencyURL(response) {
  const object = response.currencies;
  for (const property in object) {
      console.log(`${property}: ${object[property]}`);
      //this object[property] is the long form name of our currency
      //inside this for loop we are going to create a new option html element
var op = $("<option>").text(object[property]);
// var op1 = $("<option>").text(object[property]);
op.val(object[property]);
$("#select").append(op.clone());
$("#select2").append(op.clone());
  }}
