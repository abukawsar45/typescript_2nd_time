abstract class User{
  // properties, methods, constructor
  userName: string;
  age: number

constructor(userName:string, age:number){
  this.userName = userName;
  this.age = age;
  }
  
  abstract displayData(): void
}


class Student extends User{
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;

  }

  displayData(): void {
    console.log(`username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`)
  }
}

let student1 = new Student('aks5', 23, 3);
student1.displayData();



// let user2 = new User('abu kaw sar2', 23);
// user2.displayData();

// abstreact class er object create kora jabe na