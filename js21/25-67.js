class Base {}
class Derived extends Base {
  constructor() {
    this.a = 1;
    super();
  }
}

function Foo() {
  super();
}
