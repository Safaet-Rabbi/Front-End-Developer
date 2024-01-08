"use strict";
class member {
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
}
class Candidate extends member {
    constructor(userName, age, CandidateId) {
        super(userName, age);
        this.CandidateId = CandidateId;
    }
    display() {
        console.log(`username: ${this.userName}, age: ${this.age}, id: ${this.CandidateId}`);
    }
}
let Candidate1 = new Candidate("Yuri", 31, 1302020015);
Candidate1.display();
