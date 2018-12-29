/* 
3. Fun with ES6 Classes #3 - Cuboids, Cubes and Getters
https://www.codewars.com/kata/fun-with-es6-classes-number-3-cuboids-cubes-and-getters/train/javascript 
*/

class Cuboid {
  constructor(length, width, height) {
    Object.assign(this, { length, width, height });
  }
  multiplyBy2(value1, value2) {
    return value1 * value2 * 2;
  }
  get surfaceArea() {
    return (
      this.multiplyBy2(this.length, this.width) +
      this.multiplyBy2(this.length, this.height) +
      this.multiplyBy2(this.height, this.width)
    );
  }
  get volume() {
    return this.length * this.width * this.height;
  }
}

class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
}
