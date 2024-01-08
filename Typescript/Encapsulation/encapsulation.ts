  // public, private, protected, readonly
  // setter and getter
  class voter {
    readonly voterName: string;
    public age: number;

    constructor(voterName: string, age: number) {
      this.voterName = voterName;
      this.age = age;
    }

    display(): void {
      console.log(`votername: ${this.voterName}, age: ${this.age}`);
    }
  }

  class Students extends voter {
    private StudentsId: number;

    constructor(voterName: string, age: number, StudentsId: number) {
      super(voterName, age);
      this.StudentsId = StudentsId;
    }
    display(): void {
      console.log(
        `votername: ${this.voterName}, age: ${this.age}, id: ${this.StudentsId}`
      );
    }

    setStudentsId(StudentsId: number): void {
      this.StudentsId = StudentsId;
    }

    getStudentsId(): number {
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