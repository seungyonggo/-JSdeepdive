class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }
  add(arr) {
    return arr.map(function (item) {
      return this.prefix + item;
    }, this);
  }
}

const prefixer = new Prefixer("-webkit-");
console.log(prefixer.add(["transition", "user-select"]));
