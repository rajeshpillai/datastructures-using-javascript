const CircularLinkedList = require(".");
// helper methods
function log(...args) {
    console.log(...args);
}

function runTest() {
  log("Running test for CircularLinkedList...");
  console.log("========================================");
  const linkedList = new CircularLinkedList();
  linkedList.push(1);
  linkedList.push(2);
  linkedList.push(3);
  linkedList.push(4);
  linkedList.insertAtHead(0);
  
  linkedList.traverseForward();
 
  console.log(linkedList);

  console.log("===================DONE");
}

module.exports = runTest;