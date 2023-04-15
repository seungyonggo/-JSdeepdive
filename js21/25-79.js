class ColorRectangle extends Rectangle {
  constructor(width, height, color) {
    super(width, height);
    console.log(this);
    this.color = color;
    console.log(this);
  }
}
