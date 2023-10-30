function randomnumber(min,max)
{
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(randomnumber(1,6))