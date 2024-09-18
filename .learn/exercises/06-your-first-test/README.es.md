---
tutorial: "https://www.youtube.com/watch?v=2PVKwUsgTHU"
---


# `06` Your first test

## 📝 Instrucciones:

1. Dentro del archivo `test.js`, agrega el siguiente código:

```js
// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
```

## 💡 Pista:

+ Lee los comentarios en el código para poder comprender lo que hace el código. 
