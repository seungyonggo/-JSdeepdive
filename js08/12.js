//12-01
//f(x,y) = x+y
function add(x, y) {
  return x + y;
}
console.log(add(2, 5));

console.log("--------------------------------------");
//12-02
//함수 정의
function add(x, y) {
  return x + y;
}

console.log("--------------------------------------");
//12-03
let result = add(2, 5);

console.log(result);

console.log("--------------------------------------");
//12-04
let f = function add(x, y) {
  return x + y;
};
console.log(f);

console.log("--------------------------------------");
//12-05
//함수 선언문
function add(x, y) {
  return x + y;
}

console.dir(add);
console.log(add(2, 5));
console.log("--------------------------------------");
//12-06
// 함수 선언문은 함수 이름을 생략할 수 없다.

// function (x,y){
//     return x + y
// }
//Uncaught SyntaxError: Function statements require a function name
console.log("--------------------------------------");
//12-07
let add1 = function add(x, y) {
  return x + y;
};
console.log(add1(2, 5));

console.log("--------------------------------------");
//12-08
function foo() {
  console.log("foo");
}
foo();

// (function bar() {
//   console.log("bar");
// });
// bar();
// Uncaught ReferenceError: bar is not defined

console.log("--------------------------------------");
//12-09
let add2 = function add(x, y) {
  return x + y;
};
console.log(add2(2, 5));

console.log("--------------------------------------");
//12-10
let add3 = function (x, y) {
  return x + y;
};
console.log(add3(2, 5));

console.log("--------------------------------------");
//12-11
let add4 = function foo1(x, y) {
  return x + y;
};
console.log(add4(2, 5));

// console.log(foo1(2, 5));
// Uncaught ReferenceError: foo1 is not defined
console.log("--------------------------------------");
//12-12
console.dir(add);
// console.dir(sub);
console.log(add(2, 5));
// console.log(sub(2, 5));

function add(x, y) {
  return x + y;
}

let sub = function (x, y) {
  return x - y;
};

console.log("--------------------------------------");
//12-13
let add5 = new Function("x", "y", "return x+y");

console.log(add5(2, 5));

console.log("--------------------------------------");
//12-14
let add6 = (function () {
  let a = 10;
  return function (x, y) {
    return x + y + a;
  };
})();

console.log(add6(1, 2));

// let add7 = (function () {
//   let a = 10;
//   return new Function("x", "y", "return x+y+a;");
// })();

// console.log(add7(1, 2));
// Uncaught ReferenceError: a is not defined

console.log("--------------------------------------");
// 12-15
const add8 = (x, y) => x + y;
console.log(add8(2, 5));

console.log("--------------------------------------");
//12-16
function add9(x, y) {
  return x + y;
}
let result1 = add9(1, 2);
console.log("--------------------------------------");
//12-17
function add10(q, w) {
  console.log(q, w);
  return q + w;
}
add10(2, 5);

// console.log(q, w);
console.log("--------------------------------------");
//12-18
function add11(x, y) {
  return x + y;
}
console.log(add11(2));

console.log("--------------------------------------");
//12-19
function add12(x, y) {
  return x + y;
}

console.log(add12(2, 5, 10));

console.log("--------------------------------------");
//12-20
function add13(x, y) {
  // Arguments(3) [2,5,10, callee: f, Symbol(Symbol.iterator): f]
  console.log(arguments);
  return x + y;
}

add13(2, 5, 10);

console.log("--------------------------------------");
//12-21
function add14(x, y) {
  return x + y;
}

console.log("--------------------------------------");
//12-22
function add15(x, y) {
  return x + y;
}
console.log(add15(2));
console.log(add15("a", "b"));

console.log("--------------------------------------");
//12-23
function add16(x, y) {
  if (typeof x !== "Number" || typeof y !== "number") {
    throw new TypeError("인수는 모두 숫자 값이어야 합니다.");
  }
  return x + y;
}

// console.log(add16(2));
// console.log(add16("a", "b"));

console.log("--------------------------------------");
//12-24
function add17(a, b, c) {
  a = a || 0;
  b = b || 0;
  c = c || 0;
  return a + b + c;
}
console.log(add17(1, 2, 3));
console.log(add17(1, 2));
console.log(add17(1));
console.log(add17());

console.log("--------------------------------------");
//12-25
function add18(a = 0, b = 0, c = 0) {
  return a + b + c;
}
console.log(add18(1, 2, 3));
console.log(add18(1, 2));
console.log(add18(1));
console.log(add18());

console.log("--------------------------------------");
//12-26
// $.ajax({
//   method: "POST",
//   url: "/user",
//   data: { id: 1, name: "Lee" },
//   cache: false,
// });

console.log("--------------------------------------");
// 12-27
function multiply(x, y) {
  return x * y;
}
let result2 = multiply(3, 5);
console.log(result2);

console.log("--------------------------------------");
// 12-28
function multiply2(x, y) {
  return x * y;
  console.log("실행되지 않는다.");
}

console.log(multiply2(3, 5));

console.log("--------------------------------------");
//12-29
function foo2() {
  return;
}

console.log(foo2());
console.log("--------------------------------------");
//12-30
function foo3() {
  // 반환문을 생략하면 암묵적으로 undefined가 반환된다.
}
console.log(foo3());

console.log("--------------------------------------");
//12-31
function multiply3(x, y) {
  // return 키워드와 반환값 사이에 줄바꿈이 있으면
  return; // 세미콜론 자동 삽입 기능(ASI)에 의해 세미콜론이 추가된다.
  x * y; // 무시한다.
}
console.log(multiply3(3, 5));

console.log("--------------------------------------");
//12-33
function changVal(primitive, obj) {
  primitive += 100;
  obj.name = "Kim";
}

let num = 100;
let person = { name: "Lee" };
console.log(num);
console.log(person);

changVal(num, person);

console.log(num);

console.log(person);
console.log("--------------------------------------");
//12-34
// 익명 즉시 실행 함수
(function () {
  let a = 3;
  let b = 5;
  return a * b;
});

console.log("--------------------------------------");
//12-35
// 기명 즉시 실행 함수
(function foo4() {
  let a = 3;
  let b = 5;
  return a * b;
})();

// foo4(); //console.log("--------------------------------------");
console.log("--------------------------------------");
//12-36
// function (){}(); //SyntaxError: Function statements require a function name

//12-37
// function foo5(){

// }(); // SyntaxError: Unexpected token

//12-38
(function foo6() {})();
console.log("--------------------------------------");
//12-39
// (); SyntaxError: Unexpected token

//12-40
console.log(typeof function f() {});
console.log(typeof function () {});
//12-41
(function () {
  // ...
});
(function () {
  // ...
})();

!function () {
  // ...
};
+function () {
  // ...
};

//12-42
let res = (function () {
  let a = 3;
  let b = 5;
  return a * b;
})();

console.log(res);

res = (function (a, b) {
  return a * b;
})(3, 5);

console.log(res);

console.log("--------------------------------------");
//12-43
function countdown(n) {
  for (let i = n; i >= 0; i--) console.log(i);
}
countdown(10);

console.log("--------------------------------------");
//12-44
function countdown1(n) {
  if (n < 0) return;
  console.log(n);
  countdown1(n - 1);
}
countdown1(10);

console.log("--------------------------------------");
//12-45
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

console.log("--------------------------------------");
//12-46
let factorial1 = function foo7(n) {
  if (n <= 1) return 1;
  return n * factorial1(n - 1);
};
console.log(factorial1(5));

console.log("--------------------------------------");
//12-47
function factorial2(n) {
  if (n <= 1) return 1;
  let res1 = n;
  while (--n) res1 *= n;
  return res1;
}
console.log(factorial2(0));
console.log(factorial2(1));
console.log(factorial2(2));
console.log(factorial2(3));
console.log(factorial2(4));
console.log(factorial2(5));

console.log("--------------------------------------");
//12-48
function outer() {
  let x = 1;
  function inner() {
    let y = 2;
    console.log(x + y);
  }
  inner();
}
outer();
console.log("--------------------------------------");
//12-49
function repeat(n) {
  for (let i = 0; i < n; i++) console.log(i);
}
repeat(5);

console.log("--------------------------------------");
//12-50
function repeat1(n) {
  for (let i = 0; i < n; i++) console.log(i);
}
repeat1(5);
console.log("--------------------------------------");
function repeat2(n) {
  for (let i = 0; i < n; i++) {
    if (i % 2) console.log(i);
  }
}
repeat2(5);

console.log("--------------------------------------");
// 12-51
function repeat3(n, f) {
  for (let i = 0; i < n; i++) {
    f(i);
  }
}

let logAll = function (i) {
  console.log(i);
};
repeat3(5, logAll);
console.log("--------------------------------------");

let logOdds = function (i) {
  if (i % 2) console.log(i);
};
repeat3(5, logOdds);

console.log("--------------------------------------");
//12-52
repeat3(5, function (i) {
  if (i % 2) console.log(i);
});
console.log("--------------------------------------");

//12-53
let logOdds1 = function (i) {
  if (i % 2) console.log(i);
};
repeat3(5, logOdds1);

console.log("--------------------------------------");
//12-54
// document.getElementById("myButton").addEventListener("click", function () {
//   console.log("button clicked!");
// });

setTimeout(function () {
  console.log("1초 경과");
}, 1000);

console.log("--------------------------------------");
//12-55
let res2 = [1, 2, 3].map(function (item) {
  return item * 2;
});

console.log(res2);

res3 = [1, 2, 3].filter(function (item) {
  return item % 2;
});
console.log(res3);

res4 = [1, 2, 3].reduce(function (acc, cur) {
  return acc + cur;
}, 0);

console.log(res4);
console.log("--------------------------------------");
// 12-56
let count = 0;
function increase(n) {
  return ++n;
}

count = increase(count);
console.log(count);

count = increase(count);
console.log(count);
console.log("--------------------------------------");
// 12-57
let count1 = 0;
function increase1() {
  return ++count1;
}

increase1();
console.log(count1);

increase1();
console.log(count1);
