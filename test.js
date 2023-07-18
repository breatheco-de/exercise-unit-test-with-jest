// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.2 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

// Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3,5)

// if 1 euro are 1.30 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2;

    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(expected); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be X yen", () => {
    // importo la funcion desde app.js
    const {  fromDollarToYen } = require('./app.js')

// Use the function like its supposed to be used
    const yen = fromDollarToYen(3.5)

    const expected = (3.5 / 1.2) * 127.9;

    // hago mi comparacion (la prueba)
    expect(yen).toBe(expected); 
})


test("One yen should be X pound", () =>{
    // importo la funcion desde app.js
    const { fromYentoPound } = require('./app.js')

// Use the function like its supposed to be used

    const pound =  fromYentoPound (3.5)
    const expected = (3.5 / 127.9) * 0.8;
    
    // hago mi comparacion (la prueba)
    expect(pound).toBe(expected); 
})