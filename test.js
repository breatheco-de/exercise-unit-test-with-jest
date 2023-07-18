// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
test("One euro should be 1.2 dollars", ()=>{
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    const expected= 3.5 * 1.2;
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(expected); 
    console.log(expected);//1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});
test("One Dollar should be 138.07 Japan Yen", ()=>{
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    const totalyen= 3.5 * 138.07;
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(totalyen); 
    console.log(totalyen);
   
});
test("One Yen should be 0.0055 Pound", ()=>{
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    const totalpound= 3.5 * 0.0055;
    // hago mi comparacion (la prueba)

    expect(fromYenToPound(3.5)).toBe(totalpound);
    console.log(totalpound);
});