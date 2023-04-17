let obj = {
  x: 10,
  f: function () {
    return this.x;
  },
};
console.log(obj.f());
let bar = obj.f;
console.log(bar());
console.log(new obj.f());
