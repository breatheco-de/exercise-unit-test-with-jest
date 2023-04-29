let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const twoFinancial = (x) =>{
    return Number(x.toFixed(2));
  }
  const moneyInEurToConvert = 100; 
  const moneyInYenToConvert = 5000;

  const euroToGBP = oneEuroIs.GBP;
  const euroToYen = oneEuroIs.JPY;
  const usEurToDollar = oneEuroIs.USD;


  const fromEuroToDollar = () => {
    let eurToDollar = moneyInEurToConvert * usEurToDollar;
    return twoFinancial(eurToDollar);
  }
  console.log(fromEuroToDollar())



  const fromDollarToYen = () => {


    let eurToDollar= moneyInEurToConvert / usEurToDollar;
    let dollarToYen = eurToDollar * euroToYen;

    return twoFinancial(dollarToYen);

};
console.log(fromDollarToYen())





const fromYenToPound = () => {
    
    let yenToEur = moneyInYenToConvert / euroToYen;

    let eurToGBP = yenToEur * euroToGBP;
    

    return twoFinancial(eurToGBP);

}
console.log(fromYenToPound())

module.exports = {fromEuroToDollar ,fromDollarToYen, fromYenToPound}