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

console.log("=====================");

let done = true;
let message = "";

// 주어진 조건이 true일 때
if (done) message = "완료";
// if 문은 단축 평가로 대체 가능하다.
// done이 true라면 message에 '완료'를 할당
message = done && "완료";
console.log(message);

console.log("=====================");
let done1 = false;
let message1 = "";
// 주어진 조건이 false일 때
if (!done1) message1 = "미완료";
// if 문은 단축 평가로 대체 가능하다.
// done1이 false라면 message에 '미완료'를 할당
message1 = done1 || "미완료";
console.log(message1);

console.log("=====================");
let done2 = true;
let message2 = "";
// if ... else 문
if (done2) message2 = "완료";
else message2 = "미완료";
console.log(message2);
// if ... else 문은 삼항 조건 연산자로 대체 가능하다.
message2 = done2 ? "완료" : "미완료";
console.log(message);

console.log("=====================");
let elem = null;
//elem이 null이나 undefined와 같은 Falsy 값이면 elem으로 평가되고
// elem이 Truthy 값이면 elem.value로 평가된다.
let value = elem && elem.value;
console.log(value);

console.log("=====================");
//단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
  str = str || "";
  return str.length;
}

getStringLength();
console.log(getStringLength());
getStringLength("hi");
console.log(getStringLength("hi"));

// ES6의 매개변수의 기본값 설정
function getStringLength(str = "") {
  return str.length;
}

getStringLength();
getStringLength("hi");

console.log(getStringLength());
console.log(getStringLength("hi"));

console.log("=====================");

let elem1 = null;
// elem이 null 또는 undefined이면 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
let value1 = elem1?.value1;
console.log(value1);

console.log("=====================");

let elem2 = null;
// elem이 Falsy 값이면 elem으로 평가되고, elem이 Truthy 값이면 elem.value로 평가된다.
let value2 = elem2 && elem2.value2;
console.log(value2);

console.log("=====================");
let str3 = "";
// 문자열의 길이(length)를 참조한다.
let length1 = str3 && str3.length;
// 문자열의 길이(length)를 참조하지 못한다.
console.log(length1);

console.log("=====================");
let str4 = "";
let length2 = str4?.length2;
console.log(length2);

console.log("=====================");
let foo = null ?? "default string";
console.log(foo);

console.log("=====================");

let foo1 = "" || "default string";
console.log(foo1);

console.log("=====================");

let foo2 = "" ?? "default string";
console.log(foo2);
