# `04` Our first function

To create a small example, we want you to fill the content of `app.js` with the `sum` function, that adds two given numbers.

Don't worry! We will eventually develop the tests that ensures this function works perfectly.

## 📝 Instructions:

1. Replace the entire `app.js` file content with the following function:

```js
// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum };
```

## 💻 Expected result:

Write on the console the following command to run your application:

```bash
$ node app.js
```

You should see the number `10` on the terminal.
