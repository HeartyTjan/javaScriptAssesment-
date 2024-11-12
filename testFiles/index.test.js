const {multiply, squareNumber,evenNumber} = require("./index")

test("multiply two numbers", ()=> {

    let firstNumber = 4;
    const secondNumber = 5;        
    let result =  multiply(firstNumber,secondNumber);
    expect(result).toBe(20);
    
})

test ("square a number",()=>{

    let number = 2;
    let result = squareNumber(number);
    expect(result).toBe(4);
})

test("even number", ()=> {
    
    let arrayOfNumber = [2,4,1,8,7,3,10,23,34,53]
    let result = evenNumber(arrayOfNumber);

    expect(result).toEqual([2,4,8,10,34])

})