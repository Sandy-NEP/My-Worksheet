//Worksheet 13: Classes & Inheritance


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
}
let student1 = new Student("SANDESH", "ADARSHA SECONDARY SCHOOL");
student1.greet();
student1.study();
