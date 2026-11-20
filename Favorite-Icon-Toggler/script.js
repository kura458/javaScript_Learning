
// Select all favorite buttons.
const favoriteButtons = document.querySelectorAll(".favorite-icon");

// Add a click event listener to every favorite button.
favoriteButtons.forEach((button) => {
  button.addEventListener("click", () => {

    // Check whether the button already has the filled class.
    if (button.classList.contains("filled")) {

      // Remove the filled class.
      button.classList.remove("filled");

      // Change the heart to an empty heart.
      button.innerHTML = "&#9825;";

    } else {

      // Add the filled class.
      button.classList.add("filled");

      // Change the heart to a filled heart.
      button.innerHTML = "&#10084;";
    }
  });
});
