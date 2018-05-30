const cartesianNeighbor = require("../src/cartesianNeighbors");

describe("Cartesian Neighbor", () => {
  it("should return null if one of the value is not supplied", () => {
    expect(cartesianNeighbor(3)).toEqual(false);
  });
  it("should return a 8 neighboring points ", () => {
    let actual = [
      [1, 1],
      [1, 2],
      [1, 3],
      [2, 1],
      [2, 3],
      [3, 1],
      [3, 2],
      [3, 3]
    ];
    expect(cartesianNeighbor(2, 2)).toEqual(actual);
  });
});
