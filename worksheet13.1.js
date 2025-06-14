class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, school) {
    super(name);
    this.school = school;
  }
  study() {
    console.log(`${this.name} is studying at ${this.school}`);
  }
  changeSchool(newSchool) {
    this.school = newSchool;
    console.log(`${this.name} has changed school to ${this.school}`);
  }
}

let student1 = new Student("Sandesh", "Amar Secondary School");
student1.greet();
student1.study();
student1.changeSchool("Adarsha Secondary School");
student1.study();
