const { myArray } = require('../src/array.js')


describe('Test My Array', () => {
    // 1. test edit item
    test('edit item', () => {
        let newArray = new myArray()
        newArray.addItem(1)
        newArray.addItem(2)
        let result = newArray.editItem(1, 3)

        expect(result).toEqual([1,3])
    })

    // 2. test add one item
    test('add item', () => {
        let newArray = new myArray()
        let result = newArray.addItem(1)
        expect(result).toEqual([1])
    })
    // 3. test remove last item

    // 4. test remove first item

    // 5. test remove item in middle
})