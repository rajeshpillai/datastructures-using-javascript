const Node = require("./node");

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
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
        this.length ++;
    }

    // add  data to the beginning of list
    insertAtHead(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.head.next = null;
        } else {
            let current = this.head;
            newNode.next = current;
            this.head = newNode;
        }
        this.length ++;
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

        this.length ++;

        return newNode;

    }

    // Insert using recursion
    insertRecursion(data, index) {
        if (index >= this.length) {
            console.log("Index out of bounds.");
            return;
        }
        console.log(`Insert using recursion...`);
        this.head = this.#insertRec(data, index, this.head);
    }

    // Private method
    #insertRec(data, index, node) {
        console.log(`Index ${index}...`);
        if (index == 0) {
            const temp = new Node(data, node);
            this.length++;
            return temp;
        }            
        node.next = this.#insertRec(data, --index, node.next);
        return node;
    }

    // Delete at head
    deleteAtHead() {
        let current = this.head;
        if (current == null) return false;
        this.head = current.next;
        current = null;

        this.length--;
        return true;
    }

    // Delete node by data value
    deleteByData(data) {
        console.log("DELETE NODE : ", data);
        if (null == data) return false;
        let current = this.head;
        
        if (current.data == data) {
            this.head = current.next;
            this.length--;
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
            this.length--;
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
        if (!current.next) return currrent;
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

    // Approach 2
    reverseInPlace2() {
        let first = this.head;
        if (!first.next) return first;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
    }

    // My approach: todo
    reverseInPlace3() {
        let start = this.head;
        let next = start.next;
        while(next) {
            let nextNext = next.next;
            next.next = start;
            start = next;
            next = nextNext;
        }
        this.head.next = null;
        this.head = start;    
        // console.log(JSON.stringify(this.head, null, 2));
    }

    // todo
    reverseUsingRecursion() {
        this.#reverseR(this.head);
    }

    #reverseR(current) {
        let q = null;
        if (current.next == null) {
            this.head = current;
            return;
        } 
        this.#reverseR(current.next);
        q = current.next;
        q.next = current;
        current.next = null;
    }

    /*
    - Input: a list of sortable items A.
    - Let n be the length of A.
    - Iterate through the list, starting from the first element:
        --  Find the index of the minimum value in the remaining unsorted portion of the list, by comparing each element to the current minimum.
        -- Swap the current element with the minimum value, if the minimum value is not already in its sorted position.
    - Repeat the previous step for each subsequent unsorted element, until the entire list is sorted in ascending order.
    - Output: the sorted list.
    */

    selectionSortDataSwapping() {
        let current = this.head;
        
        while(current) {
            let min = current;
            let next = current.next;
            while(next) {
                if (next.data < min.data) {
                    min = next;
                }
                next = next.next;
            }
            // Swap 
            let temp = current.data;
            current.data = min.data;
            min.data = temp;
            current = current.next;
        }
    }
}

module.exports = SinglyLinkedList;