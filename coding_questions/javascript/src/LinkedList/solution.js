const { Node } = require("./Node");

class LinkedList {
    constructor(){
        this.size = 0;
        this.head = null;
        this.tail = null;
        this.getHead.bind(this);
        this.getTail.bind(this);
        this.addToHead.bind(this);
        this.addToTail.bind(this);
        this.print.bind(this);
        this.listSize.bind(this);
        this.reverse.bind(this);
        this.addToIndex.bind(this);
        this.deleteAtIndex.bind(this);
    }

    getHead(){
        return this.head;
    }

    getTail(){
        return this.tail;
    }

    reverse(){
        if(this.listSize() <= 1) return;

        let curr = this.head;
        let prev = null;
        let next = null;
        while(curr != null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.tail = this.head;
        this.head = prev;
    }

    addToIndex(index, node){
        if (node == null || index == null)
            return;

        if (index <= 0) {
            this.addToHead(node);
        } else if (index >= this.listSize()) {
            this.addToTail(node);
        } else {
            let curr = this.head;
            let counter = 0;
            while (curr != null) {
                if (counter + 1 == index) {
                    node.next = curr.next;
                    curr.next = node;
                    this.size++;
                    break;
                }

                curr = curr.next;
                counter++;
            }
        }
    }

    deleteAtIndex(index){
        if (index < 0 || index >= this.listSize()) {
            return null;
        }

        let curr = this.head;

        if (index == 0) {
            let temp = curr;
            this.head = curr.next;
            curr = null;
            this.size--;
            return temp;
        }

        let counter = 0;
        while (curr != null) {
            if (counter + 1 == index) {
                let temp = curr.next;
                curr.next = curr.next.next;
                if(counter + 1 == this.listSize() - 1){
                    this.tail = curr;
                }
                this.size--;
                return temp;
            }

            curr = curr.next;

            counter++;
        }

        return null;
    }

    isEmpty(){
        return this.listSize() == 0; 
    }

    listSize(){
        return this.size;
    }

    print(){
        let curr = this.head;

        while(curr != null){
            console.log(curr.val);
            curr = curr.next;
        }
    }

    addToHead(node){
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            let curr = this.head;
            node.next = curr;
            this.head = node;
        }
        this.size++;
    }

    addToTail(node){
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            let curr = this.tail;
            curr.next = node;
            node.next = null;
            this.tail = node;
        }
        this.size++;
    }

    toArray(){
        let array = [];

        let curr = this.head;
        while(curr != null){
            array.push(curr);
            curr = curr.next;
        }

        return array;
    }
}

module.exports = LinkedList;