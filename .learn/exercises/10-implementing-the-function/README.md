# `10` Implementing the function

Now that the test is ready, we have to implement the function that is going to comply with that test.

The function has to be implemented in app.js because it is a part of our application, not of our tests.

## 📎 Example:

Place the following code at the **beginning** of your app.js:

```js
// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
```

Make sure to update the `module.exports` located at the end of the file to the following:

```js
// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar }
```

## 📝 Instructions:

1. Run your tests again by typing the following command in your terminal:

```bash
$ npm run test
```

## 💻 Expected result:

After running the test, you should see 2 successful tests on the console:

![12-success-test](../../assets/12-success-test.png)
