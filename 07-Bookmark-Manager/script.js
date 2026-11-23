
"use strict";

// ==========================================
// 1. GET HTML ELEMENTS
// ==========================================

const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");

const addBookmarkButton = document.getElementById("add-bookmark-button");
const closeFormButton = document.getElementById("close-form-button");
const addBookmarkButtonForm = document.getElementById("add-bookmark-button-form");

const viewCategoryButton = document.getElementById("view-category-button");
const closeListButton = document.getElementById("close-list-button");
const deleteBookmarkButton = document.getElementById("delete-bookmark-button");

const categoryDropdown = document.getElementById("category-dropdown");
const categoryNames = document.querySelectorAll(".category-name");
const categoryList = document.getElementById("category-list");

const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");

// ==========================================
// 2. GET BOOKMARKS FROM LOCAL STORAGE
// ==========================================

function getBookmarks() {
  try {
    const storedBookmarks = localStorage.getItem("bookmarks");

    if (!storedBookmarks) {
      return [];
    }

    const bookmarks = JSON.parse(storedBookmarks);

    const isValidArray =
      Array.isArray(bookmarks) &&
      bookmarks.every(bookmark =>
        bookmark !== null &&
        typeof bookmark === "object" &&
        !Array.isArray(bookmark) &&
        typeof bookmark.name === "string" &&
        typeof bookmark.category === "string" &&
        typeof bookmark.url === "string"
      );

    return isValidArray ? bookmarks : [];
  } catch (error) {
    return [];
  }
}

// ==========================================
// 3. UPDATE CATEGORY HEADINGS
// ==========================================

function updateCategoryName(category) {
  categoryNames.forEach(heading => {
    heading.innerText = category;
  });
}

// ==========================================
// 4. TOGGLE THE ADD BOOKMARK FORM
// ==========================================

function displayOrCloseForm() {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

// ==========================================
// 5. TOGGLE THE BOOKMARK LIST
// ==========================================

function displayOrHideCategory() {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

// ==========================================
// 6. DISPLAY BOOKMARKS FOR A CATEGORY
// ==========================================

function displayBookmarks(category) {
  const bookmarks = getBookmarks();

  const filteredBookmarks = bookmarks.filter(
    bookmark => bookmark.category === category
  );

  // Clear previous results to avoid duplicates.
  categoryList.innerHTML = "";

  if (filteredBookmarks.length === 0) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
    return;
  }

  filteredBookmarks.forEach(bookmark => {
    const bookmarkElement = document.createElement("div");

    const radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.id = bookmark.name;
    radioButton.value = bookmark.name;
    radioButton.name = "bookmark";

    const label = document.createElement("label");
    label.htmlFor = bookmark.name;

    const link = document.createElement("a");
    link.textContent = bookmark.name;
    link.href = bookmark.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    label.appendChild(link);
    bookmarkElement.appendChild(radioButton);
    bookmarkElement.appendChild(label);

    categoryList.appendChild(bookmarkElement);
  });
}

// ==========================================
// 7. OPEN THE ADD BOOKMARK FORM
// ==========================================

addBookmarkButton.addEventListener("click", () => {
  const selectedCategory = categoryDropdown.value;

  updateCategoryName(selectedCategory);

  displayOrCloseForm();
});

// ==========================================
// 8. CLOSE THE ADD BOOKMARK FORM
// ==========================================

closeFormButton.addEventListener("click", () => {
  displayOrCloseForm();
});

// ==========================================
// 9. ADD A NEW BOOKMARK
// ==========================================

addBookmarkButtonForm.addEventListener("click", () => {
  const bookmarks = getBookmarks();

  const newBookmark = {
    name: nameInput.value.trim(),
    category: categoryDropdown.value,
    url: urlInput.value.trim()
  };

  // Do not save empty bookmark fields.
  if (!newBookmark.name || !newBookmark.url) {
    alert("Please enter both a bookmark name and URL.");
    return;
  }

  bookmarks.push(newBookmark);

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  // Reset the input fields.
  nameInput.value = "";
  urlInput.value = "";

  // Return to the main section.
  displayOrCloseForm();
});

// ==========================================
// 10. VIEW A SELECTED CATEGORY
// ==========================================

viewCategoryButton.addEventListener("click", () => {
  const selectedCategory = categoryDropdown.value;

  updateCategoryName(selectedCategory);

  displayBookmarks(selectedCategory);

  displayOrHideCategory();
});

// ==========================================
// 11. CLOSE THE BOOKMARK LIST
// ==========================================

closeListButton.addEventListener("click", () => {
  displayOrHideCategory();
});

// ==========================================
// 12. DELETE A SELECTED BOOKMARK
// ==========================================

deleteBookmarkButton.addEventListener("click", () => {
  const selectedBookmark = document.querySelector(
    'input[name="bookmark"]:checked'
  );

  if (!selectedBookmark) {
    alert("Please select a bookmark to delete.");
    return;
  }

  const selectedName = selectedBookmark.value;
  const selectedCategory = categoryDropdown.value;

  const bookmarks = getBookmarks();

  const bookmarkIndex = bookmarks.findIndex(
    bookmark =>
      bookmark.name === selectedName &&
      bookmark.category === selectedCategory
  );

  if (bookmarkIndex !== -1) {
    bookmarks.splice(bookmarkIndex, 1);

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  // Refresh the displayed list after deletion.
  displayBookmarks(selectedCategory);
});
