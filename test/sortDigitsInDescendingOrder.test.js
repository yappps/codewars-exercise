// Test cases: actual --> expected
// sortDigitsInDescendingOrder(21445) --> 54421
// sortDigitsInDescendingOrder(145263) --> 654321
// sortDigitsInDescendingOrder(1254859723) --> 9875543221

const sortDigitsInDescendingOrder = require("./sortDigitsInDescendingOrder");

test("it should take in a positive integer", () => {
  expect(sortDigitsInDescendingOrder(-2)).toEqual(false);
});
test("it should return itself", () => {
  expect(sortDigitsInDescendingOrder(2)).toEqual(2);
});

test("it should return in descending order", () => {
  expect(sortDigitsInDescendingOrder(123)).toEqual(321);
});
test("it should not take in alphanumeric", () => {
  expect(sortDigitsInDescendingOrder("-1.55ab")).toEqual(false);
}); 