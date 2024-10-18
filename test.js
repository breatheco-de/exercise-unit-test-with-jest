test("100 euro should be 107 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const expected = 100 * 1.07;
     expect(fromEuroToDollar(100)).toBeCloseTo(expected);
});

test("100 dollar should be 14626.17 yens", function() {
    const {fromDollarToYen} = require('./app.js');
    const expected = (100 / 1.07)* 156.5;
    expect(fromDollarToYen(100)).toBeCloseTo(expected);
});

test("100 yen should be 0.56 pounds", function() {
    const {fromYenToPound} = require('./app.js');
    const expected = (100 / 156.5)* 0.87;
    expect(fromYenToPound(100)).toBeCloseTo(expected);
});
