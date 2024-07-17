import { MyDatabaseClassic } from './db/MyDatabaseClassic';
import { MyDatabaseModule } from './db/MyDatabaseModule';


const myDatabaseClassic = MyDatabaseClassic.getInstance();
const myDatabaseClassic2 = MyDatabaseClassic.getInstance();
const myDatabaseModule = MyDatabaseModule;


console.log(myDatabaseClassic === myDatabaseClassic2); // true

myDatabaseClassic.showUsers();
myDatabaseClassic.addUser({ name: 'Junior', age: 22 });
myDatabaseClassic.addUser({ name: 'Rafael', age: 36 });
myDatabaseClassic.addUser({ name: 'Pedro', age: 27 });
myDatabaseClassic.addUser({ name: 'Miguel', age: 24 });
myDatabaseClassic.addUser({ name: 'Elias', age: 47 });
myDatabaseClassic.addUser({ name: 'Heitor', age: 38 });
myDatabaseClassic2.removeUser(4);
myDatabaseClassic2.showUsers();

myDatabaseClassic.addUser({ name: 'Gabriel', age: 18 });


export { myDatabaseClassic, myDatabaseModule }
