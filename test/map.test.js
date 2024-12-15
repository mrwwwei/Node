const { mymap } = require('../src/map.js');

// map test suitcase
describe('Map test', () => {

    // test map add
    test('map.add', () => {
        mymap.set('gender', 'male');
        expect(mymap.get('gender')).toBe('male');
    });

    // test map remove an item
    test('map.delete', () => {
        mymap.delete('name');
        expect(mymap.has('name')).toBe(false);
    });


})