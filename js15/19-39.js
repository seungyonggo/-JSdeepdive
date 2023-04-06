Person.prototype.sayHello = function () {
  console.log(`Hey My name is ${this.name}`);
};
me.sayHello();
delete Person.prototype.sayHello;
me.sayHello();
