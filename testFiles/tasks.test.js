const {multiplyEach,sum,numberGreaterThanTwo,addTwoToNumber} = require("./tasks");

test("Multiply each by 2", ()=>{
    const numbers = [1,2,3,4,5];
    let result = multiplyEach(numbers);
    let expected  = [2,4,6,8,10];
    expect(result).toEqual(expected)

})

test("Sum the numbers in list",()=>{
    const numbers = [1,2,3,4,5];
    let result = sum(numbers);
    let expected = 15;
    expect(result).toEqual(expected);
})

test("number greater than 2",()=>{
    const numbers = [1,2,4,6,7];
    let result = numberGreaterThanTwo(numbers)
    let expected = [4,6,7];
    expect(result).toEqual(expected);

})

test("add two to each number in list",()=>{
    const numbers = [1,2,3,4,5];
    let result =  addTwoToNumber(numbers);
    let expected = [3,4,5,6,7];
    expect(result).toEqual(expected);
})