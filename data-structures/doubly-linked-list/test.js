const DoublyLinkedList = require("./");
// helper methods
function log(...args) {
    console.log(...args);
}

function runTest() {
  log("Running test for DoublyLinkedList...");
  console.log("========================================");
  const linkedList = new DoublyLinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(4);
  linkedList.insertAtHead(-5);
  linkedList.insertAtHead(-6);
  
  linkedList.traverseForward();
  
  let found = linkedList.find(3);
  console.log("found: 3: ", found);

  linkedList.insertAfter(2.5, 2);
  linkedList.traverseForward();

    
  found = linkedList.find(2.5);
  console.log("found: 2.5: ", found.next.data, found.prev.data);
  
  linkedList.insertAfter(11, 2);
  linkedList.traverseForward();
  
  // non existent node
  linkedList.insertAfter(12, 13);
  linkedList.traverseForward();
  
  
  found = linkedList.find(33);
  console.log("found: 33: ", found);
  
  let deletedNode = linkedList.deleteByData(-6);
  console.log("deleted node -6: ", deletedNode);
  linkedList.traverseForward();
  
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
  
  
  
  linkedList.reverseInPlace();
  console.log("Reversed: ");
  linkedList.traverseForward();
  console.log("DONE...");
  console.log("HEAD: ", linkedList.head);
  console.log("TAIL: ", linkedList.tail);
}

module.exports = runTest;