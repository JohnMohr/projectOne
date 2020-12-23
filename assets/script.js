console.log("this is linked");

var drinkIngrediant = "mojito";
var foodSearch = "Lasagne";

var queryURLDrinks =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?s=" + drinkIngrediant;
var queryURLFood =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=" + foodSearch;

// foodSearch.on("click", function () {
//   event.preventDefault();
//   foodsearchfunc();
// });

// function foodsearchfunc() {
$.ajax({
  url: queryURLFood,
  method: "GET",
}).then(function (foodSearchResults) {
  console.log(foodSearchResults);
  function getingrediants() {
    // api text for ing and recipe
    var ingrediantsListOne = foodSearchResults.meals[0].strIngredient1;
    var ingrediantsListTwo = foodSearchResults.meals[0].strIngredient2;
    var ingrediantsListThree = foodSearchResults.meals[0].strIngredient3;
    var MeasureOne = foodSearchResults.meals[0].strMeasure1;
    var MeasureTwo = foodSearchResults.meals[0].strMeasure2;
    var MeasureThree = foodSearchResults.meals[0].strMeasure3;

    // grabs image and adds it to html
    var img = $("#imageFood");
    img.attr("src", foodSearchResults.meals[0].strMealThumb);
    $("#foodCard").append(img);
    // grabs ingrediants text and adds the html element
    var inglistOne = $("<li>");
    inglistOne.text(ingrediantsListOne + " " + MeasureOne);
    $("#ingrediantsList").append(inglistOne);
    var inglistTwo = $("<li>");
    inglistTwo.text(ingrediantsListTwo + " " + MeasureTwo);
    $("#ingrediantsList").append(inglistTwo);
    var inglistThree = $("<li>");
    inglistThree.text(ingrediantsListThree + " " + MeasureThree);
    $("#ingrediantsList").append(inglistThree);
  }
  // grabs recipe and adds to html element
  function getfoodrecipe() {
    var foodRecipe = foodSearchResults.meals[0].strInstructions;
    $("#recipe").text("How to make: " + foodRecipe);
  }
  getingrediants();
  getfoodrecipe();
});

$.ajax({
  url: queryURLDrinks,
  method: "GET",
}).then(function (drinkSearchResults) {
  function getDrinksING() {
    console.log(drinkSearchResults);
  }
  getDrinksING();
});
