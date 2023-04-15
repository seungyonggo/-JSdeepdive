function Base1() {}

class Base2 {}

let condition = true;

class Derived extends (condition ? Base1 : Base2) {}
const derived1 = new Derived();
console.log(derived1);
console.log(derived1 instanceof Base1);
console.log(derived1 instanceof Base2);
