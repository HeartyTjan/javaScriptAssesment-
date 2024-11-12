function multiply(firstNumber,SecondNumber){

    return firstNumber * SecondNumber;

}
function squareNumber(number){

    return number * number;
}

function evenNumber(array){

        let evenNumber = []

        for(value of array){
            if(value % 2 == 0){ 
                evenNumber.push(value)
            }
        }
        return evenNumber;
}
module.exports = {multiply, squareNumber,evenNumber};
