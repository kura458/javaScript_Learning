
# RegexLab – Regular Expression Playground

RegexLab is an interactive JavaScript application that allows users to test regular expressions against text and visually identify matching patterns.

## Features

- Test custom regular expression patterns.
- Support for case-insensitive (`i`) matching.
- Support for global (`g`) matching.
- Highlight matched text.
- Display matching results.
- Show the number of matches.
- Handle invalid regular expressions.
- Responsive design for desktop and mobile devices.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Regular Expressions (RegExp API)

## Project Structure

```text
RegexLab/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

## How to Run

1. Clone or download this repository.
2. Open the RegexLab folder.
3. Open `index.html` in your browser.
4. Enter a regular expression.
5. Enter a test string.
6. Select the desired flags.
7. Click **Run Regex Test**.

## Example

Pattern:

```regex
\d+
```

Test string:

```text
The price is 250 dollars and 30 cents.
```

With the global flag enabled, the results are:

```text
250, 30
```

## Learning Objectives

This project demonstrates:

- DOM manipulation.
- JavaScript event listeners.
- Regular expression construction.
- String matching and replacement.
- Array methods.
- Error handling.
- Safe HTML rendering.

---

Created as part of my JavaScript learning journey.
