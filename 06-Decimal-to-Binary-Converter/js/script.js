
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const clearBtn = document.getElementById("clear-btn");
const copyBtn = document.getElementById("copy-btn");
const result = document.getElementById("result");
const errorMessage = document.getElementById("error-message");
const conversionMode = document.getElementById("conversion-mode");
const inputLabel = document.getElementById("input-label");
const animationContainer = document.getElementById("animation-container");

let animationTimers = [];

// DECIMAL TO BINARY - RECURSION
const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  }

  return decimalToBinary(Math.floor(input / 2)) + (input % 2);
};

// BINARY TO DECIMAL
const binaryToDecimal = (input) => {
  return BigInt("0b" + input).toString(10);
};

// UPDATE INPUT BASED ON CONVERSION MODE
const updateInputMode = () => {
  const isDecimal = conversionMode.value === "decimal-to-binary";

  inputLabel.textContent = isDecimal
    ? "Enter a decimal number"
    : "Enter a binary number";

  numberInput.placeholder = isDecimal
    ? "e.g. 25"
    : "e.g. 11001";

  numberInput.inputMode = "numeric";

  numberInput.value = "";
  result.textContent = "Your result will appear here";
  errorMessage.textContent = "";
  copyBtn.disabled = true;

  clearAnimation();
};

// CLEAR ANIMATION AND TIMERS
const clearAnimation = () => {
  animationTimers.forEach((timer) => clearTimeout(timer));
  animationTimers = [];
  animationContainer.innerHTML =
    '<p class="empty-animation">Convert decimal 5 to see the animation.</p>';
};

// SHOW RECURSION ANIMATION
const showAnimation = (input) => {
  clearAnimation();

  result.textContent = "Call Stack Animation";

  const callValues = [];
  let current = input;

  while (current > 1) {
    callValues.push(current);
    current = Math.floor(current / 2);
  }

  callValues.push(current);

  callValues.forEach((value, index) => {
    const timer = setTimeout(() => {
      const frame = document.createElement("p");
      frame.className = "animation-frame";
      frame.textContent = `decimalToBinary(${value})`;

      animationContainer.appendChild(frame);
    }, index * 900);

    animationTimers.push(timer);
  });

  const finishTimer = setTimeout(() => {
    result.textContent = decimalToBinary(input);
  }, callValues.length * 900 + 500);

  animationTimers.push(finishTimer);
};

// HANDLE CONVERSION
const checkUserInput = () => {
  const inputValue = numberInput.value.trim();

  errorMessage.textContent = "";

  if (inputValue === "") {
    errorMessage.textContent = "Please enter a number.";
    return;
  }

  if (conversionMode.value === "decimal-to-binary") {
    if (!/^\d+$/.test(inputValue)) {
      errorMessage.textContent =
        "Please enter a valid non-negative decimal integer.";
      return;
    }

    const inputInt = Number(inputValue);

    if (!Number.isSafeInteger(inputInt)) {
      errorMessage.textContent =
        "Please enter a decimal number within JavaScript's safe integer range.";
      return;
    }

    clearAnimation();

    if (inputInt === 5) {
      showAnimation(inputInt);
    } else {
      result.textContent = decimalToBinary(inputInt);
    }
  } else {
    if (!/^[01]+$/.test(inputValue)) {
      errorMessage.textContent =
        "Binary numbers can only contain 0 and 1.";
      return;
    }

    clearAnimation();
    result.textContent = binaryToDecimal(inputValue);
  }

  copyBtn.disabled = false;
};

// CLEAR INPUT AND RESULT
const clearConverter = () => {
  numberInput.value = "";
  result.textContent = "Your result will appear here";
  errorMessage.textContent = "";
  copyBtn.disabled = true;

  clearAnimation();
  numberInput.focus();
};

// COPY RESULT
const copyResult = async () => {
  const value = result.textContent;

  if (!value || copyBtn.disabled) {
    return;
  }

  try {
    await navigator.clipboard.writeText(value);
    copyBtn.textContent = "Copied!";

    setTimeout(() => {
      copyBtn.textContent = "Copy Result";
    }, 1500);
  } catch {
    errorMessage.textContent =
      "Unable to copy. Please select and copy the result manually.";
  }
};

// EVENT LISTENERS
convertBtn.addEventListener("click", checkUserInput);

clearBtn.addEventListener("click", clearConverter);

copyBtn.addEventListener("click", copyResult);

conversionMode.addEventListener("change", updateInputMode);

numberInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkUserInput();
  }
});
