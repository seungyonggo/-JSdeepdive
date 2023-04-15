class Rectangle {
  constructor(width, height) {
    console.log(this);
    console.log(new.target);
    console.log(Object.getPrototypeOf(this) === ColorRectangle.prototype);
    console.log(this instanceof ColorRectangle);
    console.log(this instanceof Rectangle);
    this.width = width;
    this.height = height;
    console.log(this);
  }
}
