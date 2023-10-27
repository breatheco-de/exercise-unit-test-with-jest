// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected);
})

test("One dollar should be 156.5 yens", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    const yens = fromDollarToYen(3);

    // Si 1 dolar son 156.5 yen, entonces 3 dolares debe ser (3 * 156.5)
    const expected = 3 * 156.5;

    // Hago mi comparación (la prueba)
    expect(yens).toBe(expected);
})

test("One yen should be 0.87 pound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    const pounds = fromYenToPound(2);

    // Si 1 yen son 0.87 pounds, entonces 2 yen debe ser (2 * 0.87)
    const expected = 2 * 0.87;

    // Hago mi comparación (la prueba)
    expect(pounds).toBe(expected);
})
