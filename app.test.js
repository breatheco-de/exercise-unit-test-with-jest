const { fromEuroToDollar,fromYenToPound, fromDollarToYen } = require('./app.js');
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
test("One dollar should be 167.455 Yens", function() {
    // Import the function from app.js
    

    // Use the function like its supposed to be used
    const yens = fromDollarToYen(3.5);

    // If 1 dollar is 167.455 yens, then 3.5 dollars should be (3.5 * 167.455)
    const expected = 3.5 * 167.455; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(586.0925); // 1 dollar is 586.0925  yen 3.5 dollars should be = (3.5 *  167.455)
})

test("One Yen should be 0.0055591054313099 pounds", function() {
    // Import the function from app.js
    

    // Use the function like its supposed to be used
    const pounds = fromYenToPound(3.5);

    // If 156.5 Yen is 0.0055591054313099 pounds, then 3.5 Yens should be (3.5 * 0.0055591054313099) pounds
    const expected = (3.5 *156.5)/0.87; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(629.5977011494252); // 1 Yen is 586.0925  pound 3.5 Yens should be = (3.5 *  167.455)
})