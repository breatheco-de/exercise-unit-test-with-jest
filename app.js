

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (value) => {
    return parseFloat((value * oneEuroIs.USD).toFixed(2));
    
}

const fromDollarToYen = (value) => {
    let euros = value / oneEuroIs.USD;
    return parseFloat((euros * oneEuroIs.JPY).toFixed(2));
  
}

const fromYenToPound = (value) => {
    let euros = value / oneEuroIs.JPY;
     return parseFloat((euros * oneEuroIs.GBP).toFixed(2));
     
}

console.log(fromEuroToDollar(100));
console.log(fromDollarToYen(100));
console.log(fromYenToPound(100));

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound}