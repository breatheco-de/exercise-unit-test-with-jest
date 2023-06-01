const {sum}=require('./app.js');

test('adds 14 +9 to equal 23', () => {
    let total = sum(14,9);

expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3 * 1.2)
})

test("One dollar should be 153.48 Yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(1)).toBe(153.48); //1 dolar son 153.48 yenes, entonces 3.5 dolares deberian ser = (3 * 153.48)
})

test("One yen should be 0.00625488663 Pound", function(){
    // importo la funcion desde app.js
    const { fromYentoPound } = require('./app.js')
    expect(fromYentoPound(1)).toBe(102.32000000000001); //1 Yen son 0,00625488663 pounds, entonces 3 yenes deberian ser = (3 * 0.00625488663)
})