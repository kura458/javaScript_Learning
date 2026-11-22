
var themes = (window.themes = [
  {
    name: "ocean",
    message: "Find your calm and let your ideas flow like the ocean."
  },
  {
    name: "sunset",
    message: "Embrace warm colors and let your creativity shine."
  },
  {
    name: "forest",
    message: "Reconnect with nature and grow your best ideas."
  }
]);

const themeSwitcherButton = document.getElementById(
  "theme-switcher-button"
);

const themeDropdown = document.getElementById("theme-dropdown");
const themeMessage = document.getElementById("theme-message");
const themeTitle = document.getElementById("theme-title");

const themeItems = document.querySelectorAll(
  '#theme-dropdown [role="menuitem"]'
);

// Open or close the theme menu.
function toggleThemeMenu() {
  const isExpanded =
    themeSwitcherButton.getAttribute("aria-expanded") === "true";

  themeDropdown.hidden = isExpanded;

  themeSwitcherButton.setAttribute(
    "aria-expanded",
    String(!isExpanded)
  );
}

// Close the theme menu.
function closeThemeMenu() {
  themeDropdown.hidden = true;
  themeSwitcherButton.setAttribute("aria-expanded", "false");
}

// Apply the selected theme.
function applyTheme(themeName) {
  const selectedTheme = themes.find(
    (theme) => theme.name === themeName
  );

  if (!selectedTheme) {
    return;
  }

  // Remove all previous theme classes.
  themes.forEach((theme) => {
    document.body.classList.remove(`theme-${theme.name}`);
  });

  // Apply the new theme.
  document.body.classList.add(`theme-${selectedTheme.name}`);

  // Update the preview.
  themeTitle.textContent =
    selectedTheme.name.charAt(0).toUpperCase() +
    selectedTheme.name.slice(1);

  themeMessage.textContent = selectedTheme.message;

  closeThemeMenu();
  themeSwitcherButton.focus();
}

// Button click event.
themeSwitcherButton.addEventListener("click", toggleThemeMenu);

// Theme selection events.
themeItems.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedName = item.textContent.trim().toLowerCase();
    applyTheme(selectedName);
  });

  // Allow keyboard selection with Enter or Space.
  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();

      const selectedName = item.textContent.trim().toLowerCase();
      applyTheme(selectedName);
    }
  });
});

// Close the menu when Escape is pressed.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !themeDropdown.hidden) {
    closeThemeMenu();
    themeSwitcherButton.focus();
  }
});
