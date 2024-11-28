const {Human,Shape,Rectangle} = require("../sourcesFiles/oop");

test("Throw exeception when age is less than Zero",()=> {
    let age = -3;
    let name = "Williams";
    let human = ()=> new Human(name,age);
    let errorMessage = "Age should not be less than zero";
    expect(human).toThrowError(errorMessage);
}) 

test("Function return calculated Area",()=>{
    let side1 = 15;
    let side2 = 34;
    let name = "Williams"
    let newRec = new Rectangle(name,side1,side2);
    let area = newRec.getArea();
    let expected = 510;
    expect(area).toBe(expected);

})