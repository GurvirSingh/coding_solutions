class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// const n = new Node(100); create an object in javascript

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    InsertFirst(value) {
        this.head = new Node(value, this.head);
        this.size++;
    }

    // Insert the last node
    InsertLast(value) {
        let node = new Node(value);
        let current;

        if(!this.head) {
            this.head = node;
        } else  {
            current = this.head;
            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }
    // Insert at and index
    InsertAtIndex(value, index) {
        if(index > 0 && index > this.size) { 
            return;
        } 

        if(index == 0) { 
            InsertFirst(value);
            return;
        }

        const node = new Node(value);
        let current, previous;

        current = this.head;
        let count = 0;

        while(count < index) { 
            previous = current;
            count++;
            current = current.next;
        }

        node.next = current;
        previous.next = node; 
        this.size++; 
    }

    // Get at index 
    getAt(index) { 
        let current = this.head;
        let count = 0;
        
        while(current) { 
            if(count == index) { 
                console.log(current.value);
            }
            count++;
            current = current.next;
        }

        return null;
    }

    // Remove at index
    RemoveAt(index) {
        if(index > 0 && index > this.size) { 
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        if(index == 0) {
            this.head = current.next;
        } else { 
            while(count < index){ 
                count++;
                previous = current;
                current = current.next;
            }        
            previous.next = current.next;
        }
        this.size--;
    }

    // Clear the list 
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // Print the list 
    printListData() {
        let current = this.head;

        while(current) { 
            console.log(current.value);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.InsertFirst(100);
ll.InsertFirst(200);
ll.InsertFirst(220);
ll.InsertAtIndex(500,2);
ll.InsertLast(700);
// ll.RemoveAt(1);


ll.printListData();
console.log(ll.size);
ll.getAt(2);
ll.clearList();