console.log("I have crippiling zestpression");
M.AutoInit();

var userDrinkForm = $("#alchiSearch");
var userFoodForm = $("#foodSearch");
var userFoodInput = $("#userFoodInput");
var userDrinkInput = $("#userDrinkInput");
var zestME = $("#zestME");

var drinkIngredientarr = [];
var drinkMeasurementsarr = [];
var ingrediantsarr = [];
var measurementsarr = [];

function zestmeBTNDrink() {
  var queryURLRandoDrink =
    "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  $.ajax({
    url: queryURLRandoDrink,
    method: "GET",
  }).then(function (randoDrinkSearch) {
    for (randoIngredient in randoDrinkSearch.drinks[0]) {
      if (randoIngredient.indexOf("strIngredient") !== -1) {
        ingrediantsarr.push(randoDrinkSearch.drinks[0][randoIngredient]);
        console.log(ingrediantsarr);
      }
    }
    // for loop to cycle through arrar and append li's onto ul
    for (let i = 0; i < ingrediantsarr.length; i++) {
      var li = $("<li>");
      if (ingrediantsarr[i] !== "") {
        li.text(ingrediantsarr[i]);
        $("#ingrediantsDrink").append(li);
      }
    }

    // pulls recipe and attaches to the page
    $("#drinkRecipe").text(
      "How to make: " + randoDrinkSearch.drinks[0].strInstructions
    );
    // empties the arr for a clean new search with no past food
    ingrediantsarr = [];
    // for inloop to pull out the strMeasurements and put them on an li and append to ul
    for (randoMeasurements in randoDrinkSearch.drinks[0]) {
      if (randoMeasurements.indexOf("strMeasure") !== -1) {
        measurementsarr.push(randoDrinkSearch.drinks[0][randoMeasurements]);
      }
    }
    // foor loop to cycle through arrar and append li's onto ul
    for (let i = 0; i < measurementsarr.length; i++) {
      if (measurementsarr[i] !== "") {
        var liMeasure = $("<li>");
        liMeasure.text(measurementsarr[i]);
        $("#measurementsDrink").append(liMeasure);
      }
    }
    // empties the arr for a clean new search with no past measurements
    measurementsarr = [];

    // grabs image and adds it to html
    var img = $("#imageDrink");
    img.attr("src", randoDrinkSearch.drinks[0].strDrinkThumb);
  });
}

// this function grabs a random food also used to preload a search result onto page
function zestmeBTNFood() {
  var queryURLRando = "https://www.themealdb.com/api/json/v1/1/random.php";
  $.ajax({
    url: queryURLRando,
    method: "GET",
  }).then(function (randoFoodSearch) {
    console.log(randoFoodSearch);
    //  for inloop to pull out the strIngredients and put them on an li and append to ul

    for (randoIngredient in randoFoodSearch.meals[0]) {
      if (randoIngredient.indexOf("strIngredient") !== -1) {
        ingrediantsarr.push(randoFoodSearch.meals[0][randoIngredient]);
        console.log(ingrediantsarr);
      }
    }
    // for loop to cycle through arrar and append li's onto ul
    for (let i = 0; i < ingrediantsarr.length; i++) {
      var li = $("<li>");
      if (ingrediantsarr[i] !== "") {
        li.text(ingrediantsarr[i]);
        $("#ingrediantsList").append(li);
      }
    }

    // pulls recipe and attaches to the page
    $("#recipe").text(
      "How to make: " + randoFoodSearch.meals[0].strInstructions
    );
    // empties the arr for a clean new search with no past food
    ingrediantsarr = [];
    // for inloop to pull out the strMeasurements and put them on an li and append to ul
    for (randoMeasurements in randoFoodSearch.meals[0]) {
      if (randoMeasurements.indexOf("strMeasure") !== -1) {
        measurementsarr.push(randoFoodSearch.meals[0][randoMeasurements]);
      }
    }
    // foor loop to cycle through arrar and append li's onto ul
    for (let i = 0; i < measurementsarr.length; i++) {
      if (measurementsarr[i] !== "") {
        var liMeasure = $("<li>");
        liMeasure.text(measurementsarr[i]);
        $("#measurementsList").append(liMeasure);
      }
    }
    // empties the arr for a clean new search with no past measurements
    measurementsarr = [];

    // grabs image and adds it to html
    var img = $("#imageFood");
    img.attr("src", randoFoodSearch.meals[0].strMealThumb);
  });
}

