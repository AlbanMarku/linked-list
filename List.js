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

    insertBetween(data, index) {
        const node = new Node(data);

        if (this.size < index || index < 0) {
            console.log("there aren't that many items. Can't insert.");
        } else if (index === 0) {
            this.insertFirst(data);
        } else {
            let current = this.head;
            let count = 0;
            let previous;

            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }

            node.next = current;
            previous.next = node;
        }
    }

    listLength() {
        console.log(this.size);
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
ll.insertFirst(4);
ll.insertBetween("hi", -1);
ll.printList();
