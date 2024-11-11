// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

// Valores de conversión
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87  // libra esterlina
};

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}



// Función para convertir de dólares a yenes
function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs.USD; // Convertir dólares a euros
    let yen = euros * oneEuroIs.JPY;     // Convertir euros a yenes
    return yen;
}

// Función para convertir de yenes a libras
function fromYenToPound(yen) {
    let euros = yen / oneEuroIs.JPY;     // Convertir yenes a euros
    let pounds = euros * oneEuroIs.GBP;  // Convertir euros a libras
    return pounds;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }