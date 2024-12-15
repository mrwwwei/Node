const { myArray } = require('../src/array.js')

let newArray = new myArray()

describe('Test My Array', () => {
    // 1. test edit item
    test('edit item', () => {
        let result = newArray.addItem(2)
        expect(result).toEqual([2])
    })

    // 2. test add one item

    // 3. test remove last item

    // 4. test remove first item

    // 5. test remove item in middle
})