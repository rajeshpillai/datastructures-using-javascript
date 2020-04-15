const SinglyLinkedList = require("./data-structures/singly-linked-list");
console.clear();

// helper methods
function log(...args) {
    console.log(...args);
}

log(SinglyLinkedList);

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.prepend(5);
linkedList.prepend(6);

linkedList.traverseForward();

let found = linkedList.find(3);
console.log("found: 3: ", found);


