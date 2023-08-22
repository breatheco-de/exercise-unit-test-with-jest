//import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be use
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
//fromDollarToYen

const { fromDollarToYen } = require('./app.js');

test("Converts dollars to yen correctly", () => {
  const dollarAmount = 50;
  const expectedYenAmount = 50 * 109.5;
  
  const actualYenAmount = fromDollarToYen(dollarAmount);
  
  expect(actualYenAmount).toBe(expectedYenAmount);
});

// from YenToPound
const { fromYenToPound }= require ('./app.js');
test("converts yen to pound correctly", () => {
    
    let yenAmount=100;
    let expectedPoundAmount = 100 * 0.0069;

    let actualPoundAmount = fromYenToPound(yenAmount);

    expect(actualPoundAmount).toBe(expectedPoundAmount);
  });
