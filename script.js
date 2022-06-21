'use strict';

//CONSTRUCTOR FUNCTIONS
//ES6 Classes
//Object.create()
const Person = function (fisrtName, birthyear) {
  //instance properties
  this.fisrtName = fisrtName;
  this.birthyear = birthyear;

  //bad practice slows our code
  // this.calcAge = function () {
  //   console.log(2037 - this.birthyear);
  // };
};

const jonas = new Person('jonas', 1991);
console.log(jonas);

const jordan = new Person('jordan', 1990);
console.log(jordan);

console.log(jonas instanceof Person);

//prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthyear);
};

jonas.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';

console.log(jonas, jordan);

//CODING CHALLENGE

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  const newSpeed = this.speed + 10;
  console.log(newSpeed);
};

Car.prototype.brake = function () {
  const newSpeed = this.speed - 5;
  console.log(newSpeed);
};

const CAr1 = new Car('BMW', 120);
console.log(CAr1);

const Car2 = new Car('Mercedes', 95);
console.log(Car2);

CAr1.accelerate();
Car2.brake();

//-----ES6 CLASSES---------

class Person2 {
  constructor(fullName, birthyear) {
    this.fullName = fullName;
    this.birthyear = birthyear;
  }

  calcAge() {
    console.log(2037 - this.birthyear);
  }

  greet() {
    console.log(`hey ${this.fisrtName}`);
  }

  get age() {
    return 2037 - this.birthyear;
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  //static methods
  static hey() {
    console.log('hey there!');
    console.log(this);
  }
}

Person2.hey();
const jessica = new Person2('Jessica Davis', 1996);
console.log(jessica);

console.log(jessica.fullName);

console.log(jessica.age);

// Person2.prototype.greet = function () {
//   console.log(`hey ${this.fisrtName}`);
// };

jessica.greet();

//GETTERS AND SETTERS

const account = {
  owner: 'Arthur',
  movements: [100, 800, 600, 400, 900],

  get latest() {
    return this.movements.slice().pop();
  },

  set latest(mov) {
    return this.movements.push(mov);
  },
};

//FOR GETTER
console.log(account.latest);

//FOR SETTER
account.latest = 50;
console.log(account.movements);
