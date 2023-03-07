// 예제 07-01
console.log(5 * 4); // -> 20

// 문자열 연결 연산자

console.log("My name is " + "Lee");

// 할당 연산잔

console.log((color = "red"));

// 비교 연산자

console.log(3 > 5); // -> false

// 논리 연산자

console.log(true && false); // -> false

// 타입 연산자

console.log(typeof "Hi"); // -> string

// 예제 07-02

console.log(5 + 2); // -> 7

console.log(5 - 2); // -> 3

console.log(5 * 2); // ->10

console.log(5 / 2); // -> 2.5

console.log(5 % 2); // -> 1

// 예제 07-03
var x = 1;

x++;

console.log(x);

x--;

console.log(x);

// 예제 07-04

var z = 5,
  result;

result = z++;
console.log(result, z);

result = ++z;
console.log(result, z);

result = z--;
console.log(result, z);

result = --z;
console.log(result, z);

// 예제 07-05
+10;
+-10;

// 예제 07-06

var c = "1";

console.log(+c);

console.log(c);

c = true;

console.log(+c);

console.log(c);

c = "Hello";

console.log(+c);

console.log(c);

// 예제 07-07
console.log(-(-10));

console.log(-"10");

console.log(-true);

console.log(-"Hello");

// 예제 07-08
console.log("1" + 2);

console.log(1 + "2");

console.log(1 + 2);

console.log(1 + true);

console.log(1 + false);

console.log(1 + null);

console.log(+undefined);

console.log(1 + undefined);

// 예제 07-09

var v;

v = 10;
console.log(v);

v += 5;
console.log(v);

v -= 5;
console.log(v);

v *= 5;
console.log(v);

v /= 5;
console.log(v);

v %= 5;
console.log(v);

var str = "My name is";

str += " Lee";
console.log(str);

// 예제 07-10
var a;
console.log((a = 10));

// 예제 07-11
var s, d, f;
s = d = f = 0;
console.log(s, d, f);

// 예제 07-12
console.log(5 == 5);

console.log(5 == "5");

// 예제 07-13
"0" == "";
0 == "";
0 == "0";
false == "false";
false == "0";
false == null;
false == undefined;

// 예제 07-14
5 == 5;
5 === "5";

// 예제 07-15
NaN === NaN;

// 예제 07-16
Number.isNaN(NaN);
Number.isNaN(10);
Number.isNaN(1 + undefined);

// 예제 07-17
0 === -0;
0 == -0;

// 예제 07-18
-0 === +0;
Object.is(-0, +0);

NaN === NaN;
Object.is(NaN, NaN);

// 예제 07-19

5 != 8;
5 != 5;
5 != "5";

5 !== 8;
5 !== 5;
5 !== "5";

// 예제 07-20
5 > 0;
5 > 5;
5 >= 5;
5 <= 5;

// 예제 07-21
var f = 2;
var result = f % 2 ? "홀수" : "짝수";

console.log(result);

// 예제 07-22
var g = 2,
  result;

if (g % 2) result = "홀수";
else result = "짝수";

console.log(result);

// 예제 07-23
var q = 10;

var result = if( q % 2) {result = '홀수'} else {result = '짝수'}

// 예제 07-24

var w = 10;

var result = w % 2 ? '홀수' : '짝수';
console.log(result);

// 예제 07-25
true || true;
true || false;
false || true;
false || false;

true && true;
true && false;
false && true;
false && false;

!true;
!false;

// 예제 07-26
!0;
!'Hello';

// 예제 07-27
'Cat' && 'Dog';

// 예제 07-28
!(x || y) === (!x && !y)
!(x && y) === (!x || !y)

// 예제 07-29
var x, y, z;

x = 1, y = 2, z = 3;

// 예제 07-30

10 * 2 + 3;

10 * (2 + 3);

// 예제 07-31
typeof ''
typeof 1
typeof NaN
typeof true
typeof undefined
typeof Symbol()
typeof null
typeof []
typeof {}
typeof new Date()
typeof /test/gi
typeof function() {}

// 예제 07-32

var foo = null;

typeof foo === null;
foo === null;

// 예제 07-33
typeof undefined;

// 예제 07-34
2 ** 2;
2 ** 2.5;
2 ** 0;
2 ** -2;

// 예제 07-35
Math.pow(2, 2);
Math.pow(2, 2.5);
Math.pow(2, 0);
Math.pow(2, -2);

// 예제 07-36
2 ** (3 ** 2);
Math.pow(2, Math.pow(3, 2));

// 예제 07-37
-5 ** 2;
(-5) ** 2;

// 예제 07-38
var num = 5;
num **= 2;

// 예제 07-39
2 * 5 ** 2;

// 예제 07-40
var x;
x = 1;
console.log(x);
x++;
console.log(x);

var o = {a : 1};
delete o.a;
console.log(o);

// 예제 07-41
console.log(10 * (2 + 3));
