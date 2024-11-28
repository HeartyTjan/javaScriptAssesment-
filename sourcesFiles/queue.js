
class Queue{
    constructor(){
        this.collection = [];
        this.count = 0;
 
    }

    enqueque(element){
        this.collection[this.count] = element;
        this.count++;
       
    }

    dequeque(){
        if(this.collection.length == 0)return undefined
        return this.collection.shift();        
    }

    front(){
        if(this.collection.length == 0) return null;
        return this.collection[0];
    }
    
    isEmpty(){
        if(this.collection.length == 0)return true;
        return false;
    }

}

module.exports = Queue