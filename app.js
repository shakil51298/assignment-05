const inputBox = document.getElementById('input-box');
document.getElementById('searchBtn').addEventListener('click', function () {

    if (inputBox.value === '') {
        alert('Please putdown Meals name or Catergory Name')
    } else {
        main();
    }

})

// display Meal Name thubnail

const main = () => {
    document.getElementById('meals').innerHTML='';
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputBox.value + '')
        .then(res => res.json())
        .then(data => displayMealName(data.meals));
}



const displayMealName = name => {
    const mainDiv = document.getElementById('meals');

    name.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = "mealCard"
        const mealNameAndThub = `
            <img class="thub" src="${meal.strMealThumb}"></img>
            <h3>${meal.strMeal}</h3>
            <button class="btn btn-primary"onclick="displayMealDetail('${meal.idMeal}')">Details</button>
            `;
        mealDiv.innerHTML = mealNameAndThub;
        mainDiv.appendChild(mealDiv);
    });
}

// display meal details
const displayMealDetail = idMeal => {
    
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then(res => res.json())
        .then(data => {
            mealInfo(data.meals[0]);
        })


    const mealInfo = mealdata => {
        const displayDetails = document.getElementById('ingredients')

        const mealstrIngredientDiv = document.createElement('div');
        mealstrIngredientDiv.className = 'mealsIngredient'

        const ingredientsThumb = `
                <img class="thubIngredient" src="${mealdata.strMealThumb}"></img>
                `
        const thubImage = document.getElementById('thumb');
        thubImage.innerHTML = ingredientsThumb
        const mealIngredient = `

                <h2>${mealdata.strMeal}</h2>
                <h4>Ingredients:</h4>
                <h6>✔️ ${mealdata.strIngredient1}</h6>
                <h6>✔️ ${mealdata.strIngredient2}</h6>
                <h6>✔️ ${mealdata.strIngredient3}</h6>
                <h6>✔️ ${mealdata.strIngredient4}</h6>
                <h6>✔️ ${mealdata.strIngredient5}</h6>
                <h6>✔️ ${mealdata.strIngredient6}</h6>
                <h6>✔️ ${mealdata.strIngredient7}</h6>
                <h6>✔️ ${mealdata.strIngredient8}</h6>
                <center><button onclick="back()" class="btn btn-dark">❌</button></center>
               `;

        mealstrIngredientDiv.innerHTML = mealIngredient;
        displayDetails.appendChild(mealstrIngredientDiv)
    }

    const hideFullpage = document.getElementById('foodArea');
    hideFullpage.style.display = "none";
    const showDetails = document.getElementById('ingredients');
    showDetails.style.display = 'block'
}

const back = () => {
    const showFullpage = document.getElementById('foodArea');
    showFullpage.style.display = "block";
    const hideDetails = document.getElementById('ingredients');
    hideDetails.style.display = 'none'
}