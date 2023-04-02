console.log(foo); //ReferenceError: Cannot access 'foo' before initialization
let foo;
console.log(foo);
foo = 1;
console.log(foo);
