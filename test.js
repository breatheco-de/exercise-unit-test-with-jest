const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745);
})

test("Conversion from USD to JPY (1 USD = 149.03 JPY)", function() {
    expect(fromDollarToYen(10)).toBeCloseTo(1462.62);
})

test("Conversion from JPY to GBP (1 JPY = 0.0072 GBP)", function() {
    expect(fromYenToPound(1000)).toBeCloseTo(5.56);
})