const {getScoresAboveSeventy,addFiveToStudentScores,getSquareOfEach} = require("./studentScores"); 

test("Extra Scores greater or equal to 70", ()=>{
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

