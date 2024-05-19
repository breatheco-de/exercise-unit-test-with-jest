//const {sum} = require('./app.js');
const {fromDollarToYen,fromYenToPound,fromEuroToDollar,sum}= require('./app.js');

test ('adds 14 + 9 to equal 23', () =>
    {
        let total = sum(14,9);
        expect(total).toBe(23)
    }) 
    test("One euro should be 1.07 dollars", function() {
        // Importo la funcion desde app.js
        //const { fromEuroToDollar } = require('./app.js');
    
        // Uso la función como debe ser usada
        const dollars = fromEuroToDollar(3.5);
    
        // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
        const expected = 3.5 * 1.07;
    
        // Hago mi comparación (la prueba)
        expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
    })
    test(" Un dolar equivale a 156.5 Yen", function(){
       // const {fromDollarToYen} = require('./app.js');
        const Yen = fromDollarToYen(5);
        const expected= 3.5 * 156.5;
        expect(fromDollarToYen(5)).toBe(782.5);
    })
    test(" Un Yen equivale a 0.87 Pound", function(){
       // const {fromYenToPound} = require('./app.js');
        const Yen = fromYenToPound(2);
        const expected= 2 * 0.87;
        expect(fromYenToPound(2)).toBe(1.74);
    })


    