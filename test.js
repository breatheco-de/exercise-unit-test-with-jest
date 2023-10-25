
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)

});

test("One Dollar should be 156.5 Yens", function() {
    // Import the function from app.js
    

    // Use the function like its supposed to be used
    const yen = fromDollarToYen(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 156.5; 
    
    // This is the comparison for the unit test
    expect(fromDollarToYen(3.5)).toBe(547.75); // 1 eur
});

test("One Yen should be 156.5 Pound", function() {
    // Import the function from app.js
    

    // Use the function like its supposed to be used
    const yen = fromYenToPound(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 0.005587; 
    
    // This is the comparison for the unit test
    expect(fromYenToPound(3.5)).toBe(0.0195545); // 1 eur
});






