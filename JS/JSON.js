//Convert JSON to Object
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj =JSON.parse(text);

console.log(obj);
console.log(text);
console.log(obj.employees[0].firstName);

//convert object to JSON
let person = {
    firstName : "Safaet",
     LastName : "Rabbi"
};

console.log(JSON.stringify(person));