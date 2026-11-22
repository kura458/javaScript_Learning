
# Singly Linked List in JavaScript

A beginner-friendly implementation of a singly linked list using JavaScript.

## Overview

A linked list is a linear data structure made up of nodes.
Each node stores an element and a reference to the next node.

Unlike arrays, linked list elements are connected through references.

## Features

- Initialize an empty linked list.
- Check whether a list is empty.
- Add elements to the end of the list.
- Remove the first occurrence of an element.
- Track the number of nodes using a length property.
- Run automated tests.

## Project Structure

```text
06-Linked-List-Implementation/
├── linked-list.js
├── index.js
├── test.js
├── package.json
├── README.md
└── .gitignore
```

## Requirements

- Node.js
- npm

## Installation

Clone the repository and navigate to this folder.

No external dependencies are required.

## Run the Project

```bash
npm start
```

## Run Tests

```bash
npm test
```

## Available Functions

| Function | Description |
|---|---|
| `initList()` | Creates an empty linked list. |
| `isEmpty(list)` | Checks whether the list is empty. |
| `add(list, element)` | Adds an element to the end. |
| `remove(list, element)` | Removes the first matching element. |

## Example

```javascript
const list = initList();

add(list, 42);
add(list, 43);
add(list, 44);

remove(list, 43);
```

Result:

```text
42 → 44 → null
```

## Technologies

- JavaScript
- Node.js
- Git and GitHub

## License

MIT License
