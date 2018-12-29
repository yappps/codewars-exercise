/* 
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return either:

true if all developers in the list code in the same language; or
false otherwise.
*/

// My solution
// const isSameLanguage = list => {
//   let language = list[0].language;
//   for (i = 1; i < list.length; i++) {
//     if (list[i].language !== language) {
//       return false;
//     }
//   }
//   return true;
// };

//  A better way :
const isSameLanguage = list =>
  list.every(dev => dev.language === list[0].language);

module.exports = isSameLanguage;
