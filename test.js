const { sum } = require("./app.js");

test("adds 14+9 to equl 23", () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function () {
    const { fromEuroToDollar } = require("./app.js");
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar should be 146.26 yen", function () {
    const { fromDollarToYen } = require("./app.js");
    expect(fromDollarToYen(17)).toBe(2486.42);
})

test("One yen should be 0.0055 pounds", function () {
    const { fromYenToPound } = require("./app.js");
    expect(fromYenToPound(1000000)).toBe(5500);
})