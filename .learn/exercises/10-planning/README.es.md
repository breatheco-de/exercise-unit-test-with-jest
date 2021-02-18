# `10` Planificando nuestras funcionalidades

El primer paso en cada aplicación es pensar sobre los requisitos del proyecto y cómo desarrollarlos.

En este caso desarrllaremos un programa que convierte un valor numérico de una moneda a otra.

Por ejemplo:

Dado el siguiente objeto js con los valores de conversión de las monedas:

```js
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
```

Puedes tener seguridad de que 1 EUR es 1.2 USD:

```txt
1 EUR (Euro) = 1.2 USD (US Dollar)
```

Nuestro programa necesita las siguientes funciones para convertir `fromDollarToYen`, `fromEuroToDollar` y `fromYanToPound`.

| Función           | Entrada             | Salida                                      |
| ----------------- | ------------------ | -------------------------------------------- |
| fromDollarToYen   | monto en dólares   | monto equivalente en yenes janponeses        |
| fromEuroToDollar  | monto en euros     | monto equivalente en dólares estadounidenses |
| fromYenToPound    | monto en yenes     | monto equivalente en Libras esterlinas       |
