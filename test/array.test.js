const myArray = require('../src/array.js');

describe('Array Tests', () => {
    // test edit item
    test('测试数组修改元素', () => {
        myArray[0] = 2
        expect(myArray[0]).toBe(2);
    });

    // test add one item
    test('测试push', () => {
        const mlength = myArray.length;
        myArray.push(8);
        expect(myArray.length).toBe(mlength + 1);
        expect(myArray[myArray.length - 1]).toBe(8);
    });

    // test remove last item
    test('测试pop', () => {
        const mypop = myArray.pop();
        expect(typeof mypop).toBe('number')
        expect(myArray.length).toBe(myArray.length + 1 - 1);
    });

    // test remove first item
    test('unshift', () => {
        const mylength = myArray.length;
        myArray.unshift(5);
        expect(myArray.length).toBe(mylength + 1);
        expect(myArray[0]).toBe(5);
    });

    // test remove item in middle
    test('splice', () => {
        const mylength = myArray.length;
        myArray.splice(1, 2);
        expect(myArray.length).toBe(mylength - 2);
    })
})