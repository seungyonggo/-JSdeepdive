function Person(name, age) {
  this.name = name;
  let _age = age;

  this.sayHi = function () {
    console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
  };
}
const me = new Person("Lee", 20);
me.sayHi();
console.log(me.name);
console.log(me._age);

const you = new Person("Kim", 30);
you.sayHi();
console.log(you.name);
console.log(you._age);

function Person2(name, age) {
  this.name = name;
  const age2 = age;

  this.sayHi = function () {
    console.log(`Hi! My name is ${this.name}. I am ${age2}.`);
  };
}
const i = new Person2("Ko", 29);
i.sayHi();
console.log(i.age2);
