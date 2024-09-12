test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("Yen to pound", function() {
    // Import the function from app.js
    const { fromYentoPound } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromYentoPound(3.5);

    // If 156.5 Yen is 1 Euro, then 3.5 euros should be (3.5 / 156.5) * 0.87
    const expected = (3.5 / 156.5) * 0.87; 
    
    // This is the comparison for the unit test
    expect(dollars).toBe(expected); 
})

test("Dollar to Yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromDollarToYen(3.5);

    // If 1 euro is 156.5 Yen, then 3.5 euros should be (3.5 / 1.07) * 156.5
    const expected = (3.5 / 1.07) * 156.5; 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(expected); 
})