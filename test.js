test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(2)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 2 * 127.9; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(2)).toBe(255.8); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pound = fromYenToPound(127.9)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 127.9 / 0.8; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(1.279)).toBe(1.0231999999999999); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})