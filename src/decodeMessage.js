/* Write a function to decode a given input string.
Each letter is paired with the letter that it coincides with when the alphabet is reversed.
For example: "a" is encoded with "z", "b" with "y", "c" with "x", etc
Spaces are not encoded/decoded. For example: "gsrh nvhhztv" will be decoded as "this message"
*/

const decodeMessage = string => {
  let decodedArray = [];
  for (var i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123) {
      // let switchCharCode = 122 - (string.charCodeAt(i) - 97);
      // let x = String.fromCharCode(switchCharCode(string, 97, 122, i));
      decodedArray.push(
        String.fromCharCode(switchCharCode(string, 97, 122, i))
      );
    } else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      // let switchCharCode = 90 - (string.charCodeAt(i) - 65);
      // let x = String.fromCharCode(switchCharCode(string, 65, 90, i));
      decodedArray.push(String.fromCharCode(switchCharCode(string, 65, 90, i)));
    } else {
      decodedArray.push(String.fromCharCode(32));
    }
  }
  return decodedArray.join("");
};

const switchCharCode = (inputString, minCharCode, maxCharCode, charIndex) => {
  return maxCharCode - (inputString.charCodeAt(charIndex) - minCharCode);
};

module.exports = decodeMessage;
