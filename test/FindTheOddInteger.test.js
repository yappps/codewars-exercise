const findOdd = require("../src/findTheOddInteger");
describe("Find the odd integer", () => {
  it("should return array if it consist 1 element", () => {
    expect(findOdd([1])).toEqual(1);
  });
  it("should return `3` integer that occurs odd number of times", () => {
    arr = [1, 1, 2, 2, 3, 3, 3];
    expect(findOdd(arr)).toEqual(3);
  });
});
