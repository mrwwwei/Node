const { myArray } = require('../src/array.js')


describe('Test My Array', () => {
    // 1. test edit item
    test('edit item', () => {
        let newArray = new myArray()
        newArray.addItem(1)
        newArray.addItem(2)
        let result = newArray.editItem(3, 3)

        expect(result).toEqual([1,2,undefined,3])
    })

    // 2. test add one item
    test('add item', () => {
        let newArray = new myArray()
        let result = newArray.addItem(1)
        expect(result).toEqual([1])
    })

    // 3. test remove last item
    test('add remove last item', () => {
        let newArray = new myArray()
        newArray.addItem(1)
        newArray.addItem(2)
        newArray.addItem(3)
        newArray.addItem(4)

        let result = newArray.removeLastItem()

        expect(result).toEqual([1,2,3])
    })

    test('add remove last item from empty array', () => {
        let newArray = new myArray()
        let result = newArray.removeLastItem()

        expect(result).toEqual([])
    })

    // 4. test remove first item
    test('remove first item', () => {
        let newArray = new myArray()
        newArray.addItem(1)
        newArray.addItem(2)
        newArray.addItem(3)
        newArray.addItem(4)

        let result = newArray.removeFirstItem()

        expect(result).toEqual([2,3,4])
    })

    // 5. test remove item in middle
})