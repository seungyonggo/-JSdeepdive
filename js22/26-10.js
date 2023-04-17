const derived = {
  __proto__: base,
  sayHi: function () {
    return `${super.sayHi()}. how are you doing?`;
  },
};
