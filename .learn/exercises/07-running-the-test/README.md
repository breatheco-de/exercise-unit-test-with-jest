# `07` Running the test

Before running our test, we have to update our `package.json` file to specify the `test` command with the word `jest` like this:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Note: open the `package.json` and look for the "test" scripts.

![replace in scripts test](../../assets/script-test.gif)

## 📝 Instructions:

1. Type on the console the following command:

```bash
$ npm run test
```

## 💻 Expected result:

If everything is ok, you should get a console output like this:

![test success](../../assets/08-test-success.png)
