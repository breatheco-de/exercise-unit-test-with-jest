
// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

const { sum , fromEuroToDollar, fromDollarToYen, fromYenToPound } = require ('./app.js');

test('adds 14 + 9 to equal 23', ()=>{
    let total = sum(14,9);

    expect(total).toBe(23);
});

test("un euro son 1.07 dollars", () => {
    let pasar_eurodolar = fromEuroToDollar (3);
    expect(pasar_eurodolar).toBe(3.21); //1 euro son 1.07 dolares, entonces 3 euros deberian ser = (3 * 1.07)
});
test ("un dolar es igual a 146.33 yen", () => {
    let pasar_dolaryen = fromDollarToYen (1);
    let resultDY = (1/1.07) * 156.5;
    expect(pasar_dolaryen).toBe(resultDY);
});
test("Un yen es igual a 0.00551 Libras esterlinas", () => {
    let pasar_yenlibra = fromYenToPound (1);
    let result = (1/156.5) * 0.87; 
    expect(pasar_yenlibra).toBe(result);
});
