const SinglyLinkedList = require("./");
// helper methods
function log(...args) {
    console.log(...args);
}

function runTest() {
  log("Running test for SinglyLinkedList...");
  console.log("========================================");
  const linkedList = new SinglyLinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(4);
  linkedList.insertAtHead(-5);
  linkedList.insertAtHead(-6);
  
  linkedList.traverseForward();
  
  let found = linkedList.find(3);
  console.log("found: 3: ", found);
  
  found = linkedList.find(33);
  console.log("found: 33: ", found);
  
  let deletedNode = linkedList.deleteByData(-6);
  console.log("deleted node -6: ", deletedNode);
  linkedList.traverseForward();
  console.log("Length: ", linkedList.length);
  
  deletedNode = linkedList.deleteByData(3);
  console.log("deleted node 3: ", deletedNode);
  linkedList.traverseForward();
  
  // non existent node
  deletedNode = linkedList.deleteByData(33);
  console.log("deleted node 33: ", deletedNode);
  linkedList.traverseForward();
  
  deletedNode = linkedList.deleteAtHead();
  console.log("deleted firstNode: -5 ", deletedNode);
  linkedList.traverseForward();
  console.log("Length: ", linkedList.length);
  
  linkedList.insertAfter(9, -5);
  linkedList.traverseForward();
  
  linkedList.insertAfter(11, 2);
  linkedList.traverseForward();
  
  // non existent node
  linkedList.insertAfter(12, 13);
  linkedList.traverseForward();
  
  console.log("Length: ", linkedList.length);

  console.log("Reversed using 1st approach: ");
  linkedList.reverseInPlace();
  console.log("Reversed: ");
  linkedList.traverseForward();

  console.log("Reversed using 2nd approach: ");
  linkedList.reverseInPlace2();
  linkedList.traverseForward();
  console.log("DONE...");
}

module.exports = runTest;