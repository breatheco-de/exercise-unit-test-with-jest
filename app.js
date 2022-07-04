const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 127.9;
    return valueInYen
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}



const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

module.exports = { sum };
module.exports = { sum, fromEuroToDollar }
module.exports = { sum, fromDollarToYen }