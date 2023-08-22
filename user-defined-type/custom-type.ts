// let user1: { userName: string; age: number;}

// let user1: { userName: string, age: number, isStudent?: boolean};
// user1 = { userName: 'Abu Kowsear', age: 23};

// console.log(user1) 


type User = { userName: string, age: number }; 

let userss: User[];
userss = [];

let userX: User; 
userX = { userName: 'Abu Kowsear', age: 23 };

userss.push(userX);

let userY: User;
userY = { userName: 'Abu Kowsear2', age: 22 };

userss.push(userY);

// console.log(userss)
for (const key in userss) {
  // console.log(userss[key]['userName'])
  console.log(userss)
}
