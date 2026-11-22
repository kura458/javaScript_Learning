
const assert = require("node:assert/strict");

const {
  initList,
  isEmpty,
  add,
  remove
} = require("./linked-list");

// Test 1: Initialize an empty list
const list = initList();

assert.equal(list.head, null);
assert.equal(list.length, 0);
assert.equal(isEmpty(list), true);

// Test 2: Add elements
add(list, 42);
add(list, 43);
add(list, 44);

assert.equal(list.length, 3);
assert.equal(isEmpty(list), false);

// Test 3: Check element order
assert.equal(list.head.element, 42);
assert.equal(list.head.next.element, 43);
assert.equal(list.head.next.next.element, 44);

// Test 4: Remove a middle element
assert.equal(remove(list, 43), true);
assert.equal(list.length, 2);
assert.equal(list.head.next.element, 44);

// Test 5: Remove the first element
assert.equal(remove(list, 42), true);
assert.equal(list.length, 1);
assert.equal(list.head.element, 44);

// Test 6: Remove the last element
assert.equal(remove(list, 44), true);
assert.equal(list.length, 0);
assert.equal(list.head, null);
assert.equal(isEmpty(list), true);

// Test 7: Remove an element that doesn't exist
assert.equal(remove(list, 100), false);
assert.equal(list.length, 0);

console.log("All linked list tests passed!");
