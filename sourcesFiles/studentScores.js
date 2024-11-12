

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

function distributeBooksToMembers(members, books){
    const person = {};
    members.forEach((element, index) => {
       person[element]= books[index];
       return person

       });

   return person;

}
function getAfternoonClasses(array){
    let result = array.filter((time) =>{
        return time.includes("PM");

    })
    return result;
}
const getTotal = (object)=>{
    let totalExpenses = 0;
    for(let value in object){
        totalExpenses += object[value];
    }
    return totalExpenses;
}

function getLetterGrades(array){
    let result = array.map((score)=>{
        if(score >= 90 && score <= 100) score = "A";
        else if (score >= 80 && score <= 89) score = "B";
        else if (score >= 70 && score <= 79) score = "C";
        else if(score >= 60 && score <= 69) score = "D";
        else if (score >= 0 && score < 60) score = "F";
        else return "Invalid score"
        return score;
        
    })
    return result;
}

const getHealtyItem = (array)=>{

    let result = array.filter((item)=>{
        return item.isHealthy == true

    })
    return result;
}

function extractOrder(array){
  
    let result =[];
    let total = 0;
    let summary ={};
   for(let key of array){
        key.items.forEach((element)=> {
            if(element.price >= 100) {
                result.push(key)
                summary.id = key.id
            }
            
        })
   }
    // { id: 2, items: [{ price: 100, quantity: 1 }, { price: 25, quantity: 2 }] },
   for(let key of result){
        key.items.forEach((element)=> {
            if(element.price >= 100){
                 total += element.price * element.quantity;
                 summary.totalCost  = total
            }
           
        })
   }
  
   return summary;

}

module.exports = {getLetterGrades,getTotal,getAfternoonClasses,getScoresAboveSeventy,
                  addFiveToStudentScores,getSquareOfEach,distributeBooksToMembers,getHealtyItem,
                  extractOrder};