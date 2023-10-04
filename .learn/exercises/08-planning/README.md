# `08` Planning Our Functionalities

The first step in every application is to think about the project requirements and how to develop them.

In this case, we are going to develop a program that can convert a numeric value from one currency to another.

For example, given the following JS object with the currency value conversion:

```js
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
```

You can be confident that 1 EUR is 1.07 USD:

```txt
1 EUR (Euro) = 1.07 USD (US Dollar)
```

Our program needs to have functions to convert `fromDollarToYen`, `fromEuroToDollar`, and `fromYenToPound`.

| Function name     | Input             | Output                            |
| ----------------- | ----------------- | ----------------------------------|
| fromDollarToYen   | a Dollar amount   | equivalent amount in Japan YEN    |
| fromEuroToDollar  | a Euro amount     | equivalent amount in US Dollar    |
| fromYenToPound    | a Yen amount      | equivalent amount in British Pound|
