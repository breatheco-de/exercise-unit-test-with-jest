const {fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

test('Cuántos son 100€ en dólares', () => {
    let result = fromEuroToDollar(100)
    expect(result).toBe(120)
})


test('¿Cuántos son 100€ en Yenes?', () => {
    let result = fromDollarToYen(100)
    expect(result).toBe(10658.33);
})

test('¿Cuantos son 5000 Yenes en pounds?', () => {
    let result = fromYenToPound(5000)
    expect(result).toBe(31.27);
})


