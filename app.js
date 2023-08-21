// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

module.exports = { fromEuroToDollar };


module.exports = { sum, fromEuroToDollar }


//we declare the function with the exact name "fromDollarToYen"

const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInDollar to yen
    let valueInYen = valueInDollar * 109.5;
    // Return the yen value
    return valueInYen;
  };

  module.exports = { sum, fromEuroToDollar, fromDollarToYen }

//we declare function "fromYenToPound"

  function fromYenToPound(valueInYen) {
    const poundConversionRate = 0.0069;
    const valueInPound = valueInYen * poundConversionRate;
    return valueInPound;
  }

  module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }