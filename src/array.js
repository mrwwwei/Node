
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
    removeItem(beginIndex, deleteCount) {
       
     }

    // remove first item of my array
    removeFirstItem() { }

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