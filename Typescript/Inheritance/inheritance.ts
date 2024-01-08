class count {
    userName: string;
    age: number;
  
    constructor(userName: string, age: number) {
      this.userName = userName;
      this.age = age;
    }
  
    display(): void {
      console.log(`username: ${this.userName}, age: ${this.age}`);
    }
  }
  
  class Student extends count {
    studentId: number;
  
    constructor(userName: string, age: number, studentId: number) {
      super(userName, age);
      this.studentId = studentId;
    }
    display(): void {
      console.log(
        `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
      );
    }
  }
  
  let student1 = new Student('Jane', 31, 1302020015);
  student1.display();
  
  let count1 = new count('Safaet Rabbi', 21);
  count1.display();
  
  // let user2 = new count("Ezio", 31);
  // user2.display();