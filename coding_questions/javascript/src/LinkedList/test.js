const LinkedList = require("./solution");
const Node = require("./Node");

test("return the correct head when list size is more than 1", () => {
    let mainList = new LinkedList();
    let node1 = new Node(1);
    let node2 = new Node(2);
    mainList.addToHead(node1);
    mainList.addToHead(node2);
    expect(mainList.getHead()).toBe(node2);

});

test("return the correct tail when list size is more than 1", () => {
    let mainList = new LinkedList();
    let node1 = new Node(1);
    let node2 = new Node(2);
    mainList.addToTail(node1);
    mainList.addToTail(node2);
    expect(Object.is(mainList.getTail(), node2)).toBe(true);
});

test(`return the correct head and tail
     when list size is exactly 1`, () => {
    let mainList = new LinkedList();
    let node = new Node(2);
    mainList.addToHead(node);
    expect(Object.is(mainList.getHead(), node)).toBe(true);
    expect(Object.is(mainList.getTail(), node)).toBe(true);
    expect(Object.is(mainList.getHead(),mainList.getTail())).toBe(true);
});

test("return the null head and tail when list size is 0", () => {
    let mainList = new LinkedList();
    expect(mainList.getHead()).toBe(null);
    expect(mainList.getTail()).toBe(null);
});

test("Check size of the list", () => {
    let mainList = new LinkedList();
    expect(mainList.listSize()).toBe(0);
    for(let i = 0; i < 4; i++){
        mainList.addToHead(new Node(2));
    }
    expect(mainList.listSize()).toBe(4);
});

test("Test addToHead", () => {
    let mainList = new LinkedList();
    let node1 = new Node(1);
    let node2 = new Node(2);
    let testArrayTrue = [node2,node1];
    let testArrayFalse = [node1,node2];
    mainList.addToHead(node1);
    mainList.addToHead(node2);
    let arrayForm = mainList.toArray();
    expect(mainList.listSize()).toBe(2);
    expect(Object.is(mainList.getHead(),node2)).toBe(true);
    for(let i = 0; i < mainList.listSize(); i++){
        expect(Object.is(arrayForm[i], testArrayTrue[i])).toBe(true);
    }
    for(let i = 0; i < mainList.listSize(); i++){
        expect(Object.is(arrayForm[i], testArrayFalse[i])).toBe(false);
    }
});

test("Test addToTail", () => {
    let mainList = new LinkedList();
    let node1 = new Node(1);
    let node2 = new Node(2);
    let testArrayFalse = [node2,node1];
    let testArrayTrue = [node1,node2];
    mainList.addToTail(node1);
    mainList.addToTail(node2);
    let arrayForm = mainList.toArray();
    expect(mainList.listSize()).toBe(2);
    expect(Object.is(mainList.getTail(),node2)).toBe(true);
    for(let i = 0; i < mainList.listSize(); i++){
        expect(Object.is(arrayForm[i], testArrayTrue[i])).toBe(true);
    }
    for(let i = 0; i < mainList.listSize(); i++){
        expect(Object.is(arrayForm[i], testArrayFalse[i])).toBe(false);
    }
});

test("reverse list", () => {
    let mainList = new LinkedList();
    let testArray = [];
    for(let i = 0; i < 10; i++){
        const node = new Node(i);
        mainList.addToTail(node);
        testArray.push(node);
    }
    mainList.reverse();
    let reversedMainArray = mainList.toArray();
    
    let left = 0;
    let right = mainList.listSize() - 1;

    while(left < right){
        expect(Object.is(testArray[left++], reversedMainArray[right--])).toBe(true);
    }
});

test("Test addToIndex", () => {
    let mainList = new LinkedList();
    let node1 = new Node(1);
    let node2 = new Node(2);
    mainList.addToTail(node1);
    mainList.addToHead(node2);

    // Null base case
    mainList.addToIndex(null,null);
    expect(mainList.listSize()).toBe(2);
    
    // Index <= 0
    let node3 = new Node(3);
    mainList.addToIndex(-99, node3);
    expect(Object.is(mainList.getHead(), node3)).toBe(true);
    expect(mainList.listSize()).toBe(3);
    
    // Index >= listSize()
    let node4 = new Node(4);
    mainList.addToIndex(3, node4);
    expect(Object.is(mainList.getTail(), node4)).toBe(true);
    expect(mainList.listSize()).toBe(4);
    
    // Regular case

    let node5 = new Node(5); 
    let node6 = new Node(6); 
    mainList.addToIndex(1, node5); // 3 5 2 1 4
    mainList.addToIndex(5,node6); // 3 5 2 1 4 6
    let testArray = [node3, node5, node2, node1, node4, node6];
    let mainArray = mainList.toArray();

    mainArray.forEach((node, index) => {
        expect(Object.is(node, testArray[index])).toBe(true);
    });
    expect(mainList.listSize()).toBe(6);
});

test("Test deleteAtIndex", () => {
    let mainList = new LinkedList();
    let node1 = new Node(1);
    let node2 = new Node(2);
    mainList.addToTail(node1);
    mainList.addToHead(node2); // 2 1 

    // Base case, index < 0 and index >= listSize
    mainList.deleteAtIndex(-3);
    mainList.deleteAtIndex(1000);
    expect(mainList.listSize()).toBe(2);
    
    // Base case, index = 0;
    let deleted = mainList.deleteAtIndex(0);
    expect(Object.is(deleted, node2)).toBe(true);
    expect(mainList.listSize()).toBe(1);
    expect(Object.is(mainList.getHead(), node1));

    // Regular case
    let node3 = new Node(3);
    let node4 = new Node(4);
    let node5 = new Node(5);
    mainList.addToIndex(0,node3);
    mainList.addToIndex(1,node4); // 3 4 1 
    mainList.addToIndex(1,node5); // 3 5 4 1

    deleted = mainList.deleteAtIndex(2); // 3 5 1
    expect(Object.is(deleted, node4)).toBe(true);
    expect(mainList.listSize()).toBe(3);

    deleted = mainList.deleteAtIndex(1); // 3 1
    expect(Object.is(deleted, node5)).toBe(true);
    expect(mainList.listSize()).toBe(2);

});