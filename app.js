
let oneEuroIs = {
    "JPY": 156.5, // 1 euro = 156.5 yenes
    "USD": 1.07,  // 1 euro = 1.07 dólares
    "GBP": 0.87   // 1 euro = 0.87 libras
};

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

// app.js
// We declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convierte dólares a euros
    let valueInEuro = valueInDollar / oneEuroIs.USD;

    // Convierte euros a yenes
    let valueInYen = valueInEuro * oneEuroIs.JPY;

    return valueInYen; // Devuelve el valor en yenes
};

const fromYenToPound = function(valueInYen) {
    // Convierte yenes a euros
    let valueInEuro = valueInYen / oneEuroIs.JPY;

    // Convierte euros a libras
    let valueInPound = valueInEuro * oneEuroIs.GBP;

    return valueInPound; // Devuelve el valor en libras
};

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};