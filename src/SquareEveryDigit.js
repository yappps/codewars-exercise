/*
your goal here is to square every digit in the given number, in 36 or fewer characters (JavaScript), or 48 or fewer in Ruby
*/
// [My solution - failed]
// sd = n =>
//   Number.parseInt(
//     n
//       .toString()
//       .split("")
//       .map(N => N * N)
//       .join("")
//   );

// [Other people solution]
sd = n => +`${n}`.replace(/./g, n => n * n);

// sd = n => console.log(typeof `${n}`)
console.log(typeof 42); // number
console.log(typeof "42"); // string
console.log(typeof +"42"); // number -> unary plus if your string is already in the form of an integer:
/* 
  -    SYNTAX: str.replace(regexp|substr, newSubstr|function)
  -        /regex patt/g   
  This "g" after the reg exp is a flag that performs a global search in the string and returning all matches
  -   THE . matches any single character except the newline character
  - Without the '+' , the return value will be "number" instead of number
*/
