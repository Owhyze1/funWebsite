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

console.log(`His name is ${person.last}, ${person.first} ${person.last}`);
console.log(person.howOld());