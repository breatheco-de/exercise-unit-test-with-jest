# Planning our functionalities

The first step in every application is to think about the project requirements and how to developm them.

In this case we are going to develop a program that can converts a numeric value from one currency to another.

For example:

Given the following js object with the currency value conversion:

```js
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
```

You can be confident that 1 USD is 1.2 EUR:

```txt
1 USD (US Dollar) = 1.2 EUR (Euro)
```

Our program needs to have functions to convert `fromDollarToYen`, `fromEuroToDollar` and `fromYanToPound`.

| Function name     | Input             | Output                            |
| ----------------- | ----------------- | ----------------------------------|
| fromDollarToYen   | a dollar amount   | equivalent amount in Japan YEN    |
| fromEuroToDollar  | a Euro amount     | equivalent amount in US Dollar    |
| fromYanToPound    | a Yan amount      | equivalent amount in England Pound|

