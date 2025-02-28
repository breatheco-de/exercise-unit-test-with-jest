function fromDollarToYen(dollars) {
    return dollars * 156.5; 
}


function fromYenToPound(yen) {
    return yen * (0.87 / 156.5);  
}

console.log(fromDollarToYen(1));  
console.log(fromDollarToYen(10)); 
console.log(fromDollarToYen(100)); 


console.log(fromYenToPound(1));   
console.log(fromYenToPound(100)); 
console.log(fromYenToPound(1000)); 
