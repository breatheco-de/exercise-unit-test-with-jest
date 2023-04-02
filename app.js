// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(dollar) {
    let yen = (dollar / oneEuroIs.USD) * oneEuroIs.JPY;
    return yen;
}

function fromEuroToDollar(euro) {
    let dollar = euro * oneEuroIs.USD;
    return dollar;
}

function fromYenToPound(yen) {
    let pound = (yen / oneEuroIs.JPY) * oneEuroIs.GBP;
    return pound;
}

 
module.exports = {fromEuroToDollar, fromDollarToYen,fromYenToPound};