# `11` La primera prueba

Estos son los ratios de conversión entre **Euro €** y otras monedas:

```js
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
```

De acuerdo con nuestras funcionalidades planificadas, necesitaremos escribir pruebas para asegurarnos de que estas funciones trabajan correctamente:

| Función           | Entrada             | Salida                                      |
| ----------------- | ------------------ | -------------------------------------------- |
| fromDollarToYen   | monto en dólares   | monto equivalente en yenes janponeses        |
| fromEuroToDollar  | monto en euros     | monto equivalente en dólares estadounidenses |
| fromYenToPound    | monto en yenes     | monto equivalente en Libras esterlinas       |

Por ejemplo, la prueba que sirve para asegurarnos de que la función `fromEuroToDollar` ha sido correctamente implementada será algo como esto:

```js

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})
```

Más información : https://jestjs.io/docs/getting-started

## 📝 Instrucciones

1. Copia y pega este código de prueba al final del archivo test.js.
2. Ejecuta las pruebas nuevamente escribiendo `npm run test` en la línea de comandos.