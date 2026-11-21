
const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#1B263B",
  "#800020",
  "#17202A",
  "#283747",
  "#512E5F",
  "#154360",
  "#424949"
];

// Select HTML elements
const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
const colorPreview = document.querySelector("#colorPreview");
const btn = document.querySelector("#btn");
const copyBtn = document.querySelector("#copyBtn");

// Generate a random array index
function getRandomIndex() {
  return Math.floor(darkColorsArr.length * Math.random());
}

// Change the background color
function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];

  body.style.backgroundColor = color;
  colorPreview.style.backgroundColor = color;
  bgHexCodeSpanElement.textContent = color;
}

// Copy the current hex color
async function copyColorCode() {
  const color = bgHexCodeSpanElement.textContent;

  try {
    await navigator.clipboard.writeText(color);

    copyBtn.textContent = "Copied!";

    setTimeout(() => {
      copyBtn.textContent = "Copy code";
    }, 1500);
  } catch (error) {
    copyBtn.textContent = "Copy unavailable";

    setTimeout(() => {
      copyBtn.textContent = "Copy code";
    }, 1500);
  }
}

// Add event listeners
btn.addEventListener("click", changeBackgroundColor);
copyBtn.addEventListener("click", copyColorCode);
