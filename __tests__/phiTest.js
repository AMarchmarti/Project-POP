const DIARY = require('../BBDD/diary')
const phi = require('../src/back/scripts/phi')


test('phi should return anything diferent of null or undefined or NaN', () => {
   expect(phi([[75, 15], [4, 1]])).toBeTruthy()
});
test('phi should return a number', () => {
   expect(typeof phi([[75, 15], [4, 1]])).toBe('number')
});
test('phi should be a less or equal than 1', () => {
   expect(phi([[75, 15], [4, 1]])).toBeLessThanOrEqual(1)
   expect(phi([[80, 5], [27, 4]])).toBeLessThanOrEqual(1)
   expect(phi([[100, 50], [10, 0]])).toBeLessThanOrEqual(1)
   expect(phi([[77, 7], [0, 5]])).toBeLessThanOrEqual(1)
   expect(phi([[5, 5], [6, 4]])).toBeLessThanOrEqual(1)
});
