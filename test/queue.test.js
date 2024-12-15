const { queue } = require('../src/queue.js');

// queue test suitcase
describe('queue test', () => {
    // test queue add
    test('queue.enqueue', () => {
        queue.enqueue(4);
        expect(queue.front()).toBe(1);
        expect(queue.size()).toBe(4);
    });

    // test queue remove
    test('queue,dequeue', () => {
        const deque = queue.dequeue();
        expect(typeof deque).toBe('number');
        expect(queue.front()).toBe(3);
        expect(queue.size()).toBe(3);
    });

    // test queue get first item of queue
    test('queue.front', () => {
        expect(queue.front()).toBe(3);

    });
})
