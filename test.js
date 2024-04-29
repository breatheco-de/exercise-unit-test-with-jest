test("1 EUR = should be 1.07 US dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("1 USD = should be 149.03 japanese yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

     // Uso la función como debe ser usada
    const { yens } = fromDollarToYen(10);

     // Si 1 dólar son 149.03 yenes, entonces 10 dolares deben ser (10 * 149.03)
    const expected = 10 * 149.03;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(10)).toBe(1490.3);
})

test("1 JPY = should be 0.0072 british pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    // Uso la función como debe ser usada
    const { pounds } = fromYenToPound(1000);

     // Si 1 yen son 0.0072 pounds, entonces 1.000 yenes deben ser (1000 * 0.0072)
    const expected = 1000 * 0.0072;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(1000)).toBe(7.2);
})