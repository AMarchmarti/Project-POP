const info = Object.create(require('../src/back/scripts/info'))


test('info should be an object', () => {
    expect(info).toBeInstanceOf(Object);
 });

test('info should have 5 properties', () => {
    expect(info).toHaveProperty('events')
    expect(info).toHaveProperty('numbersFalse')
    expect(info).toHaveProperty('numbersTrue')
    expect(info).toHaveProperty('items')
    expect(info).toHaveProperty('matrixItem')
});

test('info .items() and .matrixItem should be arrays', () => {
    expect(info.items()).toBeInstanceOf(Array)
    expect(info.matrixItem()).toBeInstanceOf(Array)

});

test('info.items() should have 26 items, and every item should be a string', () => {
    expect(info.items().length).toBe(26)
    for(let index = 0; index < info.items().length; index++){
        expect(typeof info.items()[index] === 'string').toBeTruthy()
    }
});

test('info.matrixItem should be a matrix and every array'+
    'inside an array of 2 items and every item a number', () => {
    expect(info.matrixItem('mejillones').length).toBe(2)
    info.items().forEach( item => {
        expect(info.matrixItem(item)[0]).toBeInstanceOf(Array)
        expect(typeof info.matrixItem(item)[0][0]).toBe('number')
    })
});

test('The array of numbers should have 2 items and should be numbers', () => {
    info.matrixItem('mejillones')
    expect(info.numbersFalse.length).toBe(2)
    expect(info.numbersTrue.length).toBe(2)
    expect(typeof info.numbersFalse[0]).toBe('number')
    expect(info.numbersFalse).toStrictEqual([70,15])
});