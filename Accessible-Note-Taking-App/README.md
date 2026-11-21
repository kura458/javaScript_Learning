# ✍️ NoteSpace – Accessible Note-Taking App

NoteSpace is a simple, responsive, and accessible note-taking application built using HTML, CSS, and JavaScript.

It allows users to edit a note directly in the browser and receive a confirmation message when changes are made.

## ✨ Features

- Editable note card using `contenteditable`.
- Accessible note editor with `aria-label`.
- Screen-reader announcements using `aria-live="polite"`.
- Save confirmation when the note changes.
- Automatically clears the confirmation when editing resumes.
- Prevents unnecessary save notifications when no changes are made.
- Responsive interface for desktop, tablet, and mobile.
- Clean and modern user interface.

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript (ES6)
- DOM Manipulation
- Accessibility (ARIA)

## 📁 Project Structure

```text
Accessible-Note-Taking-App/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/kura458/javaScript_Learning.git
   ```

2. Open the `Accessible-Note-Taking-App` folder.

3. Open `index.html` in your browser.

## 🧪 How to Test

1. Open the application.
2. Click inside the note editor.
3. Change some text.
4. Click outside the editor.
5. Confirm that "Note saved successfully!" appears.
6. Click inside the editor again.
7. Confirm that the status message disappears.
8. Leave the editor without making changes and confirm that no new save notification appears.

## ♿ Accessibility

This project practices important accessibility concepts:

- `contenteditable` makes the note editable.
- `aria-label` gives the editor a descriptive accessible name.
- `aria-live="polite"` announces status updates to screen-reader users.
- `role="status"` identifies the save notification as a status message.

## 🎓 Learning Objectives

- Selecting DOM elements.
- Working with JavaScript variables.
- Using `DOMContentLoaded`.
- Handling `focus` and `blur` events.
- Reading and updating `textContent` and `innerHTML`.
- Using conditional statements and `return`.
- Building accessible interfaces.

## 👨‍💻 Author

**Kura Lemma**

Software Engineering Student | Full-Stack Developer in Progress

GitHub: [@kura458](https://github.com/kura458)

---

Built as part of my JavaScript learning journey with freeCodeCamp.

⭐ If you find this project useful, consider giving the repository a star.
