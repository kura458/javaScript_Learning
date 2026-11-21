
const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = (text) => {
  const cleanedText = text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  const reversedText = cleanedText
    .split("")
    .reverse()
    .join("");

  return cleanedText === reversedText;
};

checkButton.addEventListener("click", () => {
  const originalText = textInput.value;

  if (originalText.trim() === "") {
    alert("Please input a value");
    return;
  }

  if (checkPalindrome(originalText)) {
    result.textContent = `${originalText} is a palindrome.`;
    result.className = "result";
  } else {
    result.textContent = `${originalText} is not a palindrome.`;
    result.className = "result not-palindrome";
  }
});

// Allow Enter key to trigger the checker
textInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkButton.click();
  }
});

// Example buttons
const exampleButtons = document.querySelectorAll(".example");

exampleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    textInput.value = button.dataset.example;
    textInput.focus();
    checkButton.click();
  });
});
