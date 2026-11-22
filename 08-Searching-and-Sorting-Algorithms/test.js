
const test = require("node:test");
const assert = require("node:assert/strict");

const searching = require("./src/searching");
const sorting = require("./src/sorting");

const unsorted = [5, 2, 8, 1, 9, 3];
const sorted = [1, 2, 3, 5, 8, 9];
const expected = [1, 2, 3, 5, 8, 9];

test("Linear search finds an element", () => {
  assert.equal(searching.linearSearch(unsorted, 8), 2);
});

test("Linear search returns -1 when absent", () => {
  assert.equal(searching.linearSearch(unsorted, 100), -1);
});

test("Binary search finds an element", () => {
  assert.equal(searching.binarySearch(sorted, 5), 3);
});

test("Binary search handles missing values", () => {
  assert.equal(searching.binarySearch(sorted, 100), -1);
});

test("Binary search rejects unsorted arrays", () => {
  assert.throws(() => searching.binarySearch(unsorted, 5));
});

test("Jump search finds an element", () => {
  assert.equal(searching.jumpSearch(sorted, 8), 4);
});

test("Interpolation search finds an element", () => {
  assert.equal(searching.interpolationSearch(sorted, 5), 3);
});

test("Automatic search selects the appropriate algorithm", () => {
  assert.equal(searching.search(unsorted, 8), 2);
  assert.equal(searching.search(sorted, 8, { sorted: true }), 4);
});

const sortingAlgorithms = [
  ["Bubble Sort", sorting.bubbleSort],
  ["Selection Sort", sorting.selectionSort],
  ["Insertion Sort", sorting.insertionSort],
  ["Merge Sort", sorting.mergeSort],
  ["Quick Sort", sorting.quicksort],
  ["Heap Sort", sorting.heapSort]
];

for (const [name, algorithm] of sortingAlgorithms) {
  test(`${name} sorts numbers correctly`, () => {
    assert.deepEqual(algorithm(unsorted), expected);
  });

  test(`${name} handles duplicates`, () => {
    assert.deepEqual(algorithm([4, 2, 4, 1, 2]), [1, 2, 2, 4, 4]);
  });

  test(`${name} handles an empty array`, () => {
    assert.deepEqual(algorithm([]), []);
  });

  test(`${name} handles an array with one element`, () => {
    assert.deepEqual(algorithm([7]), [7]);
  });

  test(`${name} does not modify the original array`, () => {
    const original = [4, 3, 2, 1];
    const copy = [...original];

    algorithm(original);

    assert.deepEqual(original, copy);
  });
}

test("Automatic sort works for small and large arrays", () => {
  assert.deepEqual(sorting.sort([5, 2, 1]), [1, 2, 5]);

  const large = Array.from({ length: 100 }, (_, i) => 100 - i);
  assert.deepEqual(
    sorting.sort(large),
    Array.from({ length: 100 }, (_, i) => i + 1)
  );
});

test("Unknown sorting algorithm throws an error", () => {
  assert.throws(() => sorting.sort([3, 2, 1], "unknown"));
});

test("Unknown searching algorithm throws an error", () => {
  assert.throws(() => searching.search([1, 2, 3], 2, {
    algorithm: "unknown"
  }));
});

test("Sorting rejects non-numeric values", () => {
  assert.throws(() => sorting.mergeSort([3, "two", 1]));
});
