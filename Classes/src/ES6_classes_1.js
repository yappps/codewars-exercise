/* 
1. Fun with ES6 Classes #1 - People, people, people
https://www.codewars.com/kata/fun-with-es6-classes-number-1-people-people-people/train/javascript
*/
// My ans
class Person {
  constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }
  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}

// Better solution: In the constructor use `Object.assign` instead of this.instanceVar = instanceVar
class Person1 {
  constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
    console.log(this, { firstName, lastName, age, gender });
    /* 
        this = Person {}
        { firstName, lastName, age, gender } = { firstName: 'Another Name', lastName: 'Doe', age: 0, gender: 'Male' }
      */

    Object.assign(this, { firstName, lastName, age, gender });

    console.log(this, { firstName, lastName, age, gender });

    /* 
      this = Person { firstName: 'Another Name', lastName: 'Doe', age: 0, gender: 'Male' } 
      { firstName, lastName, age, gender } = { firstName: 'Another Name', lastName: 'Doe', age: 0, gender: 'Male' }
      */
  }
  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}
