// Test cases: actual --> expected
// decodeMessage("a") --> "z"
// decodeMessage("z") --> "a"
// decodeMessage("b") --> "y"
// decodeMessage("y") --> "b"
// decodeMessage("ab") --> "zy"
// decodeMessage("sr") --> "hi"
// decodeMessage("svool") --> "hello"

// decodeMessage("gsrh nvhhztv") --> "this message"
// decodeMessage("r slkv mlylwb wvxlwvh gsrh nvhhztv") --> "i hope nobody decodes this message"

const decodeMessage = require("../src/decodeMessage")
describe("decode Message", () => {
  test('should return "z" when given "a"', () => {
    expect(decodeMessage("a")).toEqual("z");
  });
  test('should return "a" when given "z"', () => {
    expect(decodeMessage("z")).toEqual("a");
  });
  test('should return "y" when given "b"', () => {
    expect(decodeMessage("b")).toEqual("y");
  });
  test('should return "b" when given "y"', () => {
    expect(decodeMessage("y")).toEqual("b");
  });
  test('should return "zy" when given "ab"', () => {
    expect(decodeMessage("zy")).toEqual("ab");
  });
  test('should return "z" when given "a"', () => {
    expect(decodeMessage("hi")).toEqual("sr");
  });
  test('should return "z" when given "a"', () => {
    expect(decodeMessage("hello")).toEqual("svool");
  });
  test('should return "Z" when given "A"', () => {
    expect(decodeMessage("A")).toEqual("Z");
  });
  test('should return "Z" when given "A"', () => {
    expect(decodeMessage("AhelloA")).toEqual("ZsvoolZ");
  });
});
