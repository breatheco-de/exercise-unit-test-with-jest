# `09` The first test

Estos son los valores de conversión entre el Euro y otras monedas:

```js
// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
```

De acuerdo con nuestras funcionalidades planificadas, necesitaremos escribir pruebas para asegurarnos de que estas funciones trabajan correctamente:

| Función           | Entrada             | Salida                                      |
| ----------------- | ------------------ | -------------------------------------------- |
| fromDollarToYen   | monto en dólares   | monto equivalente en yenes japoneses        |
| fromEuroToDollar  | monto en euros     | monto equivalente en dólares estadounidenses |
| fromYenToPound    | monto en yenes     | monto equivalente en libras esterlinas       |

Por ejemplo, la prueba que sirve para asegurarnos de que la función `fromEuroToDollar` ha sido correctamente implementada será algo como esto:

```js
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
```

## 📝 Instrucciones:

1. Copia y pega este código de testeo al final del archivo `test.js` y sigue al siguiente ejercicio.

2. Puedes ejecutar las pruebas nuevamente escribiendo `npm run test` en la línea de comandos. Aunque fallará, ya que aún debemos implementar la función `fromEuroToDollar`

## 💡 Pista:

+ Si quieres detenerte para leer un poco: https://jestjs.io/docs/getting-started
