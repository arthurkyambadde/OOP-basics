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
