// app.js file content
//console.log("Hello Work")

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    let valueInDollartoYen = valueInDollar * 156.5;
    return valueInDollartoYen;
}
const fromYenToPound = function(valueInYen){
    let valueInYentoPound = valueInYen *0.87;
    return valueInYentoPound;
}
const sum =(a,b) => {
    return a + b
}  

console.log (sum(5,5))
module.exports =  { sum, fromEuroToDollar, fromDollarToYen,fromYenToPound
 }
 
 