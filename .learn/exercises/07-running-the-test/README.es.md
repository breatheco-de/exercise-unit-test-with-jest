---
tutorial: "https://www.youtube.com/watch?v=QZ_aEcCq-TU"
---

# `07` Running the test

Antes de ejecutar nuestra prueba, tenemos que actualizar nuestro archivo `package.json` para especificar el comando `test` con la palabra `jest` de la siguiente manera:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Nota: abre el `package.json` y busca los scripts de "test".

![reemplaza en scripts test](../../assets/script-test.gif)

## 📝 Instrucciones:

1. Escribe en la consola el siguiente comando:

```bash
$ npm run test
```

## 💻 Resultado esperado:

Si todo está bien, deberías obtener una salida de consola como esta:

![test exitoso](../../assets/08-test-success.png)
