
# SpamGuard – Smart Message Checker

SpamGuard is a responsive, browser-based spam detection application built with HTML, CSS, and JavaScript.

It analyzes messages using JavaScript regular expressions to identify suspicious phrases, money-related spam, and common character substitutions.

## Features

- Detects suspicious phrases such as "please help" and "assist me".
- Detects dollar amounts and place values.
- Recognizes number substitutions such as `fr33 m0n3y`.
- Detects modified phrases such as `570ck al3r7`.
- Supports whole-word matching.
- Displays clear scan results.
- Includes a live character counter.
- Responsive design for desktop and mobile.
- No backend or installation required.

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- Regular Expressions

## Project Structure

```text
SpamGuard/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## How to Run

1. Clone or download this repository.
2. Open the `SpamGuard` folder.
3. Open `index.html` in your browser.
4. Enter a message and click **Scan message**.

## Learning Objectives

This project demonstrates:

- DOM manipulation
- Event listeners
- JavaScript functions
- Arrays and the `some()` method
- Regular expressions
- Character classes and quantifiers
- Capturing and non-capturing groups
- Regex anchors and whitespace matching

## Disclaimer

SpamGuard is an educational pattern-based detector. It cannot guarantee that a message is safe or identify every possible spam message.

---

Created as part of my JavaScript learning journey.
