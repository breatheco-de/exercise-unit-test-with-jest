# Elige tu framework

Ahora es el momento de instalar jest, jest es una librería de terceros (pieza de código) ideal para el desarrollo de pruebas unitarias en front-end y backend.

Como la mayoría de las librerías en el mundo de javascript o node.js, la instalaremos a través de NPM.

NPM es un mercado para librerías de javascript/node, casi todas las librerías son gratuitas y de código abierto y puedes descargarlas en tan solo un par de minutos.

## 📝 Instalación

Al usar el manejador de paquetes NPM, puedes instalar cualquier paquete o librería de terceros (como jest, react, angular, etc.) ejecutando el siguiente comando:

```bash
$ npm install <your_package_name> --save
```

Nota: debes reemplazar `<your_package_name>` con el nombre de tu paquete, en nuestro caso:

```bash
$ npm install jest --save
```

Nota: si no incluyes `--save`, no se instalará correctamente.

## ✅ Verificar el éxito del proceso

Si tu paquete se instaló correctamente, encontrarás que:

- Hay una nueva carpeta en tu raíz denominada `. / Node_modules`
- Si abres tu archivo package.json, encontrarás `jest` dentro del objeto `dependencies` como este:

![Jest package](../../assets/jest-package.png)
