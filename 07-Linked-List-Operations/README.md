
# Linked List Operations in JavaScript

A singly linked list implementation using JavaScript.
This project demonstrates fundamental data structure operations,
including insertion, deletion, searching, and accessing elements.

## Features

- Initialize an empty linked list.
- Check whether the list is empty.
- Add elements to the end.
- Remove an element by value.
- Search for an element using `contains()`.
- Retrieve an element using `getAt()`.
- Insert elements at any valid index using `insertAt()`.
- Remove elements by index using `removeAt()`.
- Clear all nodes using `clear()`.
- Reuse the list after clearing it.
- Automated tests using Node.js assertions.

## Project Structure

```text
07-Linked-List-Operations/
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

No external dependencies are required.

## Installation

Navigate to the project directory.

```bash
cd 07-Linked-List-Operations
```

## Run the Demonstration

```bash
npm start
```

## Run Automated Tests

```bash
npm test
```

## Available Operations

| Function | Description |
|---|---|
| `initList()` | Initializes an empty list. |
| `isEmpty(list)` | Checks whether the list is empty. |
| `add(list, element)` | Adds an element to the end. |
| `remove(list, element)` | Removes the first matching element. |
| `contains(list, element)` | Searches for an element. |
| `getAt(list, index)` | Retrieves an element by index. |
| `insertAt(list, index, element)` | Inserts an element at an index. |
| `removeAt(list, index)` | Removes an element by index. |
| `clear(list)` | Removes all elements. |

## Example

```javascript
const list = initList();

add(list, 10);
add(list, 20);
add(list, 30);

insertAt(list, 1, 15);
removeAt(list, 2);

console.log(getAt(list, 0)); // 10
console.log(contains(list, 15)); // true
```

Result:

```text
10 → 15 → 30 → null
```

## Time Complexity

| Operation | Time Complexity |
|---|---|
| `initList()` | O(1) |
| `isEmpty()` | O(1) |
| `add()` | O(n) |
| `remove()` | O(n) |
| `contains()` | O(n) |
| `getAt()` | O(n) |
| `insertAt()` | O(n) |
| `removeAt()` | O(n) |
| `clear()` | O(1) |

## Technologies

- JavaScript
- Node.js
- Git
- GitHub

## License

MIT License
