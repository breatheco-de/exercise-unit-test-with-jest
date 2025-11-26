// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07,  // us dollar
    "GBP": 0.87,  // british pound
};

function fromDollarToYen(dollarAmount) {
    let euroAmount = dollarAmount / oneEuroIs.USD;
    let yenAmount = euroAmount * oneEuroIs.JPY;
    return yenAmount;
}

function fromEuroToDollar(euroAmount) {
    return euroAmount * oneEuroIs.USD;
}

function fromYenToPound(yenAmount) {
    let euroAmount = yenAmount / oneEuroIs.JPY;
    let poundAmount = euroAmount * oneEuroIs.GBP;
    return poundAmount;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };