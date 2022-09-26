import Node from "./index.js";

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    printList() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.insertFirst(2);
ll.insertFirst(3);
ll.insertFirst("last");
ll.printList();
