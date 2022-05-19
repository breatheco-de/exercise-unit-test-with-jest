# `5` Nuestra primera función

Para crear un pequeño ejemplo, queremos que llenes el contenido de `app.js` con una función 'sum' que sume dos números dados y vamos a desarrollar (eventualmente) las pruebas que aseguren que esa función funciona perfectamente.

## 📝 Instrucciones

Reemplaza todo el contenido del archivo `app.js` con la siguiente función:

```js
// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };
```

## ✅ Verificar el éxito del Proceso

Escribe en la consola el siguiente comando para ejecutar tu aplicación:

```bash
$ node app.js
```

Deberías ver el número `10` en la terminal.