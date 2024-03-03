// 1. Using factory function, a function that creates  an object with methods
/* function Person(name, age) {
  return {
    name: name, age: age, talk() { console.log(`${this.name} can talk also.`); }
  }
} */

// 2. Constructors: Starts with Capital latter & they doesn't return anything.
/* function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.talk = function () {
  console.log(`Hello, My name is ${this.name}.`);
}; */

// 3. Classes: A template for creating objects.
/* class Person {
  constructor(name, age) { // It's the same as above but using class syntax.
    this.name = name;
    this.age = age;
  }

  talk() {
    console.log(`Hi! I am ${this.name}, and I am ${this.age} years old.`);
  }
}

let person1 = new Person("John", 30);
person1.talk(); */

// OOPs Inheritance in JS
//Parent class / Base class.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  walk() {
    console.log(`I am walking.`);
  }
}

//Extending Person class.
class Student extends Person {
  constructor(name, age, marks) {
    //'super' keyword calls the parent constructor.
    super(name, age); // calling parent constructor.
    this.marks = marks;
  }

  // This is a example of overriding.
  walk() {
    console.log(`${this.name} is walking.\nThis is overrided function.`);
  }
}

let std1 = new Student("sarvesh", 10, 90); //Creating student object.
console.log(`Name is ${std1.name}.\nAge is ${std1.age}.\nI got ${std1.marks} marks out of 100.`);
std1.walk();
