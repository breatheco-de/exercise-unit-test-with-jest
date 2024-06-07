// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar){
    // tengo que pasar los dolares a euros y luego se trasfrma a yens
    let valueInEuro = valueInDollar / oneEuroIs.USD
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    return valueInYen;
 }
 
const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen / oneEuroIs.JPY
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return valueInPound;
} 

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};