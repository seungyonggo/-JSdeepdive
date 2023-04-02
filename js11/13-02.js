let va1 = 1;
if (true) {
  let va2 = 2;
  if (true) {
    let va3 = 3;
  }
}

function foo() {
  let va4 = 4;
  function bar() {
    let va5 = 5;
  }
}

console.log(va1);
console.log(va2);
console.log(va3);
console.log(va4);
console.log(va5);
