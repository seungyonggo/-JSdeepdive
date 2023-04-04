function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * thos.radius;
  };
}

const circle1 = new Circle(5);
