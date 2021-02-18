#   `12` Implementing the function

Now that the test is ready, we have to implement the function that is going to comply with that test.
The function has to be implemented in app.js because it is a part of our application, not of our tests.

Place the following code at the **beginning** of your app.js:

```js
// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the doller value
    return valueInDollar;
}
```

Make sure to update the `module.exports` located at the end of file to the following:

```js
// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar }
```

## 📝 Instructions

Run the tests again by typing the following command on the terminal:

```bash
$ npm run test

```

## ✅ Check for success

After you run your test you should have a successfull report with 2 successfull tests like this:

![12-success-test](../../assets/12-success-test.png)