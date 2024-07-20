function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {

  firstName: 'Junior',
  lastName: 'Mota',
  age: 0,

  fullName(){
    return `${this.firstName} ${this.lastName}`;
  },

  getAge(){
    return this.age;
  }

}

function subPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = "subclass";
}

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

subPerson.prototype = Object.create(Person.prototype);
subPerson.prototype.constructor = subPerson;


const person1 = new Person('Luiz', 'Scotta', 23);
console.log(person1.fullName());
console.log(person1.getAge());

const person2 = new subPerson('Elena', 'Vieira', 230);
console.log(person2.fullName());
console.log(person2.getAge());


