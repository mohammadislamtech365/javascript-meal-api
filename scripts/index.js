function loadData(){
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then(response=>response.json())
    .then(data=>displayMeals(data));
}

function displayMeals(meals){
    console.log(meals);
}
loadData();