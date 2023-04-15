let Person = (function () {
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayHi = function () {
    console.log("Hi! My name is " + this.name);
  };
  return Person;
})();

let me = new Person("Lee");
me.sayHi();
