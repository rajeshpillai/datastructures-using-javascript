const CircularLinkedList = require(".");
// helper methods
function log(...args) {
    console.log(...args);
}

function runTest() {
  log("Running test for CircularLinkedList...");
  console.log("========================================");
  const linkedList = new CircularLinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(4);
  linkedList.insertAtHead(0);
  
  linkedList.traverseForward();
 
  console.log(linkedList);

  console.log("===================DONE");
}

module.exports = runTest;