
const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

const matchCount = document.getElementById("match-count");

// Get selected regular expression flags.
function getFlags() {
  let flags = "";

  if (caseInsensitiveFlag.checked) {
    flags += "i";
  }

  if (globalFlag.checked) {
    flags += "g";
  }

  return flags;
}

// Escape HTML to safely display user-entered text.
function escapeHTML(text) {
  return text.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}

// Highlight matches without changing the original text.
function highlightMatches(text, matches) {
  let highlightedHTML = "";
  let lastIndex = 0;

  matches.forEach((match) => {
    highlightedHTML += escapeHTML(
      text.slice(lastIndex, match.index)
    );

    highlightedHTML += `<span class="highlight">${escapeHTML(match[0])}</span>`;

    lastIndex = match.index + match[0].length;
  });

  highlightedHTML += escapeHTML(text.slice(lastIndex));

  return highlightedHTML;
}

// Run the regular expression test.
testButton.addEventListener("click", () => {
  const pattern = regexPattern.value;
  const originalText = stringToTest.textContent;

  try {
    const regex = new RegExp(pattern, getFlags());

    // Use a global copy to collect match positions.
    const searchRegex = new RegExp(
      regex.source,
      regex.flags.includes("g")
        ? regex.flags
        : regex.flags + "g"
    );

    let matches = [...originalText.matchAll(searchRegex)];

    // Without the global flag, only highlight the first match.
    if (!globalFlag.checked) {
      matches = matches.slice(0, 1);
    }

    if (matches.length > 0) {
      testResult.textContent = matches
        .map((match) => match[0])
        .join(", ");

      stringToTest.innerHTML = highlightMatches(
        originalText,
        matches
      );

      matchCount.textContent =
        `${matches.length} ${matches.length === 1 ? "MATCH" : "MATCHES"}`;
    } else {
      testResult.textContent = "no match";

      matchCount.textContent = "0 MATCHES";
    }
  } catch (error) {
    testResult.textContent = "Invalid regular expression.";

    matchCount.textContent = "INVALID PATTERN";
  }
});
