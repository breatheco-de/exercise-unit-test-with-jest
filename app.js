// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromEurToDol = function (valueInEur) {
    let valueInDol = valueInEur * 1.07
    return valueInDol;
}
const fromDolToYen = function (valueInDol) {
    let valueInYen = valueInDol * 156.5;
    return valueInYen;
}

const fromYenToPound = function (valueInYen) {
    let valueInPound = valueInYen * 0.87;
    return valueInPound;
}

const sum = (a, b) => {
    return a + b
}
console.log(sum(7, 3))

module.exports = { sum, fromEurToDol, fromDolToYen, fromYenToPound };