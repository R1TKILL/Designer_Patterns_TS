import { MyDatabaseClassic } from './db/MyDatabaseClassic';
import { MyDatabaseModule } from './db/MyDatabaseModule';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';
import { myDatabaseModule as myDatabaseModuleFromModuleA } from './module_a';


const myDatabaseClassic = MyDatabaseClassic.getInstance();
const myDatabaseModule = MyDatabaseModule;

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA); // true

myDatabaseClassic.showUsers();
myDatabaseClassic.addUser({ name: 'Vitor', age: 22 });
myDatabaseClassic.addUser({ name: 'Mariza', age: 36 });
myDatabaseClassic.addUser({ name: 'Cauã', age: 27 });
myDatabaseClassic.addUser({ name: 'Vanessa', age: 24 });
myDatabaseClassic.addUser({ name: 'Elisa', age: 47 });
myDatabaseClassic.addUser({ name: 'Carlos', age: 38 });
myDatabaseClassic.removeUser(4);
myDatabaseClassic.showUsers();

console.log(myDatabaseClassic === myDatabaseModule); // false
console.log(myDatabaseModule === myDatabaseModuleFromModuleA); // true

myDatabaseModule.addUser({ name: 'Erick', age: 24 });
myDatabaseModule.addUser({ name: 'Marcos', age: 25 });
myDatabaseModule.addUser({ name: 'Adalberto', age: 22 });
myDatabaseModule.removeUser(2);
myDatabaseModule.showUsers();



