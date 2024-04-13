
const fromEuroToDollar = function(valueInEuro) {
    
    let valueInDollar = valueInEuro * 1.07;
   
    return valueInDollar;
}

const fromDollarToYen = function(valueInDolar) {
    
   let valueInYenes = valueInDolar * 156.5;
    return valueInYenes;
}

const fromYenesTolibras = function(valueInYenes) {
    
  let valueInlibras = valueInYenes * 0.87;
return valueInlibras;
}


const sum=(a,b)=>{
    return a+b
}
console.log(sum(7,3))


module.exports = { sum, fromEuroToDollar ,fromDollarToYen,fromYenesTolibras}

