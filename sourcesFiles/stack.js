
class Stack{
    constructor(){
        this.collection = [];
        this.count = 0;
    }

    push(element){

        this.collection[this.count] = element;
        this.count++;

    }

    pop(){

        if(this.count == 0)return undefined;
        let deletedItem = this.collection.pop();
        this.count--;
        return deletedItem;
    }
    peek(){
        if(this.count == 0)return undefined;
        return this.collection[this.count-1];
    }

    isEmpty(){

        if(this.count == 0)return true;
        else return false;
    }
}

module.exports = Stack;
