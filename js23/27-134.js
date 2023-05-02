const arr = ["hello", "world"];

arr.flatMap((str, index) => [index, [str, str.length]]);

arr.map((str, index) => [index, [str, str.length]]).flat(2);
