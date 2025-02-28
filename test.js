test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar} = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})


test("One dollar should be equivalent to yen via euros", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(10);
    const expected = (10 / 1.07) * 156.5;
    expect(yen).toBeCloseTo(expected, 2);
});


test("One yen should be equivalent to pounds via euros", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(1000);
    const expected = (1000 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expected, 2);
});