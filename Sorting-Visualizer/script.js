
// Generate a random integer between 1 and 100.
function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

// Generate an array containing five random integers.
function generateArray() {
  return Array.from({ length: 5 }, () => generateElement());
}

// Create and return an empty div.
function generateContainer() {
  return document.createElement("div");
}

// Populate an element with five span elements.
function fillArrContainer(element, arr) {
  element.innerHTML = "";

  arr.forEach((number) => {
    const span = document.createElement("span");
    span.textContent = number;
    element.appendChild(span);
  });
}

// Check whether two integers are in ascending order.
function isOrdered(a, b) {
  return a <= b;
}

// Swap adjacent elements when necessary.
function swapElements(arr, index) {
  if (!isOrdered(arr[index], arr[index + 1])) {
    [arr[index], arr[index + 1]] = [
      arr[index + 1],
      arr[index]
    ];
  }
}

// Highlight the two elements being compared.
function highlightCurrentEls(element, index) {
  const children = element.children;

  if (children[index]) {
    children[index].style.border = "2px dashed red";
  }

  if (children[index + 1]) {
    children[index + 1].style.border = "2px dashed red";
  }
}

// Select HTML elements.
const startingArray = document.getElementById("starting-array");
const arrayContainer = document.getElementById("array-container");
const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");

// Generate a new array.
generateBtn.addEventListener("click", () => {
  const randomArray = generateArray();

  // Remove previous sorting steps.
  arrayContainer.replaceChildren(startingArray);

  // Display the new random numbers.
  fillArrContainer(startingArray, randomArray);
});

// Visualize Bubble Sort.
sortBtn.addEventListener("click", () => {
  // Read the initial array.
  const arr = Array.from(
    startingArray.querySelectorAll("span"),
    (span) => Number(span.textContent)
  );

  // Check that five valid numbers exist.
  if (
    arr.length !== 5 ||
    arr.some((number) => !Number.isFinite(number))
  ) {
    return;
  }

  // Clear previous sorting steps.
  arrayContainer.replaceChildren(startingArray);

  // Preserve and display the original array.
  const originalArray = [...arr];
  fillArrContainer(startingArray, originalArray);

  // Highlight the first two numbers in the starting array.
  highlightCurrentEls(startingArray, 0);

  let swapped;

  // Repeat passes until no swaps are needed.
  do {
    swapped = false;

    // Compare every adjacent pair.
    for (let j = 0; j < arr.length - 1; j++) {
      // Create a row showing the current array state.
      const stepContainer = generateContainer();

      fillArrContainer(stepContainer, arr);

      // Highlight the numbers being compared.
      highlightCurrentEls(stepContainer, j);

      // Add the comparison step.
      arrayContainer.appendChild(stepContainer);

      // Swap the elements if necessary.
      if (!isOrdered(arr[j], arr[j + 1])) {
        swapElements(arr, j);
        swapped = true;
      }
    }
  } while (swapped);

  // Display the final sorted array.
  const sortedContainer = generateContainer();

  fillArrContainer(sortedContainer, arr);
  arrayContainer.appendChild(sortedContainer);
});
