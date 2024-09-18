---
tutorial: "https://www.youtube.com/watch?v=XtWhSg2Dfn0"
---

# `08` Planning Our Functionalities

El primer paso en cada aplicación es pensar sobre los requisitos del proyecto y cómo desarrollarlos.

En este caso desarrollaremos un programa que convierte un valor numérico de una moneda a otra.

Por ejemplo, dado el siguiente objeto js con los valores de conversión de las monedas:

```js
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
```

Puedes tener seguridad de que 1 EUR es 1.07 USD:

```txt
1 EUR (Euro) = 1.07 USD (US Dollar)
```

Nuestro programa necesita las siguientes funciones para convertir `fromDollarToYen`, `fromEuroToDollar` y `fromYenToPound`.

| Función           | Entrada            | Salida                                       |
| ----------------- | ------------------ | -------------------------------------------- |
| fromDollarToYen   | monto en dólares   | monto equivalente en yenes japoneses         |
| fromEuroToDollar  | monto en euros     | monto equivalente en dólares estadounidenses |
| fromYenToPound    | monto en yenes     | monto equivalente en libras esterlinas       |
