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
