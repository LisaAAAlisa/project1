        //setup the api and keys
        //three input fields to store the users input
        //two dropdown input boxes and one for amout to be converted
        //construct the variables to hold the exchanged information
        //event listner when the the buttons are pressed 
        //if condition for which button is pressed
        //function will be activated
        //ajax call api..... 
        //another function to call the response
        //console.log to see the outcome
        // locally store data

// window.fx.settings = { from: "USD"};


        //     var queryURL = "http://api.currencylayer.com/live?access_key=7c8ce31c312ebeee8c5489c55a4939fd"


        //     $.ajax({
        //         url: queryURL,
        //         method: "GET"
        //     }).then(function (response) {

        //         console.log(response);

        // });



        $.ajax({
            url: "http://api.currencylayer.com/list?access_key=7c8ce31c312ebeee8c5489c55a4939fd"
        }).then(function (from) {
            console.log(from)
            // $("#convertedFrom").text(from.value);
            // $("#convertedTo").text(from.value)
            searchCurrencyURL(from);

            //  var from = $("#convertedFrom").text(response);
            // var to = $("#convertedTo").text(respons);
            // var amount = $("#search-exchange").text();
            // var res = $("#response").text();
        })



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



      


        $( "#search-exchange" ).on("input", function() {
            var amount = $("#search-exchange").val();
            var from =$("#convertedFrom").val();
            var to =$("#convertedTo").val();
            console.log(amount,from,to)

            // let demo = () => {
            //     let rate = window.fx(1).from(from).to(to)
            //     alert("£1 = $" + rate.toFixed(4))
            // }
            
            // $.ajax({url:'https://api.exchangeratesapi.io/latest',method:"GET"})
               
            //     .then((data) => window.fx.rates = data.rates)
            //     .then(demo)
       

            var convert = "http://api.currencylayer.com/convert?access_key=7c8ce31c312ebeee8c5489c55a4939fd&from="+from+"&to="+to+"&amount="+amount+"&format=1"
        
            $.ajax({
                url: convert,
                method: "GET"
            }).then(function (response) {

                // $("#response")
                console.log(response)
                //select a DOM element to display the output
                //using an input? disable it (they cannot type)  update the .val() 
                //use a p tag and style it like an input? update the .text()
                // to = $("#convertedTo").text(to.value);

            })

        });


                    //we are going to access each new option html elements value propery
                    //set that value property as object[property] 
                    // update the text content of each new option element to be object[property] 
                    //append the new option html element to a parent select element



        // $("#city-section").attr("class", "card");

        // var value = "";
        // $('#search-exchange').keyup(function () {

        //     this.value = this.value.replace(/[^0-9\.]/g, '');

        //     searchCurrencyURL();
        // });


                

            // searchCurrencyURL()
