function Person(name, age) {
  this.name = name;
  let_age = age;
}

Person.prototype.sayHi = function () {
  console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
};
