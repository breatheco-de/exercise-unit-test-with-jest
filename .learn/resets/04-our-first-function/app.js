const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen  = function(valueInDollar){
    // convertimos el valor a Yenes
    valueInDollar = 1.2;
    let valueInYen = valueInDollar * 153.48;
    // retornamos el valor
    return valueInYen;
}

const fromYentoPound = function(valueInYen) {
    valueInYen = 127.9;
    let valueInPound = valueInYen * 0.8;
    return valueInPound;
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYentoPound };