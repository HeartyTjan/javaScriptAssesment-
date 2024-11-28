const Stack = require("../sourcesFiles/stack");
const Queue = require("../sourcesFiles/queue");
const {Node,LinkedList}= require("../sourcesFiles/node");
const {calculateTotalBooks,calcuateExpenses,salaryLessThanAndNotInALocation,getUnderEighteenWithNoId} = require("../sourcesFiles/sweetPieSecondTasks")

test("the push function add to the top Stack",()=>{
    const newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    let expected  = [1,2];
    expect(expected).toEqual(newStack.collection);
       
});

test("The pop function extract the last item in the stack",()=>{
    const newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    let result = newStack.pop()
    expect(result).toBe(3);
    expect([1,2]).toEqual(newStack.collection)
})

test("The peek function only check the last item in the Stack",()=>{
    const newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    let result =  newStack.peek();
    expect(result).toBe(3);
    expect([1,2,3]).toEqual(newStack.collection);
})

test("The isEmpty function return true if Stack is empty and false otherwise",()=>{
    const newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    let result = newStack.isEmpty();
    expect(result).toBe(false);
    newStack.pop()
    newStack.pop()
    expect(newStack.isEmpty()).toBe(true);
})

test("The enqueque function add to the top of the queque",()=>{
    const newQueue =  new Queue();
    newQueue.enqueque(1);
    newQueue.enqueque(2);
    let expected = [1,2];
    expect(expected).toEqual(newQueue.collection)
})

test("The dequeque function extract the first item from the list",()=>{
    const newQueue =  new Queue();
    newQueue.enqueque(1);
    newQueue.enqueque(2);
    newQueue.enqueque(3);
    let result = newQueue.dequeque();
    expect(1).toBe(result);
    expect([2,3]).toEqual(newQueue.collection);

})

test("The front function only check the first item in the list",()=>{
    const newQueue =  new Queue();
    newQueue.enqueque(1);
    newQueue.enqueque(2);
    newQueue.enqueque(3);
    let result =  newQueue.front();
    expect(result).toBe(1);
    expect([1,2,3]).toEqual(newQueue.collection);
})

test("The isEmpty function return true if list is empty and false otherwise",()=>{
    const newQueue = new Queue();
    newQueue.enqueque(1);
    newQueue.enqueque(2);
    let result = newQueue.isEmpty();
    expect(result).toBe(false);
   newQueue.dequeque()
   newQueue.dequeque()
   expect(newQueue.isEmpty()).toBe(true);
})

test("The add function data and link to the next data in list",()=>{
    const newLinkedList = new LinkedList();
    newLinkedList.add(8);
    let expected = 8;
    expect(newLinkedList.head.data).toEqual(8)

});

test("The remove function extract the value received if found and list size reduces",()=>{
    const newLinkedList = new LinkedList();
    newLinkedList.add(8);
    newLinkedList.add(10);
    newLinkedList.add(35);
    let result = newLinkedList.remove(10);
    expect(result).toBe(10)

})

test("The traverse function go thorugh the list and print the data",()=>{
    const newLinkedList = new LinkedList();
    newLinkedList.add(8);
    newLinkedList.add(10);
    newLinkedList.add(35);
    newLinkedList.traverse()

})

test("The isEmpty function return true if list is empty and false otherwise",()=>{
    const newLinkedList = new LinkedList();
    newLinkedList.add(8);
    newLinkedList.add(10);
    newLinkedList.add(35);
    let result = newLinkedList.isEmpty()
    expect(result).toBe(false);
    newLinkedList.remove(8);
    newLinkedList.remove(10);
    newLinkedList.remove(35);
    expect(true).toBe(newLinkedList.isEmpty())
})

test("If calculateTotalBooks return expected value",()=>{

    let numberOfBorrowedBooks = [12,11,4,5]
    const result = calculateTotalBooks(numberOfBorrowedBooks)
    let expected = 32;
    expect(result).toBe(expected);
})

test("calcuateExpenses extract amount from an object and sum expenses",()=>{
    const expenses = [{category: "food",amount : 100},
                    {category: "house rent", amount : 150_000},
                    {category: "PHCN", amount: 10000}]
    const result = calcuateExpenses(expenses);
    let expected = 160_100
    expect(result).toBe(expected);
        
})

test("Fiter salary less than 50_000 and not in newyork",()=>{
   const object=  [{title: "Software Engineer", salary: 60000, location: "New York"},
                    {title: "Mobile Engineer", salary: 45_000, location: "Lagos"},
                    {title: "Accountant", salary: 60000, location: "New York"},
                    {title: "Banker", salary: 30000, location: "Chicago"}]

    let result =  salaryLessThanAndNotInALocation(object);
    let expected = [ {title: "Mobile Engineer", salary: 45_000, location: "Lagos"},
                    {title: "Banker", salary: 30000, location: "Chicago"}]

    expect(result).toEqual(expected)


})

test("Fiter people under 18 and without Id",()=>{
    const people = [{name: "John", age: 16, voterID: false},
                    {name: "Tobi", age: 18, voterID: true},
                    {name: "bola", age: 45, voterID: false},
                    {name: "Hammed", age: 50, voterID: true}]
    let result = getUnderEighteenWithNoId(people);
    let expected = [{name: "John", age: 16, voterID: false}]
    expect(result).toEqual(expected)
})