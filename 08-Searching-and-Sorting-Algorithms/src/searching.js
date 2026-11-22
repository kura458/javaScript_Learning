
function validateArray(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }
}

function isSorted(array) {
  return array.every((value, index) =>
    index === 0 || array[index - 1] <= value
  );
}

// 1. Linear Search: works with sorted or unsorted arrays.
function linearSearch(array, target) {
  validateArray(array);

  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;
}

// 2. Binary Search: requires a sorted array.
function binarySearch(array, target) {
  validateArray(array);

  if (!isSorted(array)) {
    throw new Error("Binary search requires a sorted array.");
  }

  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (array[mid] === target) {
      return mid;
    }

    if (array[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

// 3. Jump Search: requires a sorted array.
function jumpSearch(array, target) {
  validateArray(array);

  if (!isSorted(array)) {
    throw new Error("Jump search requires a sorted array.");
  }

  const n = array.length;

  if (n === 0) return -1;

  const step = Math.floor(Math.sqrt(n));
  let start = 0;
  let end = step;

  while (start < n && array[Math.min(end, n) - 1] < target) {
    start = end;
    end += step;

    if (start >= n) return -1;
  }

  for (let i = start; i < Math.min(end, n); i++) {
    if (array[i] === target) return i;
    if (array[i] > target) return -1;
  }

  return -1;
}

// 4. Interpolation Search: sorted numeric arrays.
function interpolationSearch(array, target) {
  validateArray(array);

  if (!isSorted(array)) {
    throw new Error("Interpolation search requires a sorted array.");
  }

  if (!Number.isFinite(target) ||
      !array.every(Number.isFinite)) {
    throw new TypeError("Interpolation search requires finite numbers.");
  }

  let low = 0;
  let high = array.length - 1;

  while (
    low <= high &&
    target >= array[low] &&
    target <= array[high]
  ) {
    if (array[low] === array[high]) {
      return array[low] === target ? low : -1;
    }

    const position = low + Math.floor(
      ((target - array[low]) * (high - low)) /
      (array[high] - array[low])
    );

    if (array[position] === target) return position;

    if (array[position] < target) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }

  return -1;
}

// Automatically select an appropriate searching algorithm.
function search(array, target, { algorithm = "auto", sorted = false } = {}) {
  validateArray(array);

  if (algorithm === "auto") {
    algorithm = sorted ? "binary" : "linear";
  }

  const algorithms = {
    linear: linearSearch,
    binary: binarySearch,
    jump: jumpSearch,
    interpolation: interpolationSearch
  };

  if (!algorithms[algorithm]) {
    throw new Error(`Unknown searching algorithm: ${algorithm}`);
  }

  return algorithms[algorithm](array, target);
}

module.exports = {
  linearSearch,
  binarySearch,
  jumpSearch,
  interpolationSearch,
  search
};
