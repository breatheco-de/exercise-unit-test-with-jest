test ('one euro should be 1.206 dollars' , function() {
    const {fromEuroToDollar} = require ('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2
    expect(fromEuroToDollar(3.5)).toBe(4.2)
} )

test ('1 dollar should be 127.9 yen', function() {
    const {fromDollarToYen} = require ('./app.js')
    const yen = fromDollarToYen(2000.75)
    const expected = 2000.75 * 127.9 
    expect(fromDollarToYen(2000.75)).toBe(255895.92500000002)
})

test ('1 yen should be 0.8 pound', function() {
    const {fromYenToPound} = require ('./app.js')
    const pound = fromYenToPound(25.6)
    const expected = 25.6 * 0.8
    expect(fromYenToPound(25.6)).toBe(20.480000000000004)
})