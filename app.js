const fromEuroToDollar = function(valueInEuro) {
 // Convert the given valueInEuro to dollars
 let valueInDollar = valueInEuro * 1.07;
 // return the dollar value
 return valueInDollar;
}

const fromDollarToYen = function() { 
    let valueInDollar = 1.07
    let yenValue=  valueInDollar * 156.5;
    return yenValue
}
const fromYenToPound = function(yenValue) {
let PoundValue = yenValue / 156.5 * .87;
return PoundValue;
}




    const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))





module.exports ={ sum, fromEuroToDollar, fromDollarToYen }