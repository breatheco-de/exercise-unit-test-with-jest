// Importar la función sum del archivo app.js
const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

// test yen 
test("One dolarr should be 156.5 yenes", function() {
   
    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(511.91588785046724); 
})

// test Pound

test("One yen should be 0.87 pounds", function() {
    
    // Hago mi comparación (la prueba)
    expect(fromYenToPound(3.5)).toBe(0.019456869009584665); 
})