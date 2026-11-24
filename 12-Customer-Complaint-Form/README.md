
# Customer Complaint Form

A responsive customer complaint form built with HTML, CSS, and vanilla JavaScript. The application validates customer information, order details, complaint reasons, and preferred solutions before accepting a submission.

## Features

- Clean, modern, responsive user interface.
- Customer information validation.
- Email format validation.
- Order number validation.
- Product code validation.
- Positive integer quantity validation.
- Complaint checkbox group validation.
- Preferred solution radio group validation.
- Conditional descriptions for Other options.
- Real-time field validation on change.
- Green and red validation borders.
- Submission feedback messages.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Regular Expressions
- DOM Manipulation
- Form Validation

## Validation Rules

| Field | Requirement |
|---|---|
| Full Name | Cannot be empty |
| Email | Must be a valid email address |
| Order Number | 10 digits starting with 2024 |
| Product Code | XX##-X###-XX# |
| Quantity | Positive integer |
| Complaint Reason | At least one checkbox selected |
| Complaint Description | At least 20 characters when Other is selected |
| Desired Solution | At least one radio option selected |
| Solution Description | At least 20 characters when Other is selected |

## Project Structure

```text
12-Customer-Complaint-Form/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## How to Run

1. Clone or download the repository.
2. Open the `12-Customer-Complaint-Form` folder.
3. Open `index.html` in your browser.
4. Complete the complaint form and test the validation.

## Learning Objectives

This project demonstrates:

- JavaScript form validation.
- Functions and objects.
- Regular expressions.
- Array methods such as `some()` and `every()`.
- DOM selection and event listeners.
- Conditional validation.
- User feedback and error handling.

## Author

Software Engineering Student | Web Developer in Progress

## License

This project is created for educational and learning purposes.
