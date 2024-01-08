"use strict";
let person = { name: 'Alice', age: 30 };
let user;
user = {
    name: 'anisul islam',
    age: 32,
};
let names;
names = { name1: 'anis' };
console.log(names);
let users;
users = [];
let user1;
user1 = { userName: 'anis', userId: 101 };
users.push(user1);
let user2;
user2 = { userName: 'rabu', userId: 102 };
users.push(user2);
for (const key in users) {
    console.log(users[key]);
}
