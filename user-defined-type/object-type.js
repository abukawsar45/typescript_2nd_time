// let user1: { userName: string; age: number;}
// let user1: { userName: string, age: number, isStudent?: boolean};
// user1 = { userName: 'Abu Kowsear', age: 23};
// console.log(user1) 
var users;
users = [];
var userA;
userA = { userName: 'Abu Kowsear', age: 23 };
users.push(userA);
var userB;
userB = { userName: 'Abu Kowsear2', age: 22 };
users.push(userB);
// console.log(users)
for (var key in users) {
    console.log(users[key]['userName']);
}
