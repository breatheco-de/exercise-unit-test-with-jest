# `5` Our first function

To create a small example we want you to fill the content of the `app.js` with a function sum that sums two given numbers and we are going to develop (eventually) the tests that make sure for that function works perfect.

## 📝 Instructions

Replace the entire file content with the following function:

```js
// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(7,3)

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };
```

## ✅ Check for success

Write on the console the following command to run your application:

```bash
$ node app.js
```

You should see the number `10` on the terminal.