
# 🔖 Bookmark Manager

A responsive bookmark management application built with HTML, CSS, and JavaScript.

Organize your favorite websites into categories, save them in your browser, and access them whenever you need them.

## Features

- Add bookmarks with a name and URL.
- Organize bookmarks into four categories.
- View bookmarks by category.
- Delete selected bookmarks.
- Store bookmarks using browser Local Storage.
- Preserve bookmarks after refreshing the page.
- Responsive design for desktop and mobile.
- Validate stored bookmark data.

## Categories

- News
- Entertainment
- Work
- Miscellaneous

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- DOM Manipulation
- Browser Local Storage
- Event Listeners

## Project Structure

```text
07-Bookmark-Manager/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## How to Run

1. Clone or download the repository.
2. Open the `07-Bookmark-Manager` folder.
3. Open `index.html` in your browser.
4. Select a category.
5. Add, view, and delete bookmarks.

No additional installation is required.

## Data Storage

Bookmarks are stored in the browser's Local Storage under the key:

```javascript
localStorage.getItem("bookmarks");
```

Each bookmark has three properties:

```javascript
{
  name: "freeCodeCamp",
  category: "work",
  url: "https://www.freecodecamp.org/"
}
```

## Learning Objectives

This project demonstrates:

- Working with Local Storage.
- Reading and writing JSON data.
- JavaScript functions.
- Array methods such as `filter()` and `findIndex()`.
- DOM manipulation.
- Event handling.
- Conditional rendering.
- Input validation.

## Author

**Kura Lemma**

Software Engineering Student | Full-Stack Developer in Progress

GitHub: https://github.com/kura458
