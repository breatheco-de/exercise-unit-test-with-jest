const { sum } = require('./app');


test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 102.32 yens", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(6)).toBe(613.92); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One yen should be 0.0062 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(200)).toBe(1.24); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})