 const { sum } = require('./app.js');
const { fromEuroToDollar } = require('./app.js')

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

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

test("One dollar should be 167.455 yen", function() {
    const { fromDollarToYen } = require('./app.js');
        const expected = 1.07 *  156.5;
        expect(fromDollarToYen(1)).toBe(167.455);
    })

    test("One pound should be 179.54", function() {
        const { fromDollarToYen } = require('./app.js');
            
            expect(fromDollarToYen(1)).toBe(167.455);
        })