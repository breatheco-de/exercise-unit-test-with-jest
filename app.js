// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))
//one euro is
//funcion euros a dolares
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromEuroToDollar = (euro)=>{
    let conversionDolar = euro * oneEuroIs["USD"];
    return conversionDolar;
}
//funcion dolares a yenes 
let oneDollarIs = {
    "JPY": 138.07, // japan yen
    "EUR": 0.89, // Euro
    "GBP": 0.76, // british pound
}
const fromDollarToYen = (dollar)=>{
    let conversionYen= dollar * oneDollarIs["JPY"];
    return conversionYen;
}
//funcion yenes a libras esterlinas
let oneYenIs = {
    "USD": 0.0072, // usd dollar
    "EUR": 0.0064, // Euro
    "GBP": 0.0055, // british pound
}
const fromYenToPound = (pound)=>{
    let conversionPound= pound * oneYenIs["GBP"];
    return conversionPound;
}
// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports={sum ,fromEuroToDollar,fromDollarToYen,fromYenToPound};
