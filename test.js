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
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 156.5 / 1.07 yen", function() {
    // Importo la función desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Prueba para convertir dólares a yenes
    const yen = fromDollarToYen(5);

    // Si 1 euro es 1.07 dólares y 1 euro es 156.5 yen, entonces 1 dólar son 156.5 / 1.07 yen
    const expected = (5 / 1.07) * 156.5;

    // Hago mi comparación (la prueba)
    expect(yen).toBeCloseTo(expected, 5);
});

test("One yen should be 0.87 / 156.5 pounds", function() {
    // Importo la función desde app.js
    const { fromYenToPound } = require('./app.js');

    // Prueba para convertir yenes a libras
    const pounds = fromYenToPound(1000);

    // Si 1 yen es 1/156.5 euros y 1 euro es 0.87 libras, entonces 1 yen es (0.87 / 156.5) libras
    const expected = (1000 / 156.5) * 0.87;

    // Hago mi comparación (la prueba)
    expect(pounds).toBeCloseTo(expected, 5);
});
