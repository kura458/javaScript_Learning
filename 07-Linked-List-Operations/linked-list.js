
/**
 * Singly Linked List Implementation
 * Supports insertion, deletion, searching, and traversal.
 */

/**
 * Creates an empty linked list.
 * @returns {{head: object|null, length: number}}
 */
function initList() {
  return {
    head: null,
    length: 0
  };
}

/**
 * Checks whether the list is empty.
 * @param {object} list
 * @returns {boolean}
 */
function isEmpty(list) {
  return list.length === 0;
}

/**
 * Adds an element to the end of the list.
 * @param {object} list
 * @param {*} element
 */
function add(list, element) {
  const node = { element, next: null };

  if (isEmpty(list)) {
    list.head = node;
  } else {
    let current = list.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = node;
  }

  list.length++;
}

/**
 * Removes the first occurrence of an element.
 * @param {object} list
 * @param {*} element
 */
function remove(list, element) {
  let previous = null;
  let current = list.head;

  while (current !== null && current.element !== element) {
    previous = current;
    current = current.next;
  }

  if (current === null) return;

  if (previous !== null) {
    previous.next = current.next;
  } else {
    list.head = current.next;
  }

  list.length--;
}

/**
 * Checks whether an element exists in the list.
 * @param {object} list
 * @param {*} element
 * @returns {boolean}
 */
function contains(list, element) {
  let current = list.head;

  while (current !== null) {
    if (current.element === element) {
      return true;
    }

    current = current.next;
  }

  return false;
}

/**
 * Returns the element at a specified index.
 * @param {object} list
 * @param {number} index
 * @returns {*|undefined}
 */
function getAt(list, index) {
  if (!Number.isInteger(index) || index < 0 || index >= list.length) {
    return undefined;
  }

  let current = list.head;
  let currentIndex = 0;

  while (currentIndex < index) {
    current = current.next;
    currentIndex++;
  }

  return current.element;
}

/**
 * Inserts an element at a specified index.
 * @param {object} list
 * @param {number} index
 * @param {*} element
 */
function insertAt(list, index, element) {
  if (!Number.isInteger(index) || index < 0 || index > list.length) {
    return;
  }

  const node = {
    element,
    next: null
  };

  if (index === 0) {
    node.next = list.head;
    list.head = node;
  } else {
    let current = list.head;
    let currentIndex = 0;

    while (currentIndex < index - 1) {
      current = current.next;
      currentIndex++;
    }

    node.next = current.next;
    current.next = node;
  }

  list.length++;
}

/**
 * Removes the node at a specified index.
 * @param {object} list
 * @param {number} index
 */
function removeAt(list, index) {
  if (!Number.isInteger(index) || index < 0 || index >= list.length) {
    return;
  }

  if (index === 0) {
    list.head = list.head.next;
  } else {
    let current = list.head;
    let currentIndex = 0;

    while (currentIndex < index - 1) {
      current = current.next;
      currentIndex++;
    }

    current.next = current.next.next;
  }

  list.length--;
}

/**
 * Removes all nodes and resets the list.
 * @param {object} list
 */
function clear(list) {
  list.head = null;
  list.length = 0;
}

// Export functions for use in other files.
module.exports = {
  initList,
  isEmpty,
  add,
  remove,
  contains,
  getAt,
  insertAt,
  removeAt,
  clear
};