// this function grabs the food via the searched term
function getFood() {
  var queryURLFood =
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
    userFoodInput.val();
  $.ajax({
    url: queryURLFood,
    method: "GET",
  }).then(function (foodSearchResults) {
    console.log(foodSearchResults);
    //  for inloop to pull out the strIngredients and put them on an li and append to ul

    for (Ingredient in foodSearchResults.meals[0]) {
      if (Ingredient.indexOf("strIngredient") !== -1) {
        ingrediantsarr.push(foodSearchResults.meals[0][Ingredient]);
        console.log(ingrediantsarr);
      }
    }
    // for loop to cycle through arrar and append li's onto ul
    for (let i = 0; i < ingrediantsarr.length; i++) {
      var li = $("<li>");
      if (ingrediantsarr[i] !== "") {
        li.text(ingrediantsarr[i]);
        $("#ingrediantsList").append(li);
      }
    }
    // pulls recipe and attaches to the page
    $("#recipe").text(
      "How to make: " + foodSearchResults.meals[0].strInstructions
    );
    // empties the arr for a clean new search with no past food
    ingrediantsarr = [];
    // for inloop to pull out the strMeasurements and put them on an li and append to ul
    for (Measurements in foodSearchResults.meals[0]) {
      if (Measurements.indexOf("strMeasure") !== -1) {
        measurementsarr.push(foodSearchResults.meals[0][Measurements]);
      }
    }
    // foor loop to cycle through arrar and append li's onto ul
    for (let i = 0; i < measurementsarr.length; i++) {
      if (measurementsarr[i] !== "") {
        var liMeasure = $("<li>");
        liMeasure.text(measurementsarr[i]);
        $("#measurementsList").append(liMeasure);
      }
    }
    // empties the arr for a clean new search with no past measurements
    measurementsarr = [];

    // grabs image and adds it to html
    var img = $("#imageFood");
    img.attr("src", foodSearchResults.meals[0].strMealThumb);
  });
}
// this function grabs the drink via the searched term
function getalcohol() {
  var queryURLDrinks =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
    userDrinkInput.val();
  $.ajax({
    url: queryURLDrinks,
    method: "GET",
  }).then(function (drinkSearchResults) {
    console.log(drinkSearchResults);
    //  for inloop to pull out the strIngredients and put them on an li and append to ul
    for (drink in drinkSearchResults.drinks[0]) {
      if (drink.indexOf("strIngredient") !== -1) {
        drinkIngredientarr.push(drinkSearchResults.drinks[0][drink]);
      }
    }
    // foor loop to cycle through arrar and append li's onto ul
    for (let i = 0; i < drinkIngredientarr.length; i++) {
      if (drinkIngredientarr[i] !== null) {
        var li = $("<li>");
        li.text(drinkIngredientarr[i]);
        $("#ingrediantsDrink").append(li);
      }
    }
    console.log(drinkIngredientarr);
    // empties the arr for a clean new search with no past ingredients
    drinkIngredientarr = [];

    // grabs image and adds it to html
    var img = $("#imageDrink");
    img.attr("src", drinkSearchResults.drinks[0].strDrinkThumb);

    // creates list item

    for (drinkMeasures in drinkSearchResults.drinks[0]) {
      if (drinkMeasures.indexOf("strMeasure") !== -1) {
        drinkMeasurementsarr.push(drinkSearchResults.drinks[0][drinkMeasures]);
      }
    }
    // foor loop to cycle through arrar and append li's onto ul
    for (let i = 0; i < drinkMeasurementsarr.length; i++) {
      if (drinkMeasurementsarr[i] !== null) {
        var liMeasures = $("<li>");
        liMeasures.text(drinkMeasurementsarr[i]);
        $("#measurementsDrink").append(liMeasures);
      }
    }
    // empties the arr for a clean new search with no past measurements
    console.log(drinkMeasurementsarr);
    drinkMeasurementsarr = [];

    var drinkRecipe = drinkSearchResults.drinks[0].strInstructions;
    $("#drinkRecipe").text("How to make: " + drinkRecipe);
  });
}
// this takes the users search term and triggers the search on a submit (food)
userFoodForm.on("submit", function (event) {
  event.preventDefault();

  $("#measurementsList").empty();
  $("#ingrediantsList").empty();
  getFood();
});
// this takes the users search term and triggers the search on a submit (drink)
userDrinkForm.on("submit", function (event) {
  event.preventDefault();
  $("#ingrediantsDrink").empty();
  $("#measurementsDrink").empty();
  getalcohol();
});
// runs random on zest me click
zestME.on("click", function () {
  preventDefault();
  $("#measurementsList").empty();
  $("#ingrediantsList").empty();
  $("#ingrediantsDrink").empty();
  $("#measurementsDrink").empty();
  zestmeBTNFood();
  zestmeBTNDrink();
});
// allows for recipes to appear on page load
zestmeBTNFood();
zestmeBTNDrink();

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.carousel');
//   var instances = M.Carousel.init(elems, options);
// });

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.sidenav');
//   var instances = M.Sidenav.init(elems, options);
// });
// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.sidenav');
//   var instances = M.Sidenav.init(elems, options);
