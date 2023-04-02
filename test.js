//import the function from app.js
const { fromEuroToDollar, fromDollarToYen ,fromYenToPound } = require('./app.js')

test("One euro should be 1.2 dollars", function(){
    
    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 106.58333333333334 yen", function(){
    const yen = fromDollarToYen(1);
    const expected = 106.58333333333334;
    expect(yen).toBe(expected);
})

test("One yen should be 0.0063 pounds", function(){
      const pound = fromYenToPound(1);
      const expected = 0.0063;
      expect(pound.toFixed(4)).toBe(expected.toFixed(4));
});