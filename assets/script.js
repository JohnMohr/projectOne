console.log("this is linked");
M.AutoInit();

var userDrinkForm = $("#alchiSearch");
var userFoodForm = $("#foodSearch");
var userFoodInput = $("#userFoodInput");
var userDrinkInput = $("#userDrinkInput");

var drinkIngredientarr = [];
var drinkMeasurementsarr = [];
var ingrediantsarr = [];
var measurementsarr = [];



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
    console.log(drinkMeasurementsarr);
    drinkMeasurementsarr = [];

    var drinkRecipe = drinkSearchResults.drinks[0].strInstructions;
    $("#drinkRecipe").text("How to make: " + drinkRecipe);
  });
}
userFoodForm.on("submit", function (event) {
  event.preventDefault();

  $("#measurementsList").empty();
  $("#ingrediantsList").empty();
  getFood();
});
userDrinkForm.on("submit", function (event) {
  event.preventDefault();
  $("#ingrediantsDrink").empty();
  $("#measurementsDrink").empty();
  getalcohol();
});


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