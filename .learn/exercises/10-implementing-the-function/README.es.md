# `10` Implementing the function

Ahora que la prueba está lista, tenemos que implementar la función que deberá satisfacer esa prueba.

La función debe ser implementada en app.js porque es parte de nuestra aplicación, no de nuestras pruebas.

## 📎 Ejemplo:

Coloca el siguiente código al **comienzo** de tu app.js:

```js
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
```

Asegúrate de actualizar el `module.exports` ubicado al final del archivo de esta forma:

```js
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar }
```

## 📝 Instrucciones:

1. Ejecuta las pruebas nuevamente escribiendo lo siguiente en el terminal:

```bash
$ npm run test
```

## 💻 Resultado esperado:

Después de ejecutar tu prueba deberías tener un reporte exitoso con dos pruebas exitosas de esta forma:

![tests exitosos](../../assets/12-success-test.png)
