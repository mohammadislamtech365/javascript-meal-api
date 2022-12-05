function loadMeals(searchParam){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParam}`)
    .then(response=>response.json())
    .then(data=>displayMeals(data.meals))
    .catch(error=>{
        document.getElementById("meals-container").innerHTML=`<h3 class="error">No match found</h3>`;
        console.log(error);
    }
        );
}

function displayMeals(meals){
    const mealsContainer = document.getElementById("meals-container");
    mealsContainer.innerHTML=``;
    for(meal of meals){
        const mealCard = document.createElement("div");
        mealCard.classList.add("meal-item");
        mealCard.innerHTML = `
        <div id="meal-card" onclick="loadMealDetails(${meal.idMeal})">
            <div class="img-container">
                <img src="${meal.strMealThumb
                }" alt="">
            </div>
            <p class="food-description">${meal.strMeal}</p>
            <p>${meal.strInstructions.slice(0,50)}</p>
        </div>
        `;
        mealsContainer.appendChild(mealCard);
    }
}
function searchMeal(){
    const searchBtn = document.getElementById("search-btn");
    searchBtn.addEventListener("click",function(){
        var searchMealElement = document.getElementById("search-meal");
        loadMeals(searchMealElement.value);
        searchMealElement.value="";
    });
    
}

function loadMealDetails(mealId){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`).
    then(res=>res.json()).
    then(data=>displayMealDetails(data.meals)).
    catch(error=>{
        document.getElementById("meals-container").innerHTML=`<h3 class="error">No match found</h3>`;
        console.log(error);
    })
}
const displayMealDetails = (meal)=>{
    const mealsContainer = document.getElementById("meals-container");
    mealsContainer.innerHTML=``;
    const mealCard = document.createElement("div");
    mealCard.classList.add("meal-detail-container");
    mealCard.innerHTML = `
    <div id="meal-detail">
        <div class="img-container">
            <img src="${meal[0].strMealThumb}" alt="">
        </div>
        <p class="food-description">${meal[0].strMeal}</p>
        <p>${meal[0].strInstructions}</p>
    </div>
    `;
    mealsContainer.appendChild(mealCard);
}
searchMeal();
loadMeals("");


