/*
deleteNth([20,37,20,21], 1)) => [20,37,21]
deleteNth([1,1,3,3,7,2,2,2,2], 3)=> [1, 1, 3, 3, 7, 2, 2, 2])
*/

const deleteNth = require("../src/deleteOccurancesOfAnElement");
describe("Delete occurrences of an element if it occurs more than n times ", () => {
  it("should return an empty [] if nth = 0", () => {
    expect(deleteNth([1, 2, 3, 1], 0)).toEqual([]);
  });
  it("should return [1,2,3] if nth = 1", () => {
    expect(deleteNth([1, 2, 3, 1], 1)).toEqual([1, 2, 3]);
  });
  it("should return [20,37,21] if nth = 1", () => {
    expect(deleteNth([20, 37, 20, 21], 1)).toEqual([20, 37, 21]);
  });
  it("should return [1, 1, 3, 3, 7, 2, 2, 2] if nth = 3", () => {
    expect(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)).toEqual([
      1,
      1,
      3,
      3,
      7,
      2,
      2,
      2
    ]);
  });
});
