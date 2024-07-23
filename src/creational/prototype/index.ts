import { Address } from "./ts/prototype_shallow_copy/classes/Address";
import { Person } from "./ts/prototype_shallow_copy/classes/Person";

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
console.log(person.getAddresses());

person2.alterStreet('Casa engraçada', 0);
person2.alterNumber(0, 0);
console.log(person.getAddresses());

