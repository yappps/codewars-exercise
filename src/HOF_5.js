/* 
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object (associative array in PHP) which includes the count of each coding language represented at the meetup.
*/

const countLanguages = arr => {
  let languages = {};
  arr.map(
    developer =>
      languages[developer.language]
        ? languages[developer.language]++
        : (languages[developer.language] = 1)
  );
  return languages;
};

module.exports = countLanguages;
