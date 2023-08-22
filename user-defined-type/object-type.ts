// let user1: { userName: string; age: number;}

// let user1: { userName: string, age: number, isStudent?: boolean};
// user1 = { userName: 'Abu Kowsear', age: 23};

// console.log(user1) 

let users: object[];
users = [];

let userA: {userName: string, age: number}
userA = { userName: 'Abu Kowsear', age: 23 };

users.push(userA);

let userB: {userName: string, age: number}
userB = { userName: 'Abu Kowsear2', age: 22 };

users.push(userB);

// console.log(users)
for (const key in users) {
  console.log(users[key]['userName'])
}
