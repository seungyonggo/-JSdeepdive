Object.getPrototypeOf(me) === Person.prototype;
me instanceof Person;

Object.getPrototypeOf(Person.prototype) === Object.prototype;
me instanceof Object;

me.constructor === Person;
