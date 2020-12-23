console.log("this is linked");

var userDrinkForm = $("#alchiSearch");
var userFoodForm = $("#foodSearch");
var userFoodInput = $("#userFoodInput");
var userDrinkInput = $("#userDrinkInput");
var ingrediantsarr = [];

function getFood() {
  var queryURLFood =
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
    userFoodInput.val();
  $.ajax({
    url: queryURLFood,
    method: "GET",
  }).then(function (foodSearchResults) {
    // api text for ing and recipe

    // for (foodSearchResults in meals[0]) {
    //   if (strIngredient !== null) {
    //     ingrediantsarr.push(strIngredient);
    //   }
    // }

    console.log(ingrediantsarr);

    var ingrediantsListOne = foodSearchResults.meals[0].strIngredient1;
    var ingrediantsListTwo = foodSearchResults.meals[0].strIngredient2;
    var ingrediantsListThree = foodSearchResults.meals[0].strIngredient3;
    var MeasureOne = foodSearchResults.meals[0].strMeasure1;
    var MeasureTwo = foodSearchResults.meals[0].strMeasure2;
    var MeasureThree = foodSearchResults.meals[0].strMeasure3;

    // grabs image and adds it to html
    var img = $("#imageFood");
    img.attr("src", foodSearchResults.meals[0].strMealThumb);

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
    // grabs recipe and adds to html element
    var foodRecipe = foodSearchResults.meals[0].strInstructions;
    $("#recipe").text("How to make: " + foodRecipe);
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
    // grabs ing and measurement
    var ingrediantsListOne = drinkSearchResults.drinks[0].strIngredient1;
    var ingrediantsListTwo = drinkSearchResults.drinks[0].strIngredient2;
    var ingrediantsListThree = drinkSearchResults.drinks[0].strIngredient3;
    var ingrediantsListFour = drinkSearchResults.drinks[0].strIngredient4;
    var ingrediantsListFive = drinkSearchResults.drinks[0].strIngredient5;
    var MeasureOne = drinkSearchResults.drinks[0].strMeasure1;
    var MeasureTwo = drinkSearchResults.drinks[0].strMeasure2;
    var MeasureThree = drinkSearchResults.drinks[0].strMeasure3;
    var Measurefour = drinkSearchResults.drinks[0].strMeasure4;

    // grabs image and adds it to html
    var img = $("#imageDrink");
    img.attr("src", drinkSearchResults.drinks[0].strDrinkThumb);

    // creates list item
    var inglistOne = $("<li>");
    var inglistTwo = $("<li>");
    var inglistThree = $("<li>");
    var inglistFour = $("<li>");
    var inglistFive = $("<li>");
    // attaches ing and measure to LI
    inglistOne.text(ingrediantsListOne + " " + MeasureOne);
    inglistTwo.text(ingrediantsListTwo + " " + MeasureTwo);
    inglistThree.text(ingrediantsListThree + " " + MeasureThree);
    inglistFour.text(ingrediantsListFour + " " + Measurefour);
    inglistFive.text(ingrediantsListFive);
    // appends LI to UL on html Element
    $("#ingrediantsDrink").append(inglistOne);
    $("#ingrediantsDrink").append(inglistTwo);
    $("#ingrediantsDrink").append(inglistThree);
    $("#ingrediantsDrink").append(inglistFour);
    $("#ingrediantsDrink").append(inglistFive);

    var drinkRecipe = drinkSearchResults.drinks[0].strInstructions;
    $("#drinkRecipe").text("How to make: " + drinkRecipe);
  });
}

userFoodForm.on("submit", function (event) {
  event.preventDefault();
  $("#ingrediantsList").empty();
  getFood();
});
userDrinkForm.on("submit", function (event) {
  event.preventDefault();
  $("#ingrediantsDrink").empty();
  getalcohol();
});
