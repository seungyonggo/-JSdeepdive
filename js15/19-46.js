function Person(name) {
  this.name = name;
}

const me = new Person("Lee");

console.log(me instanceof Person);

console.log(me instanceof Object);
