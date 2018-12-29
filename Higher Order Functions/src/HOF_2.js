/*
Your task is to return an array where each object will have a new property 'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >?
 
 */

const addGreetings = (firstName, language) =>
  `Hi ${firstName}, what do you like the most about ${language}?`;

const greetDevelopers = list => {
  list.map(
    //   can use `obj.greeting` too
    obj => (obj["greeting"] = addGreetings(obj.firstName, obj.language))
  );
  return list;
};
module.exports = greetDevelopers;
