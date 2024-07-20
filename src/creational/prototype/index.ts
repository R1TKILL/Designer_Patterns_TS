import { Address } from "./ts/shallowPrototype/classes/Address";
import { Person } from "./ts/shallowPrototype/classes/Person";

const person = new Person('Junior','Mota', 22);
const addres1 = new Address('Av.Brasil', 15);
const person2 = person.clone();
const person3 = person.clone();


console.log(person2.getFullName());
console.log(person2.getAge());
console.log(person2);

person3.setName('Joana', 'D\'arc');
person3.setAge(16);
console.log(person3.getFullName());
console.log(person3.getAge());
console.log(person3);

// * aqui temos um shallow copy, um problema ao usar prototype, não se usa assim, ou usa-se, mas com deep copy.
person.addAddresses(addres1);
person.alterStreet('Casa do caralho', 0);

console.log(person2.getAddresses());

