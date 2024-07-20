import { Person } from "./ts/classes/Person";

const person = new Person('Junior','Mota', 22);
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


