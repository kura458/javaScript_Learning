
# Markdown Studio – Markdown to HTML Converter

A responsive, browser-based Markdown to HTML converter built with HTML, CSS, and JavaScript.

Markdown Studio allows users to write Markdown and instantly view the generated HTML source and rendered preview.

## Features

- Live Markdown-to-HTML conversion
- Raw HTML source display
- Live rendered HTML preview
- Level 1, 2, and 3 headings
- Bold text using `**text**` or `__text__`
- Italic text using `*text*` or `_text_`
- Image conversion
- Link conversion
- Blockquote conversion
- Nested bold and italic formatting in supported cases
- Responsive desktop and mobile layout
- Character counter

## Technologies

- HTML5
- CSS3
- JavaScript (ES6)
- Regular Expressions

## Project Structure

```text
Markdown-to-HTML-Converter/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/kura458/javaScript_Learning.git
   ```

2. Open the project folder:

   ```bash
   cd javaScript_Learning/Markdown-to-HTML-Converter
   ```

3. Open `index.html` in your browser.

No additional dependencies or installation are required.

## Supported Markdown

| Markdown | Generated HTML |
|---|---|
| `# Heading 1` | `<h1>Heading 1</h1>` |
| `## Heading 2` | `<h2>Heading 2</h2>` |
| `### Heading 3` | `<h3>Heading 3</h3>` |
| `**Bold text**` | `<strong>Bold text</strong>` |
| `__Bold text__` | `<strong>Bold text</strong>` |
| `*Italic text*` | `<em>Italic text</em>` |
| `_Italic text_` | `<em>Italic text</em>` |
| `![Alt](image.jpg)` | `<img alt="Alt" src="image.jpg">` |
| `[Google](https://google.com)` | `<a href="https://google.com">Google</a>` |
| `> Quote` | `<blockquote>Quote</blockquote>` |

## Learning Objectives

This project demonstrates:

- JavaScript functions
- Regular expressions
- String manipulation
- DOM selection and manipulation
- Event listeners
- The `input` event
- Dynamic HTML rendering
- Responsive web design

## Author

Software Engineering Student | Web Developer in Progress

## License

This project is open source and available for educational purposes.
