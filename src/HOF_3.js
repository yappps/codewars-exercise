// My ans
// const isRubyComing = list =>
//   list.filter(dev => dev.language === "Ruby").length === 0 ? false : true;


// A clever one : Using `some` instead of `filter`
/* 
- The `some()` method tests whether at least one element in the array passes the test implemented by the provided function.
- Return value : true if the callback function returns a truthy value for any array element; otherwise, false.

*/
const isRubyComing = list => list.some(dev => dev.language === "Ruby");

module.exports = isRubyComing;
