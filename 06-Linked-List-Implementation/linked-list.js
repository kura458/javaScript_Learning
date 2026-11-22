
/**
 * Initializes an empty singly linked list.
 * @returns {{head: object|null, length: number}}
 */
function initList() {
  return {
    head: null,
    length: 0
  };
}

/**
 * Checks whether a linked list is empty.
 * @param {object} list - The linked list.
 * @returns {boolean}
 */
function isEmpty(list) {
  return list.length === 0;
}

/**
 * Adds an element to the end of the linked list.
 * @param {object} list - The linked list.
 * @param {*} element - The element to add.
 */
function add(list, element) {
  const node = {
    element: element,
    next: null
  };

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
 * @param {object} list - The linked list.
 * @param {*} element - The element to remove.
 * @returns {boolean} True if removed, otherwise false.
 */
function remove(list, element) {
  let previous = null;
  let current = list.head;

  while (current !== null && current.element !== element) {
    previous = current;
    current = current.next;
  }

  if (current === null) {
    return false;
  }

  if (previous !== null) {
    previous.next = current.next;
  } else {
    list.head = current.next;
  }

  list.length--;

  return true;
}

// Export functions for use in other files.
module.exports = {
  initList,
  isEmpty,
  add,
  remove
};
