function linearsearch(arr,val)
{
    const length =arr.length;
    for(let i=0;i<length;i++)
    {
        if(arr[i]==val)
        {
            return i;
        }
    }
    return 'Not found!';
}
console.log(linearsearch(['1','6','7','2','4'],'7'));