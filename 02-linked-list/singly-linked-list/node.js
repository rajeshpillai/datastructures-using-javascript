class Node {
    data = null;
    next = null;
    constructor(data, next_node = null) {
        this.data = data;
        this.next = next_node;  // For recursive insert
    }
}

module.exports = Node;