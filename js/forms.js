let base = document.getElementById('dropDownBase');
let citrus = document.getElementById('dropDownCitrus');
let bitter = document.getElementById('dropDownBitter');
let sweet = document.getElementById('dropDownSweet');

let baseFunction = function(){
  for(let i = 0;i < baseSpirits.length; i++){
    let baseName = baseSpirits[i].name;
    let baseOption = document.createElement('option');
    baseOption.textContent = baseName;
    base.appendChild(baseOption); 
  }
}

let citrusFunction = function(){
  for(let i = 0; i < citrusIngredients.length; i++){
    let citrusName = citrusIngredients[i].name;
    let citrusOption = document.createElement('option');
    citrusOption.textContent = citrusName;
    citrus.appendChild(citrusOption);
  }
}

let bitterFunction = function(){
  for(let i = 0; i < bitterIngredients.length; i++){
    let bitterName = bitterIngredients[i].name;
    let bitterOption = document.createElement('option');
    bitterOption.textContent = bitterName;
    bitter.appendChild(bitterOption);
  }
}

let sweetFunction = function(){
  for (i = 0; i < sweetIngredients.length; i++){
    let sweetName = sweetIngredients[i].name;
    let sweetOption = document.createElement('option');
    sweetOption.textContent = sweetName;
    sweet.appendChild(sweetOption);
  }
}
baseFunction();
citrusFunction();
bitterFunction();
sweetFunction();


let ingredientsForm = document.getElementById('ingredientsForm');
let baseSelector = document.getElementById('dropDownBase');
let citrusSelector = document.getElementById('dropDownCitrus');
let bitterSelector = document.getElementById('dropDownBitter');
let sweetSelector = document.getElementById('dropDownSweet');
// let options = document.querySelectorAll('option');
let selectedIngredients = [];

// console.log(options);

function handleSelection (event) {
  let userSelection = event.target.value
  console.log (userSelection);
  for (let i = 0; i < allIngredients.length; i++) {
    if (userSelection === allIngredients[i].name) { 
      let userIngredient = allIngredients[i]
      selectedIngredients.push(userIngredient);
    };
  };
  console.log (selectedIngredients);
};

  baseSelector.addEventListener('change', handleSelection);
  citrusSelector.addEventListener('change', handleSelection);
  bitterSelector.addEventListener('change', handleSelection);
  sweetSelector.addEventListener('change', handleSelection);


  function renderRecipe () {

    let recipeDisplay = document.getElementById('something');
    let recipeElement = document.createElement('p');
    
    //unitOfMeasure is written as unitofMeasure
    recipeElement.textContent = `Here you go! Mix ${selectedIngredients[0].volume}${selectedIngredients[0].unitofMeasure} of ${selectedIngredients[0].name}, ${selectedIngredients[1].volume}${selectedIngredients[1].unitofMeasure} of ${selectedIngredients[1].name}, and ${selectedIngredients[2].volume}${selectedIngredients[2].unitofMeasure} of ${selectedIngredients[2].name}. Stir over ice and pour into a chilled cocktail glass. Enjoy!`
    recipeDisplay.appendChild(recipeElement);
    let recipeDisplay = document.getElementById('recipe');
    recipeDisplay.textContent = `Here you go! Mix ${selectedIngredients[0].volume}${selectedIngredients[0].unitofMeasure} of ${selectedIngredients[0].name}, ${selectedIngredients[1].volume}${selectedIngredients[1].unitofMeasure} of ${selectedIngredients[1].name}, and ${selectedIngredients[2].volume}${selectedIngredients[2].unitofMeasure} of ${selectedIngredients[2].name}. Stir over ice and pour into a chilled cocktail glass. Enjoy!`;

  }


  ingredientsForm.addEventListener("submit", function(event) {
    event.preventDefault();
    ingredientsForm.reset();
    dropDownBase.focus();
    console.log (selectedIngredients);
    renderRecipe();
    // renderImage(); this function hasn't been made yet
    }
  );
  // })