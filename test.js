const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')

    const dollars = fromEuroToDollar(3.5)

    const expected = 3.5 * 1.2; 
    
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be x yen", function(){
    const { fromDollarToYen } = require('./app.js')

    const yen = fromDollarToYen(3.5)

    const expected = (3.5 / 1.2) * 127.9; 
    
     expect(yen).toBe(expected);
})

test("One yen should be x pounds", function(){
    const { fromYenToPound } = require('./app.js')

    const pounds = fromYenToPound(3.5)

    const expected = (3.5 / 127.9) * 0.8; 
    
     expect(pounds).toBe(expected);
})
