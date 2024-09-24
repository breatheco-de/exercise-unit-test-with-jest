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
    // Importo la función desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dolares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro son 1.07 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.07)
});

test("One dollar should be 156.5 yenes", function() {
    // Importo la función desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Si 1 dolar son 156.5 yenes, entonces 1.07 dolares debe ser (1.07 * 156.5)
    const expected = (1 / 1.07) * 156.5;


    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(1)).toBeCloseTo(expected, 3); // 1 dolar son 156.5 yenes, entonces 1.07 dolares deberian ser = ()
});

test("One yen should be 0.87 pounds", function() {
    // Importo la función desde app.js
    const { fromYenToPound} = require('./app.js');

    // Si 1 yen son 0.87 pounds, entonces 156.5 yenes debe ser ((1 / 0.87) * 156.5)
    const expected = (1 / 156.5) * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(1)).toBeCloseTo(expected, 3);
})