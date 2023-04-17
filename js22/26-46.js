class Person {
  name = "Lee";
  sayHi() {
    this.console.log(`Hi ${this.name}`);
  }
}
const person = new Person();
person.sayHi();
