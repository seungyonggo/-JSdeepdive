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

console.log("=====================");

"1" > 0;
console.log("1" > 0);

console.log("=====================");

// 문자열 타입

console.log(+"");
+"";
console.log(+"0");
+"0";
console.log(+"1");
+"1";
console.log(+"string");
+"string";

// 불리언 타입
console.log(+true);
+true;
console.log(+false);
+false;

// null 타입
console.log(+null);
+null;

// undefined 타입
console.log(+undefined);
+undefined;

// 심벌 타입
// console.log(+Symbol());
// +Symbol();

// 객체 타입
console.log(+{});
+{};
console.log(+[]);
+[];
console.log(+[10, 20]);
+[10, 20];
console.log(+function () {});
+function () {};

console.log("=====================");

if ("") console.log(x);

console.log("=====================");

if ("") console.log("1");
if (true) console.log("2");
if (0) console.log("3");
if ("str") console.log("4");
if (null) console.log("5");

console.log("=====================");

if (!false) console.log(false + "is falsy value");
if (!undefined) console.log(undefined + "is falsy value");
if (!null) console.log(null + "is falsy value");
if (!0) console.log(0 + "is falsy value");
if (!NaN) console.log(NaN + "is falsy value");
if (!"") console.log("" + "is falsy value");

console.log("=====================");

// 전달받은 인수가 Falsy 값이면 true, Truthy 값이면 false를 반환한다.
function isFalsy(v) {
  return !v;
}

// 전달받은 인수가 Truthy 값이면 true, Falsy 값이면 false를 반환한다.
function isTruthy(v) {
  return !!v;
}

// 모두 true를 반환한다.
isFalsy(false);
isFalsy(undefined);
isFalsy(null);
isFalsy(0);
isFalsy(NaN);
isFalsy("");

// 모두 true를 반환한다.
isTruthy(true);
isTruthy("0");
isTruthy({});
isTruthy([]);

console.log("=====================");

// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 => 문자열 타입
String(1);
console.log(String(1));
String(NaN);
console.log(String(NaN));
String(Infinity);
console.log(String(Infinity));
// 불리언 타입
String(true);
console.log(String(true));
String(false);
console.log(String(false));

// 2. Object.prototype.toString 메서드를 사용하는 방법
// 숫자 타입 => 문자열 타입
(1).toString();
console.log((1).toString());
NaN.toString();
console.log(NaN.toString());
console.log(Infinity.toString());
Infinity.toString();
// 불리언 타입 => 문자열 타입
// (true).toString();
console.log(true.toString());
// false.toString();
console.log(false.toString());

// 3. 문자열 연결 연산자를 이용하는 방법
// 숫자 타입 => 문자열 타입
1 + "";
console.log(1 + "");
NaN + "";
console.log(NaN + "");
Infinity + "";
console.log(Infinity + "");
// 불리언 타입 => 문자열 타입
true + "";
console.log(true + "");
false + "";
console.log(false + "");

console.log("=====================");

// 1. Numver 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 숫자 타입
Number("0");
console.log("0");

Number("-1");
console.log("-1");

Number("10.53");
console.log("10.53");

// 불리언 타입 => 숫자 타입
Number(true);
console.log(true);

Number(false);
console.log(false);

// 2. parseInt, ParseFloat 함수를 사용하는 방법(문자열만 변환 가능)
// 문자열 타입 => 숫자 타입
parseInt("0");
console.log(parseInt("0"));

parseInt("-1");
console.log(parseInt("-1"));

parseFloat("10.53");
console.log(parseFloat("10.53"));

// 3. + 단항 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자타입
+"0";
console.log(+"0");

+"-1";
console.log(+"-1");

+"10.53";
console.log(+"10.53");

// 불리언 타입 => 숫자 타입
+true;
console.log(+true);

+false;
console.log(+false);

// 4. * 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
"0" * 1;
console.log("0" * 1);

"-1" * 1;
console.log("-1" * 1);

"10.53" * 1;
console.log("10.53" * 1);

// 불리언 타입 => 숫자 타입
true * 1;
console.log(true * 1);

false * 1;
console.log(false * 1);

console.log("=====================");
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 불리언 타입
Boolean("x");
console.log(Boolean("x"));

Boolean("");
console.log(Boolean(""));

Boolean("false");
console.log(Boolean("false"));

// 숫자 타입 => 불리언타입
Boolean(0);
console.log(Boolean(0));

Boolean(1);
console.log(Boolean(1));

Boolean(NaN);
console.log(Boolean(NaN));

Boolean(Infinity);
console.log(Boolean(Infinity));

// null 타입 => 불리언 타입
Boolean(null);
console.log(Boolean(null));

// undefined 타입 => 불리언 타입
Boolean(undefined);
console.log(Boolean(undefined));

// 객체 타입 => 불리언 타입
Boolean({});
console.log(Boolean({}));

Boolean([]);
console.log(Boolean([]));

// 2. ! 부정 논리 연사자를 두 번 사용하는 방법
// 문자열 타입 => 불리언 타입
!!"x";
console.log(!!"x");

!!"";
console.log(!!"");

!!"false";
console.log(!!"false");

// 숫자 타입 => 불리언 타입
!!0;
console.log(!!0);

!!1;
console.log(!!1);

!!NaN;
console.log(!!NaN);

!!Infinity;
console.log(!!Infinity);

// null 타입 => 불리언 타입
!!null;
console.log(!!null);

// undefined 타입 => 불리언 타입
!!undefined;
console.log(!!undefined);

// 객체 타입 => 불리언 타입
!!{};
console.log(!!{});

!![];
console.log(!![]);

console.log("=====================");
"Cat" && "Dog";
console.log("Cat" && "Dog");

console.log("=====================");
"Cat" || "Dog";
console.log("Cat" || "Dog");

console.log("=====================");
// 논리합(||) 연산자
"Cat" || "Dog";
console.log("Cat" || "Dog");
false || "Dog";
console.log(false || "Dog");
"Cat" || false;
console.log("Cat" || false);

// 논리곱(&&) 연산자
"Cat" && "Dog";
console.log("Cat" && "Dog");
false && "Dog";
console.log(false && "Dog");
"Cat" && false;
console.log("Cat" && false);
