/* 
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an array which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.
*/

const findSenior = list => {
  let sortedList = list.sort((dev1, dev2) => dev2.age - dev1.age);
  let mostSeniorDev = [];
  sortedList.forEach(element => {
    if (element.age === sortedList[0].age) {
      mostSeniorDev.push(element);
    }
  });
  return mostSeniorDev;
};

module.exports = findSenior;


