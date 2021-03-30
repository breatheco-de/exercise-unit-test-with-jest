# Prueba Unitaria con Jest

```
Importante: 💻  Este ejercicio es interactivo!
Sigue las instrucciones.
```

La mayoría de los desarrolladores hoy en día no solo deben escribir código, sino que también deben escribir código para probar su propio código 😱, sí ... de verdad.

Hoy usaremos el [jest framework](https://jestjs.io/) para crear nuestras primeras pruebas unitarias.

## 🌱  Cómo iniciar este proyecto

Este proyecto viene con los archivos necesarios para empezar a trabajar, pero tienes dos opciones para empezar:

a) Abrir este link con Gitpod en tu navegador: https://gitpod.io#https://github.com/breatheco-de/exercise-unit-test-with-jest.git

b) Clonar este repositorio localmente en tu computador:
```sh
$ git clone https://github.com/breatheco-de/exercise-unit-test-with-jest.git
```
💡 Important: Recuerda crear un nuevo repositorio, actualiza el remoto (`git remote set-url origin <your new url>`), y guarda tu código en tu nuevo repositorio usando `add`, `commit` y `push`.

Luego sigue las siguientes instrucciones:

1. Instala learnpack globalmente (Si es que aún no lo tienes): `$ npm i learnpack -g`
2. Instala este learning package usando learnpack: `$ learnpack install unit-test-with-jest`
3. Entra a la carpeta del ejercicio: `$ cd exercise-unit-test-with-jest`
4. Comienza el ejercicio: `$ learnpack start`

## ¿SObre que trata este ejercicio?

Usaremos la librería JEST para crear un programa capaz de convertir valores numéricos de una divisa a otra:

| Nombre Función    | Descripción                                                           |
| ----------------- | --------------------------------------------------------------------- |
| fromDollarToYen   | Recibe una monto en dólares y devuelve el monto equivalente en yenes japoneses. |
| fromEuroToDollar  | Recibe una monto en euros y devuelve el monto equivalente en dólares estadounidenses.|
| fromYanToPound    | Recibe una monto en Yen y devuelve el monto equivalente en libras esterlinas.  |

