console.log("this is linked");

function getFood() {
    var queryURLFood =
      "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
      userFoodInput.val();
    $.ajax({
      url: queryURLFood,
      method: "GET",
    }).then(function (foodSearchResults) {

        $("#dayOne").attr("src", foodSearchResults.meals[0].strMealThumb);
    }