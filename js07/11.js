//11-01
const o = {};

o.a = 1;
console.log(o);

console.log("--------------------------------------");
//11-02
let str1 = "";
let str2 = "Hello";

console.log("--------------------------------------");
//11-03
let str = "Hello";
str = "world";
console.log(str);

console.log("--------------------------------------");
//11-04
let str3 = "string";
console.log(str3[0]);

console.log(str3.length);
console.log(str3.toUpperCase());

console.log("--------------------------------------");
//11-05
let str4 = "string";
console.log(str4[0]);
console.log(str4);

console.log("--------------------------------------");
//11-06
let score = 80;
let copy = score;
console.log(score);
console.log(copy);

score = 100;

console.log(score);
console.log(copy);

console.log("--------------------------------------");
//11-07
let score1 = 80;
let copy1 = score1;

console.log(score1, copy1);
console.log(score1 === copy1);

console.log("--------------------------------------");
//11-08
let score2 = 80;
let copy2 = score2;
console.log(score2, copy2);
console.log(score2 === copy2);

score2 = 100;
console.log(score2, copy2);
console.log(score === copy2);

console.log("--------------------------------------");
//11-09
let x = 10;
console.log(x);

console.log("--------------------------------------");
//11-10
let score3 = 80;
let copy3 = score3;
console.log(copy3);

console.log("--------------------------------------");
//11-11
let person = {
  name: "Lee",
};
console.log(person);

console.log("--------------------------------------");
//11-12
let person1 = {
  name: "Lee",
};
console.log(person1);

console.log("--------------------------------------");
//11-13
let person2 = {
  name: "Lee",
};
person2.name = "Kim";
person2.address = "Seoul";
console.log(person2);

console.log("--------------------------------------");
//11-14
const o1 = { x: { y: 1 } };

// 얕은 복사
const c1 = { ...o };
console.log(c1 === o);
console.log(c1.x === o.x);

// const _ = require("lodash");
// const c2 = _.cloneDeep(o1);
// console.log(c2 === o1);
// console.log(c2.x === o1.x);
console.log("--------------------------------------");
//11-15
const v = 1;
const c2 = v;
console.log(c2 === v);
const o2 = { x: 1 };
const c4 = o2;
console.log(c4 === o2);

console.log("--------------------------------------");
//11-16
let person3 = {
  name: "Lee",
};
let copy4 = person3;
console.log(copy4);
console.log("--------------------------------------");
//11-17
let person4 = {
  name: "Lee",
};
let copy5 = person4;
console.log(copy5 === person4);
copy5.name = "Kim";
person4.addres = "Seoul";

console.log(person4);
console.log(copy5);

console.log("--------------------------------------");
//11-18
let person5 = {
  name: "Lee",
};
let person6 = {
  name: "Lee",
};
console.log(person5 === person6);
console.log(person5.name === person6.name);
