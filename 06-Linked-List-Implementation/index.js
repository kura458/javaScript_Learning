
const {
  initList,
  isEmpty,
  add,
  remove
} = require("./linked-list");

// Initialize a linked list
const myList = initList();

console.log("Is the list empty?", isEmpty(myList));

// Add elements
add(myList, 42);
add(myList, 43);
add(myList, 44);

console.log("\nAfter adding elements:");
console.log(JSON.stringify(myList, null, 2));

console.log("\nIs the list empty?", isEmpty(myList));

// Remove an element
const removed = remove(myList, 43);

console.log("\nWas element 43 removed?", removed);

console.log("\nUpdated linked list:");
console.log(JSON.stringify(myList, null, 2));

console.log("\nFinal list length:", myList.length);
