const Node = require("./node");

class DoublyLinkedList {
    head = null;
    tail = null;

    constructor() {

    }

    // add / push data to the end of list
    append(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        } else { //todo
            let temp = this.tail;
            temp.next = newNode;
            newNode.prev = temp;
            this.tail = newNode;
        }
    }

    // add  data to the beginning of list (unshift)
    insertAtHead(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let temp = this.head;
            newNode.next = temp;
            temp.prev = newNode;
            this.head = newNode;
        }
    }

   

    // Insert node after data
    insertAfter(data, search) {
        let newNode = new Node(data);
        let current = this.head;
        if (current.data == search) {
            // let temp = current.next;
            // current.next = newNode;
            // newNode.next = temp;
            // newNode.prev = current;
            this.insertAtHead(data);
            return newNode;
        }

        let found = this.find(search);

        if (null == found) return null;

        let temp = found;
        newNode.next = temp.next;
        found.next = newNode;
        newNode.prev = found;
        return newNode;

    }

    // Delete at head (or shift )
    deleteAtHead() {
        let current = this.head;
        if (current == null) return undefined;
        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = current.next;
            this.head.prev = null;
            current = null;
        }
        return true;
    }

    // Delete node by data value
    deleteByData(data) {
        if (null == data) return false;
        let current = this.head;
        
        if (current.data == data) {
            this.head = current.next;
            return true;
        }

        let previous = null;
        while(current.next != null) {
            previous = current;
            current = current.next;
            if (current.data == data) {
                break;
            }
        }

        // If previous node exist and data found
        //   then delete
        if (previous != null && current.data == data) {
            previous.next = current.next;
            // reset prev
            current.next.prev = previous.next;
            current = null;
            return true;
        }

        return false;
    }

     // Find node by data value
     find(data) {
        let current = this.head;
        while(current !== null && current.data !== data) {
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

    // inplace reversal
    reverseInPlace() {
        let current = this.head;
        let prev = null;
        let next = null;
        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}

module.exports = DoublyLinkedList;