# `07` Running the test

Before running our test we have to update your package.json file to specify the `test` command with the word `jest` like this:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Note: open the package.json and look for the "test" scripts.

![script test](../../assets/script-test.gif)

## 📝 Instructions:

1. Type on the console the following command:

```
$ npm run test
```

## Expected result:

If everything is ok, you should get a console output like this:

![test success](../../assets/08-test-success.png)