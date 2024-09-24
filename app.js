// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Función para convertir de dolares a yenes
const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs.USD;
    const yenes = euros * oneEuroIs.JPY;
    return yenes;
}

// Función para convertir de euros a dolares
const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
}

// Función para convertir de yenes a libras
const fromYenToPound = (yenes) => {
    const euros = yenes / oneEuroIs.JPY;
    const pounds = euros * oneEuroIs.GBP;
    return pounds;
}

// Exporta la función para usarla en otros archivos
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } 