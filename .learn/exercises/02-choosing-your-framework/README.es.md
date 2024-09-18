---
tutorial: "https://www.youtube.com/watch?v=rWeobGKEExk"
---

# `02` Choosing your framework

Ahora es el momento de instalar Jest.

Jest es una librería de terceros (pieza de código) ideal para el desarrollo de pruebas unitarias en front-end y back-end.

Como la mayoría de las librerías en el mundo de JavaScript o Node.js, la instalaremos a través de NPM.

NPM es un mercado para librerías de JavaScript/Node, casi todas las librerías son gratuitas y de código abierto y puedes descargarlas en tan solo un par de minutos.

## 📝 Instrucciones: 

1. Al usar el gestor de paquetes NPM, puedes instalar cualquier paquete o librería de terceros (como Jest, React, Angular, etc.) ejecutando el siguiente comando:

```bash
$ npm install <your_package_name> --save
```

2. Debes reemplazar `<your_package_name>` con el nombre de tu paquete, en nuestro caso:

```bash
$ npm install jest --save
```

Nota: si no incluyes `--save`, no se instalará correctamente.

## Resultado esperado:

Si tu paquete se instaló correctamente, encontrarás que:

+ Hay una nueva carpeta en tu raíz denominada `./node_modules`

+ Si abres tu archivo `package.json`, encontrarás `jest` dentro del objeto `dependencies` de esta forma:

![Jest package](../../assets/jest-package.png)
