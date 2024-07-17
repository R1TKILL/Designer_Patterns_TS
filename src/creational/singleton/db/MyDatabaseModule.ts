import { IUser } from '../interfaces/IUser';


const users: IUser[] = [];

export const MyDatabaseModule = {

  addUser(user: IUser): void {
    users.push(user);
  },

  removeUser(index: number): void {
    users.splice(index, 1);
  },

  showUsers(): void {
    if(users.length == 0){
      console.log("There are no users here.");
    }
    else{
      for (const u of users) {
        console.log(`Nome: ${u.name}, Idade: ${u.age}`);
      }
    }
  }
};



