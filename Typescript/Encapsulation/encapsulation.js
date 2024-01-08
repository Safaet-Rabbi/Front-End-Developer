"use strict";
// public, private, protected, readonly
// setter and getter
class voter {
    constructor(voterName, age) {
        this.voterName = voterName;
        this.age = age;
    }
    display() {
        console.log(`votername: ${this.voterName}, age: ${this.age}`);
    }
}
class Students extends voter {
    constructor(voterName, age, StudentsId) {
        super(voterName, age);
        this.StudentsId = StudentsId;
    }
    display() {
        console.log(`votername: ${this.voterName}, age: ${this.age}, id: ${this.StudentsId}`);
    }
    setStudentsId(StudentsId) {
        this.StudentsId = StudentsId;
    }
    getStudentsId() {
        return this.StudentsId;
    }
}
let Students1 = new Students("Sayaka", 31, 1302020015);
Students1.setStudentsId(1302020017);
console.log(Students1.getStudentsId());
// Students1.display();
let voter1 = new voter("Robin", 23);
console.log(voter1.voterName);
// voter1.display();
