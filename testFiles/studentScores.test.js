const {getLetterGrades,getTotal,getAfternoonClasses,getScoresAboveSeventy,
       addFiveToStudentScores,getSquareOfEach,distributeBooksToMembers,getHealtyItem,
       extractOrder,extractItemsAndgetPercentage} = require("../sourcesFiles/studentScores"); 

test("Extract Scores greater or equal to 70", ()=>{
    const studentScores = [24,67,79,70,54,80,97];
    let result = getScoresAboveSeventy(studentScores);
    let expected = [79,70,80,97];
    expect(result).toEqual(expected);
});

test("Add five to each student scores",()=>{ 
    const studentScores = [85,92,78,88,95];
    let result = addFiveToStudentScores(studentScores);
    let expected = [90,97,83,93,100];
    expect(result).toEqual(expected);
})

test("square each number in a list", ()=>{
    const number = [2,4,6,8,10];
    let result = getSquareOfEach(number);
    let expected = [4,16,36,64,100];
    expect(expected).toEqual(result);
})

test("distribute to each member",()=> {
    const members = ["Emily","Jack","Sophia","Daniel"];
    const books = ["Art of Living","Art of Money","Art of Not giving a Fuck","Art of Love"];
    let result = distributeBooksToMembers(members,books);

    let expected = {Emily : "Art of Living",
                  Jack : "Art of Money",
                  Sophia: "Art of Not giving a Fuck",
                  Daniel: "Art of Love",}

    expect(expected).toEqual(result);
})

test("Extract classes offered in afternoon", ()=>{
    const classTimming = ["9:00 AM","11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
    let result = getAfternoonClasses(classTimming);
    let expected = ["1:00 PM", "3:00 PM", "5:00 PM"];
    expect(expected).toEqual(result);
})

test("get total amount spent",()=>{
    const expenses = {
        "groceries": 150, 
        "dining out": 100, 
        "transportation": 50, 
        "entertainment": 80 
    }
    let result = getTotal(expenses);
    let expected = 380;
    expect(expected).toBe(result);
})

test("get letter grades for list of scores",()=>{
    const studentScores = [95, 78, 85, 60, 45, 92];
    let result = getLetterGrades(studentScores);
    let expected = ["A","C","B","D","F","A"];
    expect(expected).toEqual(result);
})

test("extract healty items from list",()=> {
    const shoppingList = [
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
        { name: 'Carrots', category: 'Vegetables', isHealthy: true },
        { name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
        { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
        { name: 'Soda', category: 'Beverages', isHealthy: false }];

    let result =  getHealtyItem(shoppingList);
    let expected = [
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Carrots', category: 'Vegetables', isHealthy: true },
        { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
         ];

    expect(expected).toEqual(result); 
})

test("extract orders with cost above $100",()=>{
    const orders = [
        { id: 1, items: [{ price: 25, quantity: 2 }, { price: 15, quantity: 3 }] },
        { id: 2, items: [{ price: 100, quantity: 1 }, { price: 25, quantity: 2 }] },
        { id: 3, items: [{ price: 30, quantity: 1 }] },
        {id:  4, items: [{ price: 100, quantity: 3}]},
       ]
    let result = extractOrder(orders);
    //let expected = [  { id: 2, items: [{ price: 100, quantity: 1 }, { price: 25, quantity: 2 }] }]
    let expectedSummary = [{id: 2, total :150},
                            {id: 4, total : 300 },];

    expect(expectedSummary).toEqual(result);
})
test("extract items above $50 and offer 10% discount",()=>{
    const products = [ 
        { name: "Laptop", price: 1200 }, 
        { name: "Phone", price: 600 },
        { name: "Mouse", price: 25 }, 
        { name: "Monitor", price: 200 }];

    let result = extractItemsAndgetPercentage(products);
    let expected = [{ name: "Laptop", price: 1200, discountedPrice : 1080}, 
                    { name: "Phone", price: 600 , discountedPrice : 540},
                    { name: "Monitor", price: 200, discountedPrice : 180}]

    expect(expected).toEqual(result);
})

