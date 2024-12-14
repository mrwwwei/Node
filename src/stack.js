class Stack{
    constructor(){
        this.items=[];
    
    }


    push(element){
        this.items.push(element);
    }

    pop (){
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length-1];
    }

    size(){
        return this.items.length;
    }

    isEmpty(){
        return this.items.length===0;
    }
}

const stack=new Stack();




module.exports={
    stack
};