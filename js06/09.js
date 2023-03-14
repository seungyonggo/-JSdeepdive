let q = 10;

// 명시적 타입 변환
// 숫자를 문자열로 타입 캐스팅한다.
let str = q.toString();
console.log(typeof str, str);

// q 변수의 값이 변경된 것은 아니다.
console.log(typeof q, q);

console.log("=====================");

let w = 10;

// 암묵적 타입 변환
// 문자열 연결 연산자는 숫자 타입 q의 값을 바탕으로 새로운 문자열을 생성한다.
let str1 = w + "";
console.log(typeof str1, str1);

console.log("=====================");

// w 변수의 값이 변경된 것은 아니다.
console.log(typeof w, w);

// 피연산자가 모두 문자열 타입이어야 하는 문맥
"10" + 2; // -> '102'
console.log("10" + 2);

// 피연산자가 모두 숫자 타입이어야 하는 문맥
5 * "10"; // -> 50
console.log(5 * "10");

// 피연산자 또는 표현식이 불리언 타입이어야 하는 문맥
!0; // -> true
if (1) {
}
console.log(!0);

console.log("=====================");

1 + "2"; // -> '12'
console.log(1 + "2");
console.log("1" + 2);

console.log("=====================");

`1 + 1 = ${1 + 1}`; // -> "1 + 1 = 2"
console.log(`1 + 1 = ${1 + 1}`);

console.log("=====================");

// 숫자 타입

console.log(0 + "");
0 + "";

console.log(-0 + "");
-0 + "";

console.log(1 + "");
1 + "";

console.log(-1 + "");
-1 + "";

console.log(NaN + "");
NaN + "";

console.log(Infinity + "");
Infinity + "";

console.log(-Infinity + "");
-Infinity + "";

// 불리언 타입
true + "";
console.log(true + "");

false + "";
console.log(false + "");

// null 타입
null + "";
console.log(null + "");

// undefined 타입
undefined + "";
console.log(undefined + "");

//Symbol 타입
// Symbol() + ""; //Uncaught TypeError: Cannot convert a Symbol value to a string
// console.log(Symbol() + "");

// 객체 타입
({} + "");
console.log({} + "");

Math + "";
console.log(Math + "");

[] + "";
console.log([] + "");

[10, 20] + "";
console.log([10, 20] + "");

(function () {} + "");
console.log(function () {} + "");

Array + "";
console.log(Array + "");

console.log("=====================");

1 - "1";
console.log(1 - "1");

1 * "10";
console.log(1 * "10");

1 / "one";
console.log(1 / "one");
