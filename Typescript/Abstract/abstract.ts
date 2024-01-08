abstract class member {
    userName: string;
    age: number;
  
    constructor(userName: string, age: number) {
      this.userName = userName;
      this.age = age;
    }
  
    abstract display(): void;
  }
  
  class Candidate extends member {
    CandidateId: number;
  
    constructor(userName: string, age: number, CandidateId: number) {
      super(userName, age);
      this.CandidateId = CandidateId;
    }
    display(): void {
      console.log(
        `username: ${this.userName}, age: ${this.age}, id: ${this.CandidateId}`
      );
    }
  }
  
  let Candidate1 = new Candidate("Yuri", 31, 1302020015);
  Candidate1.display();
  