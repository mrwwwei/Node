const { person } = require('../src/object.js');

// Object test suitcase
describe('Object Tests', () => {
    test('访问', () => {
        expect(person.name).toBe('Alice');
    });

    // test object edit property
    test('object.edit', () => {
        person.age = 32;
        expect(person.age).toBe(32);
    });


    // test object add a property
    test('object.add', () => {
        person.job = 'Engineer';
        expect(person.hasOwnProperty('job')).toBe(true);
    });

    // test object delete a property
    test('object.delete', () => {
        delete person.job;
        expect(person.hasOwnProperty('job')).toBe(false);
    });

    // test travel object property
    test('object.for', () => {
        let propertyCount = 0;
        for (const key in person) {
            propertyCount++;
        }
        expect(propertyCount).toBeGreaterThan(0);
    });
});
