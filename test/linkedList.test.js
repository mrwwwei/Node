const { linkedList } = require('../src/linkedList.js')

// linked list test suitcase
describe('linkedlist test', () => {
    
    // test link head add
    test('link.headadd', () => {
        linkedList.addToHead(0);
        expect(linkedList.head.data).toBe(0);
    });


    // test link tail add
    test('link.tailadd', () => {
        linkedList.addToTail(4);
        let current = linkedList.head;
        while (current.next) {
            current = current.next;
        }
        expect(current.data).toBe(4);
    });

    // test link delete an item
    test('link.delete', () => {
        linkedList.remove(1);
        expect(linkedList.contains(1)).toBe(false);

    });
});