
const {
  linearSearch,
  binarySearch,
  jumpSearch,
  interpolationSearch,
  search
} = require("./src/searching");

const {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quicksort,
  heapSort,
  sort
} = require("./src/sorting");

console.log("======================================");
console.log(" SEARCHING AND SORTING ALGORITHMS");
console.log("======================================");

// Searching examples
const unsortedNumbers = [40, 10, 30, 20, 50];
const sortedNumbers = [10, 20, 30, 40, 50];

console.log("\n--- SEARCHING ---");

console.log("Linear Search:", linearSearch(unsortedNumbers, 30));
console.log("Binary Search:", binarySearch(sortedNumbers, 30));
console.log("Jump Search:", jumpSearch(sortedNumbers, 40));
console.log("Interpolation Search:", interpolationSearch(sortedNumbers, 50));

// Automatic searching
console.log(
  "Automatic Search:",
  search(sortedNumbers, 20, { sorted: true })
);

// Sorting examples
const numbers = [64, 25, 12, 22, 11, 90, 5];

console.log("\n--- SORTING ---");

console.log("Original:", numbers);
console.log("Bubble Sort:", bubbleSort(numbers));
console.log("Selection Sort:", selectionSort(numbers));
console.log("Insertion Sort:", insertionSort(numbers));
console.log("Merge Sort:", mergeSort(numbers));
console.log("Quick Sort:", quicksort(numbers));
console.log("Heap Sort:", heapSort(numbers));

// Automatic sorting
console.log("\n--- AUTOMATIC ALGORITHM SELECTION ---");

console.log("Automatic Sort:", sort(numbers));
console.log("Automatic Search:", search(sortedNumbers, 40, {
  sorted: true
}));

console.log("\n======================================");
console.log(" DEMONSTRATION COMPLETED");
console.log("======================================");
