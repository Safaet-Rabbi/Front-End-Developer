type People = { userName: string, userId: number };

let man: People[];
man = [];

let man1: People;
man1 = { userName: 'Safaet', userId: 101 };
users.push(man1);

let man2: People;
man2 = { userName: 'Samantha', userId: 102 };
users.push(man2);

let man3: People;
man3 = { userName: 'Euni', userId: 103 };
users.push(man3);

// console.log(users);

type RequestType = 'GET' | 'POST';
let getRequest: RequestType;
getRequest = 'GET';

function requestHandler(requestType: RequestType) {
  console.log(requestType);
}
requestHandler('GET');