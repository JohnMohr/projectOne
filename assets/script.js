console.log("this is linked");

var drinkIngrediant = $("#userDrinkInput");
var foodSearch = $("#userFoodInput");

var urlQueryDrinks =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkIngrediant;
var urlQueryFood =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=" + foodSearch;

$.ajax({
  url: urlQueryFood,
  method: "GET",
}).then(function (foodSearchResults) {
  console.log(foodSearchResults);
});

$.ajax({
  url: urlQueryDrinks,
  method: "GET",
}).then(function (drinkSearchResults) {
  console.log(drinkSearchResults);
});
