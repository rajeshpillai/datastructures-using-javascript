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
  linkedList.insertAtHead(0);
  
  linkedList.insertAfter(2.5, 2);
  linkedList.traverseForward();
  
  let found = linkedList.find(2.5);
  console.log("found: 2.5: ", found);
  
  
  //linkedList.deleteByData(2);
  //linkedList.traverseForward();

  found = linkedList.find(1);
  console.log("found: 1: ", found);


  found = linkedList.find(3);
  console.log("found: 3: ", found);

  linkedList.deleteAtHead();
  linkedList.traverseForward();
  
  console.log(linkedList);

  console.log("===================DONE");
}

module.exports = runTest;