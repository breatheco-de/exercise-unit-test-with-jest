const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs.USD
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen  = function(valueInDY){
    // convertimos el valor DE dolares a yen
    let valueInDY=((1*1)/oneEuroIs.USD);
    let valueyen= valueInDY * oneEuroIs.JPY;
    // retornamos el valor
    return valueyen;
}
const fromYenToPound = function(valueInYP){
    // convertimos el valor de yen a libras
    let valueInYP=((1*1)/oneEuroIs.JPY);
    let value2 = valueInYP * oneEuroIs.GBP ;
    // retornamos el valor
    return value2;
}
//console.log("Hello World");
// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
// solo un registro en consola para nosotros.
console.log(sum(7,3));
// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum,fromEuroToDollar,fromDollarToYen,fromYenToPound };
/*
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
function fromDollarToYen(){
    //let usd=oneEuroIs.USD;
    //let jpy=oneEuroIs.JPY;
    let a= ((1*1)/oneEuroIs.USD)*oneEuroIs.JPY;
    //let b = a*oneEuroIs.JPY;
    console.log (a);
    return a;
}
function fromEuroToDollar(){
    let b= 1*oneEuroIs.USD;
    console.log (b);
    return b;
}
function fromYenToPound(){
    let c= ((1*1)/oneEuroIs.JPY)*oneEuroIs.GBP;
    console.log (C);
    return C;
}*/