const sum = (x, y)=>{
    return x + y
};

const fromEuroToDollar = (num) =>{
    return num * 1.07
};

const fromDollarToYen = (num) =>{
    return num * 156.5
};

const fromYenToPound = (num) =>{
    return num * 0.005587
};


console.log(fromEuroToDollar(3.5));
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

