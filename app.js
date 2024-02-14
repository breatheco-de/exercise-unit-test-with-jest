// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    return valueInDollar * 146.26;

}

const fromYenToPound = function (valueInPound) {
    return valueInPound * 0.0055;
}

const sum = (a, b) => {
    return a + b
}

console.log(sum(7, 3));

module.exports = { sum, fromEuroToDollar,fromDollarToYen, fromYenToPound};