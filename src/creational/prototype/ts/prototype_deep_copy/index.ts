import { Address } from "./classes/Address";
import { Person } from "./classes/Person";


const person = new Person('Junior','Mota', 22);
const addres1 = new Address('Av.Brasil', 15);
const addres2 = new Address('We 88 Cn.6', 257);
const person2 = person.clone();
const person3 = person.clone();

person.addAddresses(addres1);
person2.addAddresses(addres2);

console.log(person);


// console.log(person2.getFullName());
// console.log(person2.getAge());
console.log(person2);

person3.setName('Joana', 'D\'arc');
person3.setAge(16);
// console.log(person3.getFullName());
// console.log(person3.getAge());
console.log(person3);


// * Resolvendo com deepcopy
console.log(person.getAddresses());

person.alterStreet('Casa engraçada', 0);
person.alterNumber(0, 0);
console.log(person.getAddresses());


console.log(person2.getAddresses());

