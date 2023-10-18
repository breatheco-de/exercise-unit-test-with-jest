# `09` The first test

These are the conversion ratios between Euro and other currencies today:

```js
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
```

According to our planned functionalities, we will need to write tests to make sure these functions work properly:

| Function name     | Input             | Output                            |
| ----------------- | ----------------- | ----------------------------------|
| fromDollarToYen   | a Dollar amount   | equivalent amount in Japan YEN    |
| fromEuroToDollar  | a Euro amount     | equivalent amount in US Dollar    |
| fromYenToPound    | a Yen amount      | equivalent amount in British Pound|

For example, the test function to make sure that the function `fromEuroToDollar` has been successfully implemented. It is something like this:

```js
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
```

## 📝 Instructions:

1. Copy and paste this test code at the end of the `test.js`.

2. You can run the tests again by typing `npm run test` on your command line. It will fail though, we still need to implement the function `fromEuroToDollar`.

## 💡 Hint:

+ If you want to stop and read for a bit: https://jestjs.io/docs/getting-started
