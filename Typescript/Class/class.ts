class profile {
    // properties, methods, constructor
    profileName: string;
    age: number;
  
    constructor(profileName: string, age: number) {
      this.profileName = profileName;
      this.age = age;
    }
  
    display(): void {
      console.log(`profilename: ${this.profileName}, age: ${this.age}`);
    }
  }
  
  let profile1 = new profile('Safaet Rabbi', 21);
  profile1.display();
  
  let profile2 = new profile('Falcon Dante', 22);
  profile2.display();