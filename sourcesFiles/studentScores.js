

function getScoresAboveSeventy(array){
    let result = array.filter((element)=> element >= 70);
    return result;
}

const addFiveToStudentScores = (array)=> {
    let result = array.map((element)=> element + 5);
    return result;
}

function getSquareOfEach(array){
    let squareOfNumberList = [];
    array.forEach(element => {
        squareOfNumberList.push(element * element);
    });
    return squareOfNumberList;
}
module.exports = {getScoresAboveSeventy,addFiveToStudentScores,getSquareOfEach};