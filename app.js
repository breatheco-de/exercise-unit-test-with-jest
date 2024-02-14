// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar=(euro)=>{
    
    return parseFloat(euro)*oneEuroIs.USD;

}

const fromDollarToYen=(dollar)=>{
    
    return parseFloat(dollar*oneEuroIs.USD)*oneEuroIs.JPY;

}

const fromYenToPound=(yen)=>{
    
    return parseFloat(yen*oneEuroIs.JPY)/oneEuroIs.GBP;

}
module.exports = {fromEuroToDollar,fromDollarToYen,fromYenToPound};