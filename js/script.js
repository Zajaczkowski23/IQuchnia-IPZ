

fetch("https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=cecfa1eaa5c64151ae7760674e9ac088")
.then((request) => {
    return request.json();
})
.then((data) => {
    console.log(data);
})