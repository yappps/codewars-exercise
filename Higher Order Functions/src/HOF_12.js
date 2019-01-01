/* 
write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins:
*/

const findAdmin = (list, lang) =>
  list.filter(dev => dev.language === lang && dev.githubAdmin === "yes");
module.exports = findAdmin;
