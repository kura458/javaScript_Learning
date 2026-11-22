
const assert = require("node:assert/strict");

const {
  initList,
  isEmpty,
  add,
  remove,
  contains,
  getAt,
  insertAt,
  removeAt,
  clear
} = require("./linked-list");

console.log("Running Linked List Tests...\n");

// Test 1: Initialize list
const list = initList();

assert.equal(list.head, null);
assert.equal(list.length, 0);
assert.equal(isEmpty(list), true);

// Test 2: Add elements
add(list, 10);
add(list, 20);
add(list, 30);

assert.equal(list.length, 3);
assert.equal(isEmpty(list), false);

// Test 3: Remove by element
remove(list, 20);

assert.equal(list.length, 2);
assert.equal(getAt(list, 1), 30);

// Test 4: Contains
assert.equal(contains(list, 10), true);
assert.equal(contains(list, 30), true);
assert.equal(contains(list, 99), false);
assert.equal(contains(initList(), 10), false);

// Test 5: Get at index
assert.equal(getAt(list, 0), 10);
assert.equal(getAt(list, 1), 30);
assert.equal(getAt(list, 2), undefined);
assert.equal(getAt(list, -1), undefined);
assert.equal(getAt(initList(), 0), undefined);

// Test 6: Insert at beginning
insertAt(list, 0, 5);

assert.equal(list.length, 3);
assert.equal(getAt(list, 0), 5);

// Test 7: Insert in middle
insertAt(list, 1, 7);

assert.equal(list.length, 4);
assert.equal(getAt(list, 1), 7);

// Test 8: Insert at end
insertAt(list, list.length, 40);

assert.equal(list.length, 5);
assert.equal(getAt(list, 4), 40);

// Test 9: Insert into empty list
const emptyList = initList();

insertAt(emptyList, 0, 100);

assert.equal(emptyList.length, 1);
assert.equal(getAt(emptyList, 0), 100);

// Test 10: Invalid insertion
const previousLength = list.length;

insertAt(list, -1, 99);
insertAt(list, 100, 99);

assert.equal(list.length, previousLength);
assert.equal(contains(list, 99), false);

// Test 11: Remove at middle
removeAt(list, 2);

assert.equal(list.length, 4);
assert.equal(getAt(list, 2), 30);

// Test 12: Remove first element
removeAt(list, 0);

assert.equal(list.length, 3);
assert.equal(getAt(list, 0), 7);

// Test 13: Remove last element
removeAt(list, list.length - 1);

assert.equal(list.length, 2);

// Test 14: Invalid removal
const lengthBeforeInvalidRemoval = list.length;

removeAt(list, -1);
removeAt(list, 100);

assert.equal(list.length, lengthBeforeInvalidRemoval);

// Test 15: Remove only element
const singleList = initList();

add(singleList, 500);
removeAt(singleList, 0);

assert.equal(singleList.head, null);
assert.equal(singleList.length, 0);

// Test 16: Clear list
clear(list);

assert.equal(list.head, null);
assert.equal(list.length, 0);
assert.equal(isEmpty(list), true);

// Test 17: Reuse cleared list
add(list, 200);
add(list, 300);

assert.equal(list.length, 2);
assert.equal(getAt(list, 0), 200);
assert.equal(getAt(list, 1), 300);

console.log("All linked list tests passed!");
console.log("17 test groups completed successfully.");
