const Node = require("./node");

class SinglyLinkedList {
    head = null;

    constructor() {

    }

    // add  data to the end of list
    append(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.head.next = null;
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }  
            current.next = newNode;
        }
    }

    // add  data to the end of list
    prepend(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.head.next = null;
        } else {
            let current = this.head;
            newNode.next = current;
            this.head = newNode;
        }
    }

    // Find node by data value
    find(data) {
        let current = this.head;
        while(current.next !== null || current.data === data) {
            current = current.next;
        }
        return current;
    }

    // Traverse linked list from head to end of list
    traverseForward() {
        let current = this.head;
        while(current != null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

console.log(Node);

module.exports = SinglyLinkedList;