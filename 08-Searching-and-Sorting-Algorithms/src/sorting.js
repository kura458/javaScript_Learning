
function validateArray(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }

  if (!array.every(Number.isFinite)) {
    throw new TypeError("Sorting requires finite numbers.");
  }
}

// 1. Bubble Sort
function bubbleSort(array) {
  validateArray(array);
  const result = [...array];

  for (let i = 0; i < result.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] =
          [result[j + 1], result[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return result;
}

// 2. Selection Sort
function selectionSort(array) {
  validateArray(array);
  const result = [...array];

  for (let i = 0; i < result.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }

    [result[i], result[minIndex]] =
      [result[minIndex], result[i]];
  }

  return result;
}

// 3. Insertion Sort
function insertionSort(array) {
  validateArray(array);
  const result = [...array];

  for (let i = 1; i < result.length; i++) {
    const current = result[i];
    let j = i - 1;

    while (j >= 0 && result[j] > current) {
      result[j + 1] = result[j];
      j--;
    }

    result[j + 1] = current;
  }

  return result;
}

// 4. Merge Sort
function mergeSort(array) {
  validateArray(array);

  if (array.length <= 1) {
    return [...array];
  }

  const middle = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i), right.slice(j));
}

// 5. Quick Sort
function quicksort(array) {
  validateArray(array);

  if (array.length <= 1) {
    return [...array];
  }

  const pivot = array[Math.floor(array.length / 2)];
  const left = [];
  const equal = [];
  const right = [];

  for (const value of array) {
    if (value < pivot) {
      left.push(value);
    } else if (value > pivot) {
      right.push(value);
    } else {
      equal.push(value);
    }
  }

  return [
    ...quicksort(left),
    ...equal,
    ...quicksort(right)
  ];
}

// 6. Heap Sort
function heapSort(array) {
  validateArray(array);
  const result = [...array];
  const n = result.length;

  function heapify(size, root) {
    let largest = root;
    const left = 2 * root + 1;
    const right = 2 * root + 2;

    if (left < size && result[left] > result[largest]) {
      largest = left;
    }

    if (right < size && result[right] > result[largest]) {
      largest = right;
    }

    if (largest !== root) {
      [result[root], result[largest]] =
        [result[largest], result[root]];

      heapify(size, largest);
    }
  }

  // Build a max heap.
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(n, i);
  }

  // Move the largest element to the end.
  for (let i = n - 1; i > 0; i--) {
    [result[0], result[i]] = [result[i], result[0]];
    heapify(i, 0);
  }

  return result;
}

// Automatically select a sorting algorithm.
function sort(array, algorithm = "auto") {
  validateArray(array);

  if (algorithm === "auto") {
    algorithm = array.length <= 32 ? "insertion" : "merge";
  }

  const algorithms = {
    bubble: bubbleSort,
    selection: selectionSort,
    insertion: insertionSort,
    merge: mergeSort,
    quick: quicksort,
    heap: heapSort
  };

  if (!algorithms[algorithm]) {
    throw new Error(`Unknown sorting algorithm: ${algorithm}`);
  }

  return algorithms[algorithm](array);
}

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quicksort,
  heapSort,
  sort
};
