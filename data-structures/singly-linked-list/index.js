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
        while(current !== null && current.data !== data) {
            current = current.next;
        }
        return current;
    }

    // Insert node after data
    insertAfter(data, search) {
        console.log(`Inserting ${data} after ${search}`);
        let newNode = new Node(data);
        let current = this.head;
        if (current.data == search) {
            let temp = current.next;
            current.next = newNode;
            newNode.next = temp;
            return newNode;
        }

        let found = this.find(search);
        console.log("insertAfter: found: ", found);

        if (null == found) return null;

        let temp = found;
        newNode.next = temp.next;
        found.next = newNode;

        return newNode;

    }

    // Delete at head
    deleteAtHead() {
        let current = this.head;
        if (current == null) return false;
        this.head = current.next;
        current = null;
        return true;
    }

    // Delete node by data value
    deleteByData(data) {
        console.log("DELETE NODE : ", data);
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

        console.log("PREV LINK: ", previous);
        console.log("CURR LINK:", current);
     
        // If previous node exist and data found
        //   then delete
        if (previous != null && current.data == data) {
            previous.next = current.next;
            current = null;
        }


        return false;
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

console.log(Node);

module.exports = SinglyLinkedList;