
// Update the count displayed inside an emoji button.
function updateCount(btn) {

  // Find the count element inside the selected button.
  const countEl = btn.querySelector(".count");

  // Extract the current number from text such as "5/10".
  const currCount = Number.parseInt(
    countEl.textContent.split("/")[0],
    10
  );

  // Stop if the count has already reached the maximum.
  if (currCount >= 10) {
    return;
  }

  // Increase the current count by one.
  const newCount = currCount + 1;

  // Update the displayed count.
  countEl.textContent = `${newCount}/10`;
}

// Select all buttons with the emoji-btn class.
const btns = document.querySelectorAll(".emoji-btn");

// Add the same click event listener to every emoji button.
btns.forEach((btn) => {

  // Update the count whenever a button is clicked.
  btn.addEventListener("click", () => {
    updateCount(btn);
  });

});
