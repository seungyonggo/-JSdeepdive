// 예제 06-01

let integer = 10; // 정수
let double = 10.12; // 실수
let negative = -20; // 음의 정수

// 예제 06-02

let binary = 0b01000001; // 2진수
let octal = 0o101; // 8진수
let hex = 0x41; // 16진수

//표기법만 다를 뿐 모두 같은 값이다.
console.log(binary); // 65
console.log(octal); // 65
console.log(hex); // 65
console.log(binary === octal); // true
console.log(octal === hex); // true

// 예제 06-03
// 숫자 타입은 모두 실수로 처리된다.
console.log(1 === 1.0); // true
console.log(4 / 2); // 2
console.log(3 / 2); // 1.5

// 예제 06-04
// 숫자 타입의 세 가지 특별한 값
console.log(10 / 0); // Infinity
console.log(10 / -0); // Infinity
console.log(1 * "String"); // NaN

// 예제 06-05
// 자바스크립트는 대소문자를 구별한다.
// let x = nan; // ReferenceError: nan is not defined

// 예제 06-06
// 문자열 타입
let string;
string = "문자열"; // 작은 따옴표
string = "문자열"; // 큰 따옴표
string = `문자열`; // 백틱
string = '작은따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로 인식된다.';
string = "큰따옴표로 감싼 문자열 내의 '작은따옴표'는 문자열로 인식된다.";

// 예제 06-07
//따옴표로 감싸지 않은 hello를 식별자로 인식한다.
// let string1 = hello; // ReferenceError: hello is not defined

// 예제 06-08
let template = "Template Literal";
console.log(template); // Template Literal

// 예제 06-09
// let str = 'Hello
// world.';
// // SyntaxError: Invalid or unexpected token

// 예제 06-10
let template1 = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
console.log(template1);
//  출력 결과
/* <ul>
	<li><a href="#">Home</a></li>
</ul> */

// 예제 06-11 불가능
// let template2 = '<ul>
//     <li><a href="#">Home<a></li>
// </ul>';
// console.log(template2);

// 예제 06-12
var first = "Ung-mo";
var last = "Lee";

//  ES5: 문자열 연결
console.log("My name is " + first + " " + last + "."); // My name is Ung-mo Lee.

// 예제 06-13
var first = "Ung-mo";
var last = "Lee";

console.log(`My name is ${first} ${last}.`);
// 예제 06-14
console.log(`1 + 2 = ${1 + 2}`);

// 예제 06-15
console.log("1 + 2 = ${1 + 2}"); // 1 + 2 = ${1 + 2}

// 예제 06-16
var foo = true;
console.log(foo); //true

foo = false;
console.log(foo); //false

// 예제 06-17
var foo1;
console.log(foo1); // undefined

// 예제 06-18
var foo2 = "Lee";

// 이전 참조를 제거 foo변수는 더 이상 'Lee'를 참조하지않는다.
// 유용해 보이지는 않는다. 변수의 스코프를 좁게 만들어 변수 자체를 재빨리 소멸시키는 편이 낫다.
foo2 = null;
console.log(foo2);

// 예제 06-20
// 심벌 값 생성
var key = Symbol("key");
console.log(typeof key); // symbol

//  객체 생성
var obj = {};
//  이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용한다.
obj[key] = "value";
console.log(obj[key]); // value
// 예제 06-21
var score = 100;
// 예제 06-22
// c 변수에는 1바이트 정수 타입의 값 (-128 ~ 127)만 할당할 수 있다.
// char c;

// num 변수에는 4바이트 정수 탕비의 값 (-2,124,483,648 ~ 2,124,483,647)만 할당할 수 있다.
// int num;
