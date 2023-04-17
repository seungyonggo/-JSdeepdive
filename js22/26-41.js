function Person(name) {
  this.name = name;
}
person.prototype.sayHi = () => console.log(`Hi ${this.name}`);

const person = new Person("Lee");
person.sayHi();
