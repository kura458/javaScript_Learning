
const textInput = document.querySelector("#text-input");
const charCount = document.querySelector("#char-count");

const maxLength = 50;

textInput.addEventListener("input", () => {
  if (textInput.value.length > maxLength) {
    textInput.value = textInput.value.slice(0, maxLength);
  }

  const currentLength = textInput.value.length;

  charCount.textContent = `Character Count: ${currentLength}/${maxLength}`;

  if (currentLength >= maxLength) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "";
  }
});
