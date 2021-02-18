#   `12` Implementing the function

Now that the test is ready, we have to implement the function that is going to comply with that test.
The function has to be implemented in app.js because it is a part of our application, not of our tests.

Place the following code at the **beginning** of your app.js:

```js
// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // returnamos el valor
    return valueInDollar;
}
```

Make sure to update the `module.exports` located at the end of file to the following:

```js
// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar }
```

## 📝 Instructions

Corre tus pruebas de nuevo escribiendo el siguiente comando en tu terminal:

```bash
$ npm run test

```

## ✅ Comprueba que funcionó

Despues de correr el test, deberias visualizar en la consola 2 pruebas exitosas:

![12-success-test](../../assets/12-success-test.png)