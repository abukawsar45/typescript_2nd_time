// build in type : number, string, boolean, void, undefined, null

let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isStudent: boolean;


userId = 34;
firstName = 'Abu';
lastName = 'Kaw Sar';
fullName = firstName.concat(lastName);
isStudent = false;
console.log(fullName);

console.log(fullName);
console.log(fullName.split(' '));
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());

const display = (): void => {
  console.log('first--1st')
}

function display2 ():void {
  console.log('first2')
}
display();
display2();