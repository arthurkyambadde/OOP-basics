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
// console.log(jonas);

const jordan = new Person('jordan', 1990);
// console.log(jordan);

// console.log(jonas instanceof Person);

//prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthyear);
};

// jonas.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';

// console.log(jonas, jordan);

//-----ES6 CLASSES---------

// Person2.hey();
// const jessica = new Person2('Jessica Davis', 1996);
// console.log(jessica);

// console.log(jessica.fullName);

// console.log(jessica.age);

// Person2.prototype.greet = function () {
//   console.log(`hey ${this.fisrtName}`);
// };

// jessica.greet();

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
// console.log(account.latest);

//FOR SETTER
account.latest = 50;
// console.log(account.movements);

//OBJECT.CREATE()

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
// console.log(steven);

steven.name = 'steven';
steven.birthYear = 2002;

// steven.calcAge();

//CODING CHALLENGE

class CarCreater {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    const currentSpeed = this.speed / 1.6;
    return `current speed is ${currentSpeed}mi/hr`;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const bima = new CarCreater('BMW', 120);
// console.log(bima);

const benze = new CarCreater('mercedes', 95);
// console.log(benze);

const ford = new CarCreater('ford', 120);

// console.log(ford.speedUS);

ford.speedUS = 40;

// console.log(ford.speedUS);

// const CAr1 = new Car('BMW', 120);
// console.log(CAr1);

// const Car2 = new Car('Mercedes', 95);
// console.log(Car2);

//INHERITENCE BETWEEN CONSTRUCTOR FUNCTIONS

const Student = function (fisrtName, birthyear, course) {
  Person.call(this, fisrtName, birthyear);
  this.course = course;
};

//linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.fisrtName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Sciences');
// console.log(mike);

// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);

//coding challenge continued
//CODING CHALLENGE

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const CAr1 = new Car('BMW', 120);
// console.log(CAr1);

const Car2 = new Car('Mercedes', 95);
// console.log(Car2);

// CAr1.accelerate();
// Car2.brake();

const ElectricCar = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
//link the prototype
ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

ElectricCar.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed}km/h with a charge of ${this.charge}`
  );
};

const tesla = new ElectricCar('tesla', 120, 23);
// console.log(tesla);

// tesla.chargeBattery(90);
// console.log(tesla);
// console.log(tesla);

// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();

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
  // static hey() {
  //   console.log('hey there!');
  //   console.log(this);
  // }
}

class Student2 extends Person2 {
  constructor(fullName, birthyear, course) {
    super(fullName, birthyear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I am ${2037 - this.birthyear} years old`);
  }
}

const martha = new Student2('Martha Jones', 2012, 'computer science');

martha.introduce();
martha.calcAge();
