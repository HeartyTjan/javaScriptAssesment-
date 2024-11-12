function multiplyEach(array){
    let result = [];
    array.forEach(element => {
        result.push(element * 2);
    });

    return result;
}

const sum = (array)=>{
    let total = 0;
    array.forEach((element)=> {
        total += element
    });
    return total;
}

function numberGreaterThanTwo(array){
    let result = array.filter((element)=> element > 2);
    return result;
}
function addTwoToNumber(array){
    let result = array.map((element)=> element + 2);
    return result;
}
module.exports = {multiplyEach,sum,numberGreaterThanTwo,addTwoToNumber};