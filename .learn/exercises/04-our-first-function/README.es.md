---
tutorial: "https://www.youtube.com/watch?v=LuDQRz11QOU"
---

# `04` Our first function

Para crear un pequeño ejemplo, queremos que llenes el contenido de `app.js` con la función: `sum`, que sume dos números dados. 

¡Descuida! Vamos a desarrollar (eventualmente) las pruebas que aseguren que esa función funciona perfectamente.

## 📝 Instrucciones:

1. Reemplaza todo el contenido del archivo `app.js` con la siguiente función:

```js
// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };
```

## 💻 Resultado esperado:

Escribe en la consola el siguiente comando para ejecutar tu aplicación:

```bash
$ node app.js
```

Deberías ver el número `10` en la terminal.
