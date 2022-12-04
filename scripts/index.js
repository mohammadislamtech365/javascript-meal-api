function loadData(searchParam){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParam}`)
    .then(response=>response.json())
    .then(data=>displayMeals(data.meals));
}

function displayMeals(meals){
    const mealsContainer = document.getElementById("meals-container");
    mealsContainer.innerHTML=``;
    for(meal of meals){
        const mealCard = document.createElement("div");
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
function searchMeal(){
    const searchBtn = document.getElementById("search-btn");
    searchBtn.addEventListener("click",function(){
        var searchMealElement = document.getElementById("search-meal");
        loadData(searchMealElement.value);
        searchMealElement.value="";
    });
    
}
searchMeal();
loadData("");


