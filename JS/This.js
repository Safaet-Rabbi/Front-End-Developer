const person1 = {
    fullname: function()
    {
        return this.firstname + " " + this.lastname;
    }
}
const person2 = 
{
    firstname : "Safaet",
    lastname : "Rabbi",
}
console.log(person1.fullname.call(person2));