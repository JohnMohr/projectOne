# projectOne

![snapShot]()

## Product:

This is an web application that gives you recipes based on what you search for. On top of food recipes there are drink recipes as well with instuctions, ingredients and measurements.

## [Click Me](https://johnmohr.github.io/projectOne/) to see the deployed website

## Features:

- ability to search for recipes
- ability to search for drinks
- add food and drinks to your favourites and save them for a later day
- thorough insturctrions on how to create the food and drinks
- a stylish and modern web design
- pictures of the final products
- a random button to help you make a decision faster or avoid those fights with your SO.

### behind the scenes:

---

this application uses jquery and ajax to pull info into the website. It is then filtered for the ingredients and measurements through a for in loop because each ingredeint was in it's own, as it cycles through the array it pushs them into another array which I loop through to grab the measurements and ingredients.

The save button saves the card as an array and loads it on the proper html, either the food or drink so the entire card can be displayed. It is saved via a JSON stringify and loaded by a JSON.parse.

at zestymeals we know zesty is more than a description, it's a feeling. Sometimes we just want to be a little zesty. our app aims to add that to our users lives.
with controlled chaos and hidden easter eggs we achieve a user experience that offers happy and complete meals.

user: a hungry person looking for excitement.
materializecss
https://developers.google.com/youtube/iframe_api_reference
https://www.thecocktaildb.com/
https://www.themealdb.com/

later features: favorite zestipes, imperial measurements.

