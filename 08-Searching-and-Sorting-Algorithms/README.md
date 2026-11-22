
# Searching and Sorting Algorithms in JavaScript

A professional JavaScript project implementing common searching and sorting algorithms from scratch.

The project includes reusable functions, automatic algorithm selection, examples, and automated tests using Node.js.

## Features

### Searching
- Linear Search
- Binary Search
- Jump Search
- Interpolation Search
- Automatic Search Selection

### Sorting
- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Heap Sort
- Automatic Sorting Selection

## Project Structure

```text
08-Searching-and-Sorting-Algorithms/
│
├── src/
│   ├── searching.js
│   └── sorting.js
│
├── examples/
│
├── index.js
├── test.js
├── package.json
├── README.md
└── .gitignore
```

## Requirements

- Node.js 24 or later
- npm
- Git

No external dependencies are required.

## Installation

```bash
npm install
```

## Run the Demonstration

```bash
npm start
```

## Run Automated Tests

```bash
npm test
```

## Usage

### Searching

```javascript
const {
  linearSearch,
  binarySearch,
  search
} = require("./src/searching");

const numbers = [10, 20, 30, 40, 50];

console.log(linearSearch(numbers, 30));
// 2

console.log(binarySearch(numbers, 40));
// 3

console.log(search(numbers, 20, { sorted: true }));
// 1
```

### Sorting

```javascript
const {
  bubbleSort,
  mergeSort,
  quicksort,
  sort
} = require("./src/sorting");

const numbers = [5, 3, 8, 1, 2];

console.log(bubbleSort(numbers));
// [1, 2, 3, 5, 8]

console.log(mergeSort(numbers));
// [1, 2, 3, 5, 8]

console.log(quicksort(numbers));
// [1, 2, 3, 5, 8]

console.log(sort(numbers));
// [1, 2, 3, 5, 8]
```

## Choosing the Right Algorithm

| Situation | Recommended Algorithm |
|---|---|
| Unsorted array search | Linear Search |
| Sorted array search | Binary Search |
| Sorted array with block searching | Jump Search |
| Uniformly distributed sorted numbers | Interpolation Search |
| Small or nearly sorted array | Insertion Sort |
| General-purpose reliable sorting | Merge Sort |
| Fast average-case sorting | Quick Sort |
| Guaranteed O(n log n) sorting | Heap Sort |

## Time Complexity

### Searching

| Algorithm | Average | Worst |
|---|---:|---:|
| Linear Search | O(n) | O(n) |
| Binary Search | O(log n) | O(log n) |
| Jump Search | O(√n) | O(√n) |
| Interpolation Search | O(log log n) | O(n) |

### Sorting

| Algorithm | Average | Worst |
|---|---:|---:|
| Bubble Sort | O(n²) | O(n²) |
| Selection Sort | O(n²) | O(n²) |
| Insertion Sort | O(n²) | O(n²) |
| Merge Sort | O(n log n) | O(n log n) |
| Quick Sort | O(n log n) | O(n²) |
| Heap Sort | O(n log n) | O(n log n) |

## Automatic Algorithm Selection

The `search()` function selects:
- Linear Search for unsorted arrays.
- Binary Search when the caller specifies that the array is sorted.

The `sort()` function selects:
- Insertion Sort for arrays containing up to 32 elements.
- Merge Sort for larger arrays.

These are practical defaults, not universal performance guarantees. The best choice can depend on the data and workload.

## Important Notes

- Binary Search, Jump Search, and Interpolation Search require sorted arrays.
- Interpolation Search is intended for finite numeric values.
- Sorting functions return new arrays and preserve the original input.
- The project implements the algorithms without relying on the built-in `.sort()` method.
- Duplicate values are preserved.

## Technologies

- JavaScript
- Node.js
- Git
- GitHub
- Node.js Test Runner

## License

MIT
