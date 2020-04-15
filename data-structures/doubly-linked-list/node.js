class Node {
    data = null;
    next = null;
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

module.exports = Node;