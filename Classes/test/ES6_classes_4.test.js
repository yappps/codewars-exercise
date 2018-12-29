const Cube = require("../src/ES6_classes_4");
describe("Cubes and Setters", () => {
  it("test all getter", () => {
    const cube1 = new Cube(1);
    expect(cube1.getLength).toBe(1);
    expect(cube1.getSurfaceArea).toBe(6);
    expect(cube1.getVolume).toBe(1);
  });
  it("test setLength", () => {
    const cube1 = new Cube(1);
    cube1.setLength = 2;
    expect(cube1.getLength).toBe(2);
    expect(cube1.getSurfaceArea).toBe(24);
    expect(cube1.getVolume).toBe(8);
  });
  it("test setSurfaceArea", () => {
    const cube1 = new Cube(1);
    cube1.setSurfaceArea = 54;
    expect(cube1.getLength).toBe(3);
    expect(cube1.getSurfaceArea).toBe(54);
    expect(cube1.getVolume).toBe(27);
  });
  it("test setVolume", () => {
    const cube1 = new Cube(1);
    cube1.setVolume = 1000;
    expect(cube1.getLength).toBe(10);
    expect(cube1.getSurfaceArea).toBe(600);
    expect(cube1.getVolume).toBe(1000);
  });
});
