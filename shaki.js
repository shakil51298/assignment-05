const InputBox = document.getElementById('input-box');
const searchBTn = document.getElementById('searchBtn');
searchBTn.addEventListener('click', function () {
    if (InputBox.value == '') {
        alert('please enter something')
    } else {
        main()
    }
})

const main = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+InputBox.value+'')
        .then(res => res.json())
        .then(data => {
            const mainMealData = data.meals;
            mainMealData.forEach(singleMealData => {
                const NameOfMeal = singleMealData.strMeal;
                const MealThumb = singleMealData.strMealThumb;

                if (NameOfMeal => 2* NameOfMeal) {
                    NameOfMeal = '';
                }

                // console.log(NameOfMeal, MealThumb);
            });

        })

}


fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then(res => res.json())
    .then(data => {
        const mainMealData = data;
        console.log(mainMealData);
    })