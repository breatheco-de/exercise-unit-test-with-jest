# `07` Tu primera prueba

Dentro del archivo `test.js`, agrega el siguiente código:

```js

// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
```

Nota: lea los comentarios en el código para que pueda comprender lo que hace el código.