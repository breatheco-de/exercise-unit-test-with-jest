# `07.1` Analysing the test

¿Que acaba de suceder?

Básicamente, cuando se ejecuta el comando `npm run test`, la computadora usará la librería `jest` para escanear tus archivos en busca de aquellos que contengan la palabra `test`. En nuestro caso teníamos un archivo llamado` test.js`.

Después de que jest descubre tus archivos de prueba, este comenzará a ejecutar las funciones test () dentro de esos archivos.

### Acerca de la salida:

Cada vez que realices `npm run test`, obtendrás un informe en la línea de comandos especificando cuántos archivos se encontraron que contenían la palabra "test" y cuántos de ellos se ejecutaron correctamente.

![Jest Report](../../assets/08.1jest-report.png)
