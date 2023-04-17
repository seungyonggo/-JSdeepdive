let foo = function () {
  return 1;
};

foo();

new foo();
let obj = { foo: foo };
obj.foo();
