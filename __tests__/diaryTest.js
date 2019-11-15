const DIARY = require("../BBDD/diary");

/**
 * TESTS
 */

test("DIARY should be an Array instance", () => {
  expect(DIARY).toBeInstanceOf(Array);
});

test('DIARY should have 90 items/days', ()=>{
    expect(DIARY.length).toBe(90)
})
test('Every item/day of DIARY should be an object', ()=>{
    for (let index = 0; index < DIARY.length-1; index++){
        expect(DIARY[index]).toBeInstanceOf(Object)
    }
})
test('DIARY objects should have 2 properties', ()=>{
    for (let index = 0; index < DIARY.length-1; index++){
        expect(DIARY[index]).toHaveProperty('eventos')
        expect(DIARY[index]).toHaveProperty('pulpo')
    }
})
test('DIARY objects property eventos should be a array', ()=>{
    for (let index = 0; index < DIARY.length-1; index++){
        expect(DIARY[index].eventos).toBeInstanceOf(Array)
    }
})
