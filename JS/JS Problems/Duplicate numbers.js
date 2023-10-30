const numbers = [1,2,3,4,5,6,8,2,7,3,7,9,23,45,45];
const dup=numbers.filter(function(value,index,array)
{
    return array.indexOf(value)!=index
});

console.log(dup);