function loadData(){
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then(response=>response.json())
    .then(data=>displayMeals(data.meals));
}

function displayMeals(meals){
    for(meal of meals){
        console.log(meal);
        var mealsContainer = document.getElementById("meals-container");
        var mealCard = document.createElement("div");
        mealCard.classList.add("meal-item");
        mealCard.innerHTML = `
        <div class="img-container">
            <img src="${meal.strMealThumb
            }" alt="">
        </div>
        <p class="food-description">${meal.strMeal}</p>
        <p>${meal.strInstructions.slice(0,50)}</p>
        `;
        mealsContainer.appendChild(mealCard);
    }
}
loadData();