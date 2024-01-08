let person: object = { name: 'Alice', age: 30 };

let user: {
  name: string;
  age: number;
};

user = {
  name: 'anisul islam',
  age: 32,
};

let names: object;
names = { name1: 'anis' };
console.log(names);

let users: object[];
users = [];

let user1: { userName: string; userId: number };
user1 = { userName: 'anis', userId: 101 };
users.push(user1);

let user2: { userName: string; userId: number };
user2 = { userName: 'rabu', userId: 102 };

users.push(user2);

for (const key in users) {
  console.log(users[key]);
}