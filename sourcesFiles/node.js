
class Node{
    
    constructor(data){
        this.data = data;
        this.next = null;
        //this.previous = next;
    }
}

class LinkedList{
    constructor(value){
        this.head = value;
        this.size = 0;
    }

    add(value){
        let node = new Node(value);
        let currentNode;

        if(this.head == null){
            this.head = node;   
        }
        else {
            currentNode = this.head;

            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.size++;
    }

    remove(element) {
        let currentNode = this.head;
        let prev = null;
     
        if(currentNode === null){
         return null;
        }
     
        while(currentNode != null){
         if(currentNode.data === element){
             if(prev === null){
                 this.head = currentNode.next;
             }
             else prev.next = currentNode.next;
             this.size--;
             return currentNode.data;
         }
         prev = currentNode;
         currentNode = currentNode.next;
        }
     }

     traverse(){
        let currentNode = this.head
        while(currentNode != null){
           console.log(currentNode.data)
           currentNode = currentNode.next
        }
     }
     isEmpty(){
        
        if(this.size === 0){
            return true;
        }
        return false;
     }
}



module.exports = {Node,LinkedList};