package LinkedList;

import LinkedList.Node.*;

public class LinkedList {
    public Node head = null;
    public Node tail = null;
    public int size = 0;

    public static void main(String[] args) {
        LinkedList list = new LinkedList();
        list.addToHead(new Node(5)); // 5
        list.addToHead(new Node(4)); // 4 5
        list.addToTail(new Node(7)); // 4 5 7
        list.addToTail(new Node(6)); // 4 5 7 6
        list.addToHead(new Node(-1)); // -1 4 5 7 6
        list.addAtIndex(0, new Node(0)); // 0 -1 4 5 7 6
        list.addAtIndex(3, new Node(0)); // 0 -1 4 0 5 7 6
        list.addAtIndex(10, new Node(0)); // 0 -1 4 0 5 7 6 0, size = 8
        list.print();
        System.out.println("Current size is " + list.size());
        System.out.println("Deleted node value is " + list.deleteAtIndex(3).val); // 0 -1 4 5 7 6 0
        System.out.println("Deleted node value is " + list.deleteAtIndex(5).val); // 0 -1 4 5 7 0
        System.out.println("Deleted node value is " + list.deleteAtIndex(0).val); // -1 4 5 7 0
        System.out.println("Deleted node value is " + list.deleteAtIndex(list.size() - 1).val); //  -1 4 5 7
        System.out.println(list.getHead().val); // -1 
        System.out.println(list.getTail().val); // 7
        System.out.println("-----AFTER DELETION-----");
        System.out.println(String.format("New size is %d", list.size()));
        list.print();
        System.out.println("-----AFTER REVERSAL-----");
        list.reverse();
        list.print();
        System.out.println("-----NEW HEAD AND TAIL-----");
        System.out.println(list.getHead().val);
        System.out.println(list.getTail().val);

        // ---- NEW LIST 

        LinkedList newList = new LinkedList();
        for(int i = 0; i < 10; i++){
            newList.addToTail(new Node(i));
        }
        System.out.println("-----BEFORE REVERSAL-----");
        newList.print();
        System.out.println("-----AFTER REVERSAL-----");
        newList.reverse();
        newList.print();
    }

    /**
     * O(1) Return the head node
     * 
     * @return Node
     */
    public Node getHead() {
        return this.head;
    }

    /**
     * O(1) Return the tail node
     * 
     * @return
     */
    public Node getTail() {
        return this.tail;
    }

    /**
     * O(1) Add a node to the beginning of the list If the list is empty, the node
     * will be both the head and tail
     * 
     * @param node
     */
    public void addToHead(Node node) {
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            Node curr = this.head;
            node.next = curr;
            this.head = node;
        }
        size++;
    }

    /**
     * O(1) Add a node to the end of the list If the list is empty, the node will be
     * both the head and tail
     * 
     * @param node
     */
    public void addToTail(Node node) {
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            Node curr = this.tail;
            node.next = null;
            curr.next = node;
            this.tail = node;
        }
        size++;
    }

    /**
     * Add a node at a given index Add to tail if the given index is larger than
     * size of the list Add to head if the given index is less than 0
     * 
     * @param index, node
     */
    public void addAtIndex(int index, Node node) {
        if (node == null)
            return;

        if (index <= 0) {
            System.out.println("Added to head");
            this.addToHead(node);
        } else if (index >= this.size()) {
            System.out.println("Added to tail");
            this.addToTail(node);
        } else {
            Node curr = this.head;
            int counter = 0;
            while (curr != null) {
                if (counter + 1 == index) {
                    node.next = curr.next;
                    curr.next = node;
                    size++;
                    break;
                }

                curr = curr.next;
                counter++;
            }
        }
    }

    /**
     * Delete a node at a given index If index is less than 0, return null 
     * If index is more than list' size, return null 
     * Return the deleted node
     * 
     * @param index
     */
    public Node deleteAtIndex(int index) {
        if (index < 0 || index >= this.size()) {
            return null;
        }

        Node curr = this.head;

        if (index == 0) {
            Node temp = curr;
            this.head = curr.next;
            curr = null;
            size--;
            return temp;
        }

        int counter = 0;
        while (curr != null) {

            if (counter + 1 == index) {
                Node temp = curr.next;
                curr.next = curr.next.next;
                if(counter + 1 == this.size() - 1){
                    this.tail = curr;
                }
                size--;
                return temp;
            }

            curr = curr.next;

            counter++;
        }

        return null;
    }

    /**
     * Return the node based on the given index Return null if index is out of bound
     * 
     * @param index
     * @return
     */
    public Node getNode(int index) {
        if (this.size() <= index || index < 0)
            return null;

        int counter = 0;
        Node curr = this.head;
        while (curr != null) {
            if (counter == index)
                return curr;
            curr = curr.next;
            counter++;
        }
        return null;
    }

    /**
     * Reverse the linked list
     * If the linked list has the size of 1, switch head and tail
     * If the linked list has the size of 0, return
     */

    public void reverse() {
        if(this.size() <= 1) return;

        Node prev = null;
        Node curr = this.head;
        Node next = null;
        while(curr != null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.tail = this.head;
        this.head = prev;
       
    }

    /**
     * O(1) Get the size of the list
     * 
     * @return int
     */
    public int size() {
        return this.size;
    }

    /**
     * O(1) Check if the linked list is empty
     * 
     * @return boolean
     */
    public boolean isEmpty() {
        return this.size == 0;
    }

    /**
     * O(n), where n is the size of the linked list Print the value of all nodes
     * inside the list
     */
    public void print() {
        Node curr = this.head;
        while (curr != null) {
            System.out.println(curr.val);
            curr = curr.next;
        }
    }

}
