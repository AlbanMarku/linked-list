import Node from "./index.js";

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    insertLast(data) {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            this.size++;
        }
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
ll.insertLast(4);
ll.printList();
