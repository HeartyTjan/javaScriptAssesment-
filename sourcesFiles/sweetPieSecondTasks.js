
function calculateTotalBooks(transactions){
    let initialValue = 0
    return transactions.reduce((total,transaction) => {
        return total + transaction
    }, initialValue);
}
function calcuateExpenses(expenses){
 let expensesAmount = [];
     for(value of expenses){
            expensesAmount.push(value.amount)
     }
     let initialValue = 0;
     return expensesAmount.reduce((total,amount)=>{
        return total + amount;
     }, initialValue)
}

function salaryLessThanAndNotInALocation(array){

    let result = array.filter((element)=> element.salary < 50_000 && element.location != "New York");
    return result;

}
function getUnderEighteenWithNoId(array){
    let result = array.filter((element)=> element.age < 18 && element.voterID == false);
    return result;
}
module.exports = {calculateTotalBooks,calcuateExpenses,salaryLessThanAndNotInALocation,getUnderEighteenWithNoId};
