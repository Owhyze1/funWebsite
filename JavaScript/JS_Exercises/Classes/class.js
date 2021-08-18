class Person {
  constructor(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  howOld = () => {
    return this.age;
  }
}


var person = new Person("James", "Bond", 41);

// console.log(`His name is ${person.last}, ${person.first} ${person.last}`);
// console.log(person.howOld());

class Pilot extends Person {
  constructor(experience, type, license) {
    super('John', 'Wick', 35);
    this.experience = experience;
    this.type = type;
    this.license = license;
  }

  getData = () => {
    console.log(`${this.first} ${this.last}`);
    console.log(`Experience ${this.experience} and Type: ${this.type}`);
  }
}

const john = new Pilot(28, 'private', 'TC1234');
john.getData();
console.log(john);

