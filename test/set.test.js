const { mySet } = require('../src/set.js');

// set test suitcase
describe('Set .test', () => {
    
    // test set add
    test('set.add', () => {
        mySet.add(3);
        mySet.add(4);
        expect(mySet.size).toBe(3);
    });

    // test set remove an item
    test('set.delete', () => {
        mySet.delete(2);
        expect(mySet.has(2)).toBe(false);
        expect(mySet.size).toBe(2);
    });
});