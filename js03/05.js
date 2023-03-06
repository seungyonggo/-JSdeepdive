// 05-01 예제

10 + 20;

// 05-02 예제

var sum = 10 + 20;

// 05-03 예제
// 숫자 리터럴
3;

// 05-04 예제

var score = 100;

// 05-05 예제

var score2 = 50 + 50;

// 05-06 예제

score;

// 05-07 예제
//리터럴 표현식
10;
("Hello");

//식별자 표현식 (선언이 이미 존재한다고 가정)
sum;
person.name;
arr[1];

//연산자 표현식
10 + 20;
sum = 10;
sum !== 10;

//함수/메서드 호출 표현식(선언이 이미 존재한다고 가정)
square();
person.getName();

// 05-08 예제

var x = 1 + 2;

//식별자 표현식 x는 3으로 평가된다.
x + 3; // -> 6

// 05-09 예제
// 변수 선언문

var x1;

// 할당문

x1 = 5;

//함수 선언문

function foo() {}

//조건문

if (x > 1) {
  console.log(x);
}

//반복문

for (var i = 0; i < 2; i++) {
  console.log(i);
}

// 05-10 예제

function foo() {
  return {};
}
// ASI의 동작 결과 => return; {};
// 개발자의 예측 => return {};

console.log(foo());

var bar = (function () {})(function () {})();
// ASI의 동작 결과 => var bar = function(){}(function(){})();
// 개발자의 예측 => var bar = function(){}; (function(){})();
// typeError: (intermediate value)(...) is not a function

// 05-11 예제
//변수 선언문은 값으로 평가될 수 없으므로 표현식이 아니다.
var x2;
//  1, 2, 1 + 2, x = 1 + 2는 모두 표현식이다.
//  x = 1 + 2는 표현식이면서 환전한 문이기도하다.
x2 = 1 + 2;

// 05-12 예제
// 표현식이 아닌 문은 값처럼 사용할 수 없다.
// var foo = var x3; // SyntaxError: Unexpected token var

// 변수 선언문은 값처럼 쓸수 없다.

// 05-13 예제
// 변수 선언문은 표현식이 아닌 문이다.
let x4;

// 할당문은 그 자체가 표현식이지만 완전한 문이기도 하다. 즉, 할당문은 표현식인 문이다.
x4 = 100;
