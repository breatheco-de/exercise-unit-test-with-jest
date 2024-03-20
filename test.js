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

test("One dolar should be 150.4 yenes", function() {
    // Importo la funcion desde app.js
    const { dolarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = dolarToYen(3.5);

    // Si 1 dolar son 150.84 yenes, entonces 3.5 dolares debe ser (3.5 * 150.84)
    const expected = 3.5 * 150.84;

    // Hago mi comparación (la prueba)
    expect(dolarToYen(3.5)).toBe(527.94);
})

test("One dollar should be 1.07 euro", function() {

    const { euroToDollar } = require('./app.js');

    const yen = euroToDollar(3.5);

    const expected = 3.5 * 1.07;

    expect(euroToDollar(3.5)).toBe(3.745);
})

test("One pound should be 0.0052 yen", function() {

    const { yenToPound } = require('./app.js');

    const yen = yenToPound(3.5);

    const expected = 3.5 * 0.0052;

    expect(yenToPound(3.5)).toBe(0.0182);
})