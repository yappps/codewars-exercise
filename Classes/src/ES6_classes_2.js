/* 
2. Fun with ES6 Classes #2 - Animals and Inheritance
https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance 
*/

class Animal {
  constructor(name, age, legs, species, status) {
    Object.assign(this, { name, age, legs, species, status });
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    Object.assign(this, { master });
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
