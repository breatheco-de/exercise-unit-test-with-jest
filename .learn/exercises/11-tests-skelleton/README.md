# `11` The first test

This are the convertion ratios between **Euro €** and other currencies today:

```js
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
```

According to our planned functionalities we will need to write tests to make sure these functions work properly:

| Function name     | Input             | Output                            |
| ----------------- | ----------------- | ----------------------------------|
| fromDollarToYen   | a dollar amount   | equivalent amount in Japan YEN    |
| fromEuroToDollar  | a Euro amount     | equivalent amount in US Dollar    |
| fromYanToPound    | a Yan amount      | equivalent amount in England Pound|

For example the test function to make sure that the function `fromEuroToDollar` has been successfully implemented will be something like this:

```js

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
```

## 📝 Instructions

1. Copy and paste this test code at the end of the test.js file.
2. Run the tests again by typing `npm run test` on your command line.