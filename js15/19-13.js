function Person(name) {
  this.name = name;
}
const me = new Person("Lee");

console.log(Person.prototype === me.__proto__);
