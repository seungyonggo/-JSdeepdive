class MyArray extends Array {
  uniq() {
    return this.filter((v, i, self) => self.indexOf(v) === i);
  }
  average() {
    return this.reduce((pre, cur) => pre + cur, 0) / this.length;
  }
}

const myArray = new MyArray(1, 1, 2, 3);
console.log(myArray);

console.log(myArray.uniq());
console.log(myArray.average());

console.log(myArray.filter((v) => v % 2) instanceof MyArray);
console.log(
  myArray
    .filter((v) => v % 2)
    .uniq()
    .average()
);
