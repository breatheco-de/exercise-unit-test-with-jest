const {sum}=require('./app.js');

test('adds 14 +9 to equal 23', () => {
    let total = sum(14,9);

expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 153.48 Yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3)).toBe(460.44); //1 dolar son 154.2474 yenes, entonces 3.5 dolares deberian ser = (3.5 * 154.2474)
})

test("One yen should be 102.32 Pound", function(){
    // importo la funcion desde app.js
    const { fromYentoPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYentoPound(3)).toBe(2.4000000000000004); //1 Yen son 0,80 pounds, entonces 3 yenes deberian ser = (3.5 * 1.2)
})