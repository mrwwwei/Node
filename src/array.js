
class myArray {
    constructor() {
        this.items = []
    }

    editItem(index, item) {
        this.items[index]=item;
        return this.items;
    }

    // add one item of my array
    addItem(item) { 
        this.items.push(item)
        return this.items;
    }

    // remove one item of my array
    removeItem(beginIndex) {
        this.items.splice(beginIndex,1);
        return this.items;
       
     }

    // remove first item of my array
    removeFirstItem() { 
        this.items.splice(0,1);
        return this.items;
    }

    // remove last item of my array
    removeLastItem() { 
        const n = this.items.length;
        this.items.splice(n-1,1);
        return this.items;
    }
}

module.exports = {
    myArray
};