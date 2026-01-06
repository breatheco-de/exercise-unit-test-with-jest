let oneEuroIs = {
    "JPY": 156.5, // Japan Yen
    "USD": 1.07, // US dollar
    "GBP": 0.87, // British pound
};

function fromEuroToDollar(Euros) {
    return Euros * oneEuroIs["USD"];
}

function fromDollarToYen(Dollars) {
    return (Dollars / oneEuroIs["USD"]) * oneEuroIs["JPY"];
}

function fromYenToPound(Yen) {
    return (Yen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };