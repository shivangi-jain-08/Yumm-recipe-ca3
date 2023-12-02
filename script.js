
//Function to fetch random meal and show it
function getRandomMeal(){
    let url = 'https://www.themealdb.com/api/json/v1/1/random.php'
    axios.get(url).then((res)=>{
        let data = res.data.meals[0]
        console.log("res.data.meals[0]: ", res.data.meals[0]);

        let output = '';

        let trendingRecipeDiv = document.getElementById("trending-recipe")

        output = `<h2>Trending Recipe</h2>
        <img src="${data.strMealThumb}" alt="" id="random-meal-image">
        <h3 id="random-meal-name">${data.strMeal}</h3>
        <div id="modal-container">
        <button class="closeModal" id="closeModal" tabindex="5"></button>
        <h3>${data.strMeal}</h3>
                <img src="${data.strMealThumb}" alt="" id="random-meal-image">
                <h3>Ingredients</h3>
                <ol id="ingredient-list">
                
            </ol>
            <h3>Instructions</h3>
            <p id="instructions">${data.strInstructions}</p>

                <h3>YouTube Link</h3>
                <a href="${data.strYoutube}" id="yt-link">${data.strYoutube}</a>
            </div>`

        trendingRecipeDiv.innerHTML = output;
        let ingredientList = document.getElementById("ingredient-list")
        console.log("data.strIngredient: ", data.strIngredient1);
        let ingredientArray = [
            data.strIngredient1,
            data.strIngredient2,
            data.strIngredient3,
            data.strIngredient4,
            data.strIngredient5,
            data.strIngredient6,
            data.strIngredient7,
            data.strIngredient8,
            data.strIngredient9,
            data.strIngredient10,
            data.strIngredient11,
            data.strIngredient12,
            data.strIngredient13,
            data.strIngredient14,
            data.strIngredient15,
            data.strIngredient16,
            data.strIngredient17,
            data.strIngredient18,
            data.strIngredient19,
            data.strIngredient20
        ];

        for(let i = 1; i<=ingredientArray.length; i++){
            if(ingredientArray[i] !="" && ingredientArray[i] !=null){
                ingredientList.innerHTML += `<li>${ingredientArray[i]}</li>`
            }
        }
        

        let randomMealImage = document.getElementById("random-meal-image")
        let modalDiv = document.getElementById("modal-container")
        randomMealImage.addEventListener("click", ()=>{
            if(modalDiv.style.visibility = "hidden"){
                modalDiv.style.visibility = "visible"
            }
        })
        let closeModalButton = document.getElementById("closeModal")

        closeModalButton.addEventListener("click", ()=>{
            modalDiv.style.visibility = 'hidden'
        })

    })
}

//Function to get the search results based on categories and show it
function getSearchResults(){
    document.getElementById("search-results").style.display = "block"
    let searchInput = document.getElementById("search-input").value
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchInput}`
    axios.get(url).then((res)=>{
        let data = res.data.meals
        console.log("data: ", data);
        let categoryInSearch = document.getElementById("category-in-search")
        categoryInSearch.innerHTML = `<h2 id="category-in-search">Search Results: ${searchInput}</h2>`

        let searchResult = document.getElementById("result-grid")
        // console.log(res.data.meals[i].strMeal)
        let output="";
        searchResult.innerHTML = output
        for(let i = 0; i<data.length; i++){
            output = `<div class="result-card">
            <img src="${data[i].strMealThumb}" alt="" id="result-image">
            <h4>${data[i].strMeal}</h4>
        </div>`

        searchResult.innerHTML += output

        }

    }).catch((err)=>{
        console.log(err)
        let searchResult = document.getElementById("result-grid")
        let output = `<h3></h3><h3>Please use a valid search term</h3>`

        searchResult.innerHTML = output
    })


    window.location = "#search-results"

}

// Function to get details of one meal when it is clicked
// function getOneMeal(){

// }


getRandomMeal()
// getSearchResults()

let searchBtn = document.getElementById("search-button")
searchBtn.addEventListener("click", getSearchResults)