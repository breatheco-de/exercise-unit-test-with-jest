const sum  = (a , b) => {
    return a + b
}
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
 const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2
    return valueInDollar;
 }
 const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 127.9
    return valueInYen
 }
 const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen * 0.8
    return valueInEuro
 }

 module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }