const { stack } = require('../src/stack.js')

// stack test suitcase
describe('stack test', () => {

    // test stack push
    test('stack.push', () => {
        stack.push(4);
        expect(stack.peek()).toBe(4);
        expect(stack.size()).toBe(1);
    });

    // test stack pop
    test('stack.pop', () => {
        const pope = stack.pop();
        expect(typeof pope).toBe('number');
        expect(stack.size()).toBe(0);
    });

    // test stack peek
    test('stack.peek', () => {
        expect(stack.peek()).toBe();
    })

})
