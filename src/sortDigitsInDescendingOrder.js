/* Your task is to make a function that can take any non-negative integer 
as a argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number. */

const sortDigitsInDescendingOrder = digits => {
  if (digits < 0 || !Number.isInteger(digits)) {
    return false;
  }

  return Number.parseInt(
    digits
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
};

module.exports = sortDigitsInDescendingOrder;
