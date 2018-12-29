const sumOfTheSum = require("../src/sumOfTheSum");
xdescribe("sumOfTheSum", () => {
  xit("should return 7 if given [1, 5]", () => {
    let list = [1, 5];
    expect(sumOfTheSum(list)).toEqual(7);
  });
  xit("should return 11 if given [5, 1]", () => {
    let list = [5, 1];
    expect(sumOfTheSum(list)).toEqual(11);
  });
  it("should return 23 if given [1, 5, 10]", () => {
    let list = [1, 5, 10];
    expect(sumOfTheSum(list)).toEqual(23);
  });
  xit("should return 1363 if given [1, 5, 10, 15, 20, 25, 30, 35]", () => {
    let list = [1, 5, 10, 15, 20, 25, 30, 35];
    expect(sumOfTheSum(list)).toEqual(1363);
  });
});
