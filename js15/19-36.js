const Person = (function () {
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayHello = function () {
    console.log(`Hi! My name us ${this.name}`);
  };
  return Person;
})();

const me = new Person("Lee");

me.sayHello = function () {
  console.log(`Hey My name is ${this.name}`);
};
me.sayHello();

delete me.sayHello;
me.sayHello();

delete me.sayHello;
me.sayHello();
