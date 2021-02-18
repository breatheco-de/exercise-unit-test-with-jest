# `07` Your first test

Inside the `test.js` file, add the following code:

```js

// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
```

Note: Read the comments in the code so you can understand what the code is doing.