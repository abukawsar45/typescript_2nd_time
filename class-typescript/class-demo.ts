class User{
  // properties, methods, constructor
  userName: string;
  age: number

constructor(userName:string, age:number){
  this.userName = userName;
  this.age = age;
  }
  
  displayData(): void {
    console.log(`username: ${this.userName}, age: ${this.age}`)
  }
}

// class object
// user1 - name: aks, age: 22;
// user1 - name: aks2, age: 23;

let user1 = new User('abu kaw sar', 22);
user1.displayData();