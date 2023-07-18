// esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7, 3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromEuroToDollar = (euro) => {
    let conversionDolar = euro * oneEuroIs["USD"]
    return conversionDolar
}

const fromDollartoEuro = (dollar) => {
    let conversionEuro = dollar / oneEuroIs["USD"]
    return conversionEuro
}

const fromDollarToYen = (dollar) => {
    let conversionEuro = fromDollartoEuro(dollar)
    let conversionYen = conversionEuro * oneEuroIs["JPY"]
    return conversionYen
}
console.log(fromDollarToYen(1))


//LA ÚLTIMA 
const fromYentoEuro = (yen) => {
    let conversionYenEuro = yen / oneEuroIs["JPY"]
    return conversionYenEuro
    console.log(fromYentoEuro(1))
}

const fromYentoPound = (yen) => {
    let conversionYenEuro = fromYentoEuro(yen)
    let conversionPound = conversionYenEuro * oneEuroIs["GBP"]
    return conversionPound
}
console.log(fromYentoPound(1))

// exporta la función para usarla en otros archivos 
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYentoPound };
