const personPrototype = {

  firstName: 'Junior',
  lastName: 'Mota',
  age: 0,

  fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

}

const anotherPerson = Object.create(personPrototype);
console.log(anotherPerson.fullName());

// * Shadow copy
anotherPerson.firstName = 'Eliana';
console.log(anotherPerson.fullName());


