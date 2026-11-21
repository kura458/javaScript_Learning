
const messageInput = document.getElementById("message-input");
const resultPanel = document.getElementById("result-panel");
const resultTitle = document.getElementById("result-title");
const resultMessage = document.getElementById("result-message");
const resultIcon = document.getElementById("result-icon");
const characterCount = document.getElementById("character-count");
const checkMessageButton = document.getElementById("check-message-btn");

// Spam detection patterns
const helpRegex = /please help|assist me/i;

const dollarRegex =
  /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;

const freeRegex =
  /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;

const stockRegex =
  /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;

const dearRegex =
  /(?:^|\s)d[e3][a@4]r fr[1i|][e3]nd(?:$|\s)/i;

// All spam patterns
const denyList = [
  helpRegex,
  dollarRegex,
  freeRegex,
  stockRegex,
  dearRegex
];

// Check whether a message contains a spam pattern
const isSpam = (msg) =>
  denyList.some((regex) => regex.test(msg));

// Update the character counter
messageInput.addEventListener("input", () => {
  characterCount.textContent = `${messageInput.value.length} / 2000`;
});

// Display the scan result
const displayResult = (isSpamMessage) => {
  resultPanel.hidden = false;

  if (isSpamMessage) {
    resultPanel.className = "result-panel spam";
    resultIcon.textContent = "!";
    resultTitle.textContent = "Potential spam detected";
    resultMessage.textContent =
      "This message contains suspicious words or patterns. Be careful before responding.";
  } else {
    resultPanel.className = "result-panel safe";
    resultIcon.textContent = "✓";
    resultTitle.textContent = "No known spam detected";
    resultMessage.textContent =
      "This message did not match any of the current spam detection patterns. This does not guarantee that it is safe.";
  }
};

// Scan button event
checkMessageButton.addEventListener("click", () => {
  const message = messageInput.value.trim();

  if (message === "") {
    alert("Please enter a message.");
    messageInput.focus();
    return;
  }

  displayResult(isSpam(message));

  messageInput.value = "";
  characterCount.textContent = "0 / 2000";
});
