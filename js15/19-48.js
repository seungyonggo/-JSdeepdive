function Person(name) {
  this.name = name;
}

const me = new Person("Lee");

const parent = {};

Object.setPrototypeOf(me, parent);

console.log(Person.prototype === parent);

console.log(parent.constructor === Person);

Person.prototype = parent;

console.log(me instanceof Person);

console.log(me instanceof Object);

function isInstanceof(instance, constructor) {
  const prototype = Object.getPrototypeOf(instance);

  if (prototype === null) return false;

  return (
    prototype === constructor.prototype || isInstanceof(prototype, constructor)
  );
}

console.log(isInstanceof(me, Person));
console.log(isInstanceof(me, Object));
console.log(isInstanceof(me, Array));
