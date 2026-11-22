
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

const myList = initList();

console.log("=== LINKED LIST DEMONSTRATION ===");

// Add elements
add(myList, 10);
add(myList, 20);
add(myList, 30);
add(myList, 40);

console.log("\n1. Initial list:");
console.log(JSON.stringify(myList, null, 2));

// Check whether the list is empty
console.log("\n2. Is the list empty?", isEmpty(myList));

// Search for elements
console.log("\n3. Contains 20:", contains(myList, 20));
console.log("Contains 99:", contains(myList, 99));

// Access elements
console.log("\n4. Element at index 2:", getAt(myList, 2));

// Insert an element
insertAt(myList, 2, 25);

console.log("\n5. After inserting 25 at index 2:");
console.log(JSON.stringify(myList, null, 2));

// Remove by element value
remove(myList, 30);

console.log("\n6. After removing element 30:");
console.log(JSON.stringify(myList, null, 2));

// Remove by index
removeAt(myList, 0);

console.log("\n7. After removing index 0:");
console.log(JSON.stringify(myList, null, 2));

// Clear the list
clear(myList);

console.log("\n8. After clearing the list:");
console.log(JSON.stringify(myList, null, 2));

console.log("\n9. Is the list empty?", isEmpty(myList));
