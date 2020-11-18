# project1
 function CurrencyConvetor(amount, from, to) {
    var result = '';
    var url = "https://www.google.com/finance/converter?a=" + amount + "&from=" + from + "&to=" + to;
    $.ajaxSetup({async: false});
    $.get(url,
        function (data) {
            var startPos = data.search('<div id=currency_converter_result>');
            var endPos = data.search('<input type=submit value="Convert">');
            if (startPos > 0) {
                result = data.substring(startPos, endPos);
                result = result.replace('<div id=currency_converter_result>', '');
                result = result.replace('<span class=bld>', '');
                result = result.replace('</span>', '');
            }
    })
    return result;
}

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
 
function calculate() {
	const from_currency = from_currencyEl.value;
	const to_currency = to_currencyEl.value;
	
	fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency}`)
		.then(res => res.json())
		.then(res => {
		const rate = res.rates[to_currency];
		rateEl.innerText = `1 ${from_currency} = ${rate} ${to_currency}`
		to_ammountEl.value = (from_ammountEl.value * rate).toFixed(2);
	})
}
 
calculate();