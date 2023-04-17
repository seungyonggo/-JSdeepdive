(function () {
  const foo = () => console.log(this);
  foo();
}
  .call({ a: 1 })
  (function () {
    const bar = () => () => console.log(this);
    bar()();
  })
  .call({ a: 1 }));

const foo = () => console.log(this);
foo();

const counter = {
  num: 1,
  increase: () => ++this.num,
};
console.log(counter.increase());
