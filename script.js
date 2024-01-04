document.addEventListener("DOMContentLoaded", function() {
    const apiEndpoint = 'https://themealdb.com/api/json/v1/1/filter.php?c=Seafood';

    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => displayImages(data.meals))
        .catch(error => console.error('Error fetching meals:', error));
});

// for searched results
function displayImages(meals) {
    var imageContainer = document.getElementById('imageContainer');

    meals.forEach(meal => {
        var mealContainer = document.createElement('div');
        mealContainer.className = 'meal-container';
        var img = document.createElement('img');
        img.src = meal.strMealThumb;
        img.alt = meal.strMeal;
        var nameParagraph = document.createElement('p');
        nameParagraph.textContent = meal.strMeal;
        mealContainer.appendChild(img);
        mealContainer.appendChild(nameParagraph);
        imageContainer.appendChild(mealContainer);
    });
}

// for meal of the day
function fetchData0() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => response.json())
    .then((data) => displayrandom(data.meals[0])) // Access the first meal in the array
    .catch(error => console.error(error));
}

function displayrandom(meal) {
    const randomimage = document.querySelector(".mealofthedayimage");
    const randomname = document.querySelector(".mealofthedayname");
    randomimage.src = meal.strMealThumb;
    randomname.textContent = meal.strMeal;
}
fetchData0();


document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from the API
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(response => response.json())
        .then(data => displayRandomImages(data.meals))
        .catch(error => console.error('Error fetching meals:', error));
});

// Function to display random images
function displayRandomImages(meals) {
    for (let i = 0; i < meals.length; i++) {
        const meal = meals[i];
        const randomImage = document.querySelector(`.randomimage${i + 1}`);
        const randomName = document.querySelector(`.randomname${i + 1}`);

        if (randomImage) {
            randomImage.src = meal.strMealThumb;
            randomName.textContent = `⦿ ${meal.strMeal}`;
        }
    }
}