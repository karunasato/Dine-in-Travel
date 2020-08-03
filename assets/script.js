$(document).ready(function () {

  const restaurantList = document.getElementsByClassName(restaurants);


  let queryURL = "https://developers.zomato.com/api/v2.1/restaurant?" + APIkey;
  let restaurants;
  let queryURL = "https://developers.zomato.com/api/v2.1/search" + APIkey;

  let APIkey = "8ed72bc9e077393211fcb8e5f0153fbd";


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    console.log(queryURL);
    console.log(response);

  });
  let convert = JSON.stringify(response);
  $()
  console.log(queryURL)


  var destinationID = ''
  var locationID = 0;
  var cuisineID = 0;





  // Start jQuery 



  // sideNav 

  $(document).ready(function () {
    $('.sidenav').sidenav();
  });



  // Carousel 

  $(document).ready(function () {
    $('.carousel.carousel-slider').carousel({
      fullWidth: true


    });
  })




  // Autocomplete 

  $(document).ready(function () {
    $('input.autocomplete').autocomplete({
      data: {
        "Rome": null,
        "Paris": null,
        "Rio de Janeiro": null,
        "Cancun": null,
        "Madrid": null,
        "London": null,
        "Turkey": null,
        "Mykonos": null
      },
    });
  });




  //         })
})

//flight scanner with flight time and price

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/USA/USD/en-US/?" + x - rapidapi - key,
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "x-rapidapi-key": "f1fdcadb38msha75cd0753c494d3p12675cjsnf7f9a71d3d34"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});


var flightQuote = $("<p>").text(response.Quotes.MinPrice);
var flightCarriers = $("<p>").text(response.Carriers.CarrierId.Name);
var flightDeparture = $("<p>").text(response.Quotes.OutboundLeg.DepartureDate);

// Display flight information from Seattle
$("#flightInfo").on("click", function (event) {
  event.preventDefault();
})


// recipe js (work in progress...)
$("#find-recipe").on("click", function (event) {
  event.preventDefault();

  var recipe = $("#recipe-input").val();

  var appid = "3e9dee68";
  var key = "20737797ddbd5868c5c037017379a8e6";

  var recipeURL = "https://api.edamam.com/search?q=" + recipe + "&app_id=" + appid + "&app_key=" + key;

  $.ajax({
    url: recipeURL,
    method: "GET"
  }).then(function (response) {

    var list = "<ol>";
    var results = response.hits;

    for (var i = 0; i < results.length; i++) {

      list += "<li>" + results[i].recipe.ingredientLines + "</li>";
      console.log(recipeURL);
      console.log(response);
    }

    list += "</ol>";

    document.getElementById("recipe-view").innerHTML = list;


  });
})