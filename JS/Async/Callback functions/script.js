function display(some) {
    console.log(some);
    
}

function calculator(num1,num2,callback) {
    let sum = num1+num2;
    if(callback)
    {
        callback(sum);
    }
    return sum;
    
}

const result = calculator(6,8);
console.log(result);