const table = Object.create(require('../src/app/scripts/index'))

test('table should be an object and have prototype', () => {
    expect(table).toBeInstanceOf(Object)
    expect(table.prototype).toBeTruthy()
});

test('table should be 3 properties, prototype should be 5 functions', () => {
    expect(table).toHaveProperty('recolectInfo')
    expect(table).toHaveProperty('phi')
    expect(table).toHaveProperty('map')
    expect(table.prototype).toHaveProperty('calculatedMatrix')
    expect(table.prototype).toHaveProperty('calculatedPhi')
    expect(table.prototype).toHaveProperty('row')
    expect(table.prototype).toHaveProperty('result')
    expect(table.prototype).toHaveProperty('columns')
});

test('Properties into table should be....', () => {
    // recolectInfo should be an Object
    expect(table.recolectInfo).toBeInstanceOf(Object)
    // phi should be a function
    expect(table.phi).toBeInstanceOf(Function)
    // map should be an empty array
    expect(table.map).toBeInstanceOf(Array)
    expect(table.map.length).toBe(0)
});

test('Properties of prototype should be...', () => {
    //columns array of 3 items and each item an string
    expect(table.columns()).toBeInstanceOf(Array)
    expect(typeof table.columns()[0]).toBe('string')
    expect(table.columns().length).toBe(3)
    expect(table.columns()[1]).toBe('matrix')

    //calculatedMatrix should be a matrix, each array should 
    //have 2 items and this items should be numbers
    expect(table.calculatedMatrix('mejillones')[0]).toBeInstanceOf(Array)
    expect(typeof table.calculatedMatrix('mejillones')[0][0]).toBe('number')
    expect(table.calculatedMatrix('mejillones')[0][0]).toBe(70)

    //calculatedPhi should be a number and less or equal than 1
    expect(typeof table.calculatedPhi('mejillones')).toBe('number')
    expect(table.calculatedPhi('mejillones')).toBeLessThanOrEqual(1)

    // row should be an object, it should have 3 properties and 
    // 1 property should be a string
    // 2 property should be a matrix
    // 3 property should be a number
    expect(table.row('mejillones')).toBeInstanceOf(Object)
    expect(table.row('mejillones')).toHaveProperty('item')
    expect(table.row('mejillones')).toHaveProperty('matrix')
    expect(table.row('mejillones')).toHaveProperty('phi')
    expect(typeof table.row('mejillones')['item']).toBe('string')
    expect(table.row('mejillones')['matrix']).toBeInstanceOf(Array)
    expect(typeof table.row('mejillones')['phi']).toBe('number')
    expect(table.row('mejillones')['phi']).toBeLessThanOrEqual(1)
    expect(table.row('mejillones')['matrix'].length).toBe(2)


    // result should be an array of 26 objects and every object should be a row object
    expect(table.result()).toBeInstanceOf(Array)
    expect(table.result()[0]).toBeInstanceOf(Object)
    table.result().forEach(element => {
            expect( JSON.stringify(element) === JSON.stringify(table.row(element.item))).toBeTruthy()
    });
    expect(table.result()[0]).toStrictEqual(table.row('mejillones'))
    
});