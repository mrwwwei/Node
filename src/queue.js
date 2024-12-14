class Queue{
    constructor(){
        this.items=[];
    }

    enqueue(element){
        this.items.push(element);
    }


    dequeue(){
        return this.items.shift();
    }

    front(){
        return this.items[0];
    }
    size(){
        return this.items.length;
    }
    isEmpty(){
        return this.items.length===0;

    }

}

const queue=new Queue();
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(2);

module.exports={queue};