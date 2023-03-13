// 블록문
{
  let foo = 10;
}

// 제어문
{
  let x = 1;
  if (x < 10) {
    x++;
  }
}

// 함수 선언문
function sum(a, b) {
  return a + b;
}

let num = 2;
let kind;

// if문
if (num > 0) {
  kind = "양수"; // 음수를 구별할 수 없다
}
console.log(kind); // 양수

// if...else 문
if (num > 0) {
  kind = "양수";
} else {
  kind = "음수"; // 0은 음수가 아니다.
}
console.log(kind);

// if... else if 문
if (num > 0) {
  kind = "양수";
} else if (num < 0) {
  kind = "음수";
} else {
  kind = "영";
}
console.log(kind);

let num1 = -1;
let kind1;

if (num1 > 0) kind1 = "양수";
else if (num1 < 0) kind1 = "음수";
else kind1 = "영";
console.log(kind1);

// x가 짝수이면 result 변수에 문자열 '짝수'를 할당하고, 홀수이면 문자열 '홀수'를 할당한다.
let c = 2;
let result;

if (c % 2) {
  // 2 % 2는 0이다. 이때 0은 false로 암묵적 강제 변환된다.
  result = "홀수";
} else {
  result = "짝수";
}
console.log(result); // 짝수

let z = 2;

// 0은 false로 취급된다.
let result1 = z % 2 ? "홀수" : "짝수";
console.log(result1); // 짝수

let num2 = 2;
// 0은 false로 취급된다.
var kind2 = num2 ? (num2 > 0 ? "양수" : "음수") : "영";

console.log(kind2);

let year = 2000;
let month = 2;
let days = 0;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    // 윤년 계산 알고리즘
    // 1. 연도가 4로 나누어 떨어지는 해(2000, 2004, 2008, ...)는 윤년이다.
    // 2. 연도가 4로 나누어 떨어지더라도 연도가 100으로 나누어 떨어지는 해 (2000, 2100, 2200...)는 평년이다.
    // 3. 연도가 400으로 나누어 떨어지는 해 (2000, 2400, 2800...)는 윤년이다
    days = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
    break;
  default:
    console.log("Invalid mobth");
}

console.log(days);

for (let i = 0; i < 2; i++) {
  console.log(i);
}

for (let i = 1; i >= 0; i--) {
  console.log(i);
}

// 무한루프
// for (let i = 1; i > 0; i++) {
//   console.log(i);
// }

// for (let i = -1; i < 0; i--) {
//   console.log(i);
// }

for (let a = 1; a <= 6; a++) {
  for (let s = 1; s <= 6; s++) {
    if (a + s === 6) console.log(`[${a}, ${s}]`);
  }
}

let count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3) {
  console.log(count);
  count++;
}

// 무한루프
// let count = 1;
// while (count > 0) {
//   console.log(count);
//   count++;
// }

let count1 = 0;
while (true) {
  console.log(count1);
  count1++;
  // count1가 5이면 코드 블록을 탈출한다.
  if (count1 === 5) break;
}

let count2 = 0;
//count2가 4보다 작을 떄까지 코드 블록을 계속 반복 실행한다.
do {
  console.log(count2);
  count2++;
} while (count2 < 4);

// if(true){
//   break; // Uncaught SyntaxError: Illegal break statement
// }

// foo라는 레이블 식별자가 붙은 레이블 문
foo: console.log("foo");

foo: {
  console.log(1);
  break foo;
  console.log(2);
}
console.log("Done");

// outer라는 식별자가 붙은 레이블 for 문
outer: for (let d = 0; d < 3; d++) {
  for (let f = 0; f < 3; f++) {
    // d + f === 3이면 outer라는 식별자가 붙은 레이블 for 문을탈출한다.
    if (d + f === 3) break outer;
    console.log(`inner ${d}, ${f}`);
  }
}
console.log("Done");

// 문자열에서 쓰인 알파벳 갯수를 카운트해주는 방법
let string = "Hello World.";
let search = "l";
let index;

// 문자열은 유사 배열이므로 for문으로 순회할 수 있다.
for (let q = 0; q < string.length; q++) {
  // 문자열의 개별 문자가 'l'이면
  if (string[q] === search) {
    index = q;
    break; // 반복문을 탈출한다.
  }
}

console.log(index);
// 참고로 String.prototype.indexOf 메서드를 사용해도 같은 동작을 한다.
console.log(string.indexOf(search));

let string1 = "Hello World.";
let search1 = "l";
let count3 = 0;
// 문자열은 유사 배열이므로 for 문으로 순회할 수 있다.
for (let i = 0; i < string1.length; i++) {
  //'l'이 아니면 현지점에서 실행을 중단하고 반복문의 증감식으로 이동한다
  if (string1[i] !== search1) continue;
  count3++;
}
console.log(count3);
// 참고로 String.prototype.match 메서드를 사용해도 같은 동작을 한다.
const regexp = new RegExp(search, "g");
console.log(string.match(regexp).length);

// 위 예제의 for문은 다음 코드와 동일하게 동작한다.
let string2 = "Hello World.";
let search2 = "l";
let count6 = 0;
for (let i = 0; i < string2.length; i++) {
  // 'l'이면 카운트를 증가시킨다.
  if (string2[i] === search2) count6++;
}
console.log(count6);

for (let i = 0; i < string.length; i++) {
  if (string[i] !== search) continue;

  count++;
}
