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

    pop() {
        let current = this.head;

        if (!current.next) {
            this.head = null;
        } else {
            let previous;

            while (current.next) {
                previous = current;
                current = current.next;
            }

            previous.next = null;
        }
    }

    search(index) {
        if (this.size <= index || index < 0) {
            console.log("there aren't that many items.");
        } else {
            let current = this.head;
            let count = 0;

            while (count < index) {
                current = current.next;
                count++;
            }

            console.log(current.data);
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
ll.pop();
ll.printList();
