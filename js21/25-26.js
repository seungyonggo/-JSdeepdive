class Person {
  constructor(name) {
    this.name = name;
  }
  static sayHi() {
    console.log(`Hi!`);
  }
}

Person.sayHi();

const me = new Person("Lee");
me.sayHi();
