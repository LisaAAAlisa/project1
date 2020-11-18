function calculate() {
	const from_currency = from_currencyEl.value;
	const to_currency = to_currencyEl.value;
}
$.ajax({
  url: ("http://api.currencylayer.com/list?access_key=7c8ce31c312ebeee8c5489c55a4939fd/${from_currency}")
	 	.then(res => res.json())
	 	.then(res => {
		const rate = res.rates[to_currency];
		rateEl.innerText = `1 ${from_currency} = ${rate} ${to_currency}`
		to_ammountEl.value = (from_ammountEl.value * rate).toFixed(2);
	})
 })
 

//.then(function (from) {
//   console.log(from)
//   $("#convertedFrom").text(from.value);
//   $("#convertedTo").text(from.value);
// searchCurrencyURL(from);
//  var from = $("#convertedFrom").text(response);
// var to = $("#convertedTo").text(respons);
// var amount = $("#search-exchange").text();
// var res = $("#Response").text();
//})
// function searchCurrencyURL(response) {
//   const object = response.currencies;
//   for (const property in object) {
//       console.log(`${property}: ${object[property]}`);
//       //this object[property] is the long form name of our currency
//       //inside this for loop we are going to create a new option html element
// var op = $("<option>").text(object[property]);
// // var op1 = $("<option>").text(object[property]);
// op.val(object[property]);
// $("#select").append(op.clone());
// $("#select2").append(op.clone());

const from_currencyEl = document.getElementById('from_currency');
const from_ammountEl = document.getElementById('from_ammount');
const to_currencyEl = document.getElementById('to_currency');
const to_ammountEl = document.getElementById('to_ammount');
const rateEl = document.getElementById('rate');
const exchange = document.getElementById('exchange');
 
from_currencyEl.addEventListener('change', calculate);
from_ammountEl.addEventListener('input', calculate);
to_currencyEl.addEventListener('change', calculate);
to_ammountEl.addEventListener('input', calculate);
 
exchange.addEventListener('click', () => {
	const temp = from_currencyEl.value;
	from_currencyEl.value = to_currencyEl.value;
	to_currencyEl.value = temp;
	calculate();
});
 
//function calculate() {
	//const from_currency = from_currencyEl.value;
	//const to_currency = to_currencyEl.value;
	
	// fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency}`)
	// 	.then(res => res.json())
	// 	.then(res => {
	// 	const rate = res.rates[to_currency];
	// 	rateEl.innerText = `1 ${from_currency} = ${rate} ${to_currency}`
	// 	to_ammountEl.value = (from_ammountEl.value * rate).toFixed(2);
	//})
 
