//10-01
let person = {
  name: "Lee",
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}.`);
  },
};

console.log(typeof person);
console.log(person);

console.log("--------------------------------------");

//10-02
let empty = {};
console.log(typeof empty);

console.log("--------------------------------------");

//10-03
let person1 = {
  name: "Lee",
  age: 20,
};
console.log(person1);

console.log("--------------------------------------");

//10-04
let person2 = {
  fistName: "Ung-mo",
  "last-name": "Lee",
};
console.log(person2);

console.log("--------------------------------------");

//10-05
let person3 = {
  firstName: "Ung-mo",
  last_name: "Lee",
};
console.log(person3);

console.log("--------------------------------------");

let obj = {};
let key = "hello";

// ES5: 프로퍼티 키 동적 생성
obj[key] = "world";
// ES6: 계산된 프로퍼티 이름
// var obj = {[key]: 'world'};
console.log(obj);

console.log("--------------------------------------");

//10-07
let foo = {
  "": "", // 빈 무자열도 프로퍼티 키로 사용할 수 있다.
};
console.log(foo);

console.log("--------------------------------------");

//10-08
let foo1 = {
  0: 1,
  1: 2,
  2: 3,
};
console.log(foo1);

console.log("--------------------------------------");

//10-09
let foo2 = {
  var: "",
  function: "",
};
console.log(foo2);

console.log("--------------------------------------");
//10-10
let foo3 = {
  name: "Lee",
  name: "Kim",
};

console.log(foo3);

console.log("--------------------------------------");
//10-11
let circle = {
  radius: 5,

  // 원의 지름
  getDiameter: function () {
    // <- 메서드
    return 2 * this.radius;
  },
};

console.log(circle.getDiameter());
// 10-12
let person4 = {
  name: "Lee",
};
console.log(person4.name);
console.log(person4["name"]);

console.log("--------------------------------------");
//10-13
let person5 = {
  name: "Lee",
};
console.log(person5[name]);

console.log("--------------------------------------");
//10-14
let person6 = {
  name: "Lee",
};

console.log(person.age);

console.log("--------------------------------------");
//10-15
let person7 = {
  "last-name": "Lee",
  1: 10,
};
// console.log(person7.1);
// console.log(person7.'1');
console.log(person7[1]);
console.log(person7["1"]);

console.log("--------------------------------------");
//10-16
let person8 = {
  name: "Lee",
};
person8.name = "Kim";
console.log(person8);

console.log("--------------------------------------");
//10-17
let person9 = {
  name: "Lee",
};
person8.age = 20;
console.log(person8);

console.log("--------------------------------------");
//10-18
let person10 = {
  name: "Lee",
};
person10.age = 20;
delete person10.age;
delete person10.address;
console.log(person10);

console.log("--------------------------------------");
//10-19
let x = 1,
  y = 2;
let obj1 = {
  x: x,
  y: y,
};
console.log(obj1);

console.log("--------------------------------------");
//10-20
let x1 = 1,
  y1 = 2;
const obj2 = { x1, y1 };
console.log(obj2);

console.log("--------------------------------------");
//10-21
let prefix = "prop";
let i = 0;
let obj3 = {};
// 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
obj3[prefix + "-" + ++i] = i;
obj3[prefix + "-" + ++i] = i;
obj3[prefix + "-" + ++i] = i;
console.log(obj3);

console.log("--------------------------------------");
//10-22
const prefix1 = "prop";
let i1 = 0;
const obj4 = {
  [`${prefix1}-${++i1}`]: i1,
  [`${prefix1}-${++i1}`]: i1,
  [`${prefix1}-${++i1}`]: i1,
};
console.log(obj4);

console.log("--------------------------------------");
//10-23
let obj5 = {
  name: "Lee",
  sayHi: function () {
    console.log("Hi! " + this.name);
  },
};

obj5.sayHi();

console.log("--------------------------------------");
//10-24
const obj6 = {
  name: "Lee",
  sayHi() {
    console.log("Hi! " + this.name);
  },
};

obj6.sayHi();
