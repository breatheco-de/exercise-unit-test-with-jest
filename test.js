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

test("5 dólares deberían ser 732.24 yenes", function() {
    const { fromDollarToYen } = require('./app.js');

    const result = fromDollarToYen(5); // Convierte 5 dólares
    const expected = (5 / 1.07) * 156.5; // Fórmula de conversión
    expect(result).toBe(expected); 
    });
    test("1000 yenes deberían ser 5.56 libras", function() {
        const { fromYenToPound } = require('./app.js');
    
        const result = fromYenToPound(1000); // Convierte 1000 yenes
        const expected = (1000 / 156.5) * 0.87; // Fórmula de conversión
        expect(result).toBeCloseTo(expected); // Usa toBeCloseTo para valores decimales
    });