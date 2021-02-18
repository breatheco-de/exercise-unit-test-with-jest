#   `12` Implementando la función

Ahora que la prueba está lista, tenemos que implementar la función que deberá satisfacer esa prueba.
La función debe ser implementada en app.js porque es parte de nuestra aplicación, no de nuestras pruebas.

Coloca el siguiente código al **comienzo** de tu app.js:

```js
// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the doller value
    return valueInDollar;
}
```

Asegúrate de actualizar el `module.exports` ubicado al final del archivo de esta forma:

```js
// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar }
```

## 📝 Instrucciones

Ejecuta las pruebas nuevamente escribiendo lo siguiente en el terminal:

```bash
$ npm run test

```

## ✅ Prueba de éxito
Después de ejecutar tu prueba deberías tener un reporte exitoso con dos pruebas exitosas como este:

![12-success-test](../../assets/12-success-test.png)