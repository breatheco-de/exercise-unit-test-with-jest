const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Start your first test
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(expected); 
})

test("One dollar should be 146.26 yenes", function() {
    const yenes = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5; 
    expect(yenes).toBeCloseTo(expected, 2); 
});

test("One yen should be 0.00556 pounds", function() {
    const pounds = fromYenToPound(1);
    const expected = (1 / 156.5) * 0.87; // 0.005559105431309904
    expect(pounds).toBeCloseTo(expected, 5); // 5 decimales de precisión
});