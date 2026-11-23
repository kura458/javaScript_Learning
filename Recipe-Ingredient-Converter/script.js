
// ========================================
// 1. CONVERSION TABLE
// ========================================

const conversionTable = {
  cup: {
    gram: 240,
    ounce: 8,
    teaspoon: 48
  },

  gram: {
    cup: 1 / 240,
    ounce: 0.0353,
    teaspoon: 0.2
  },

  ounce: {
    cup: 0.125,
    gram: 28.35,
    teaspoon: 6
  },

  teaspoon: {
    cup: 1 / 48,
    gram: 5,
    ounce: 0.167
  }
};

// ========================================
// 2. CURRIED CONVERSION FUNCTION
// ========================================

const convertQuantity = (fromUnit) => (toUnit) => (quantity) => {
  const conversionRate = conversionTable[fromUnit][toUnit];
  return quantity * conversionRate;
};

// ========================================
// 3. ADJUST QUANTITY FOR SERVINGS
// ========================================

const adjustForServings = (baseQuantity) => (newServings) =>
  baseQuantity * newServings;

// ========================================
// 4. PROCESS INGREDIENT
// ========================================

const processIngredient = (
  baseQuantity,
  baseUnit,
  newUnit,
  newServings
) => {
  const adjustedQuantity = adjustForServings(baseQuantity)(newServings);

  const convertedQuantity = convertQuantity(baseUnit)(newUnit)(
    adjustedQuantity
  );

  return convertedQuantity.toFixed(2);
};

// ========================================
// 5. DOM ELEMENTS
// ========================================

const ingredientName = document.getElementById("ingredient");
const ingredientQuantity = document.getElementById("quantity");
const unitToConvert = document.getElementById("unit");
const numberOfServings = document.getElementById("servings");

const recipeForm = document.getElementById("recipe-form");
const resultList = document.getElementById("result-list");
const emptyState = document.getElementById("empty-state");

// ========================================
// 6. AVAILABLE UNITS
// ========================================

const units = ["cup", "gram", "ounce", "teaspoon"];

// ========================================
// 7. UPDATE RESULTS LIST
// ========================================

const updateResultsList = () => {
  resultList.innerHTML = "";

  const ingredient = ingredientName.value.trim();
  const quantity = Number(ingredientQuantity.value);
  const servings = Number(numberOfServings.value);
  const selectedUnit = unitToConvert.value;

  // Validate input values
  if (
    !ingredient ||
    !Number.isFinite(quantity) ||
    quantity <= 0 ||
    !Number.isFinite(servings) ||
    servings <= 0
  ) {
    return;
  }

  // Generate conversions for all other units
  units.forEach((currentUnit) => {
    if (currentUnit !== selectedUnit) {
      const convertedQuantity = processIngredient(
        quantity,
        selectedUnit,
        currentUnit,
        servings
      );

      const listItem = document.createElement("li");

      const ingredientText = document.createElement("span");
      ingredientText.textContent = `${ingredient}:`;

      const resultText = document.createElement("span");
      resultText.className = "result-unit";
      resultText.textContent = `${convertedQuantity} ${currentUnit}`;

      listItem.append(ingredientText, resultText);
      resultList.appendChild(listItem);
    }
  });

  emptyState.hidden = true;
};

// ========================================
// 8. FORM SUBMISSION
// ========================================

recipeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updateResultsList();
});
