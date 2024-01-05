
const user = {
    id:100,
    name:21,
    education:{
        degree: "bachelors",
    },
};

const {
    education: {degree},
} =user;
console.log(degree);


var numbers =[1,2,3,4,5];
var [,a,,,b]=numbers;
console.log(a,b);

var values = [1,2,[23,54,76],5,8];
var [,,[,,a],,b]=values;
console.log(a,b);
var a=1;
var b=3;
var [b,a]=[a,b];
console.log(a,b);
