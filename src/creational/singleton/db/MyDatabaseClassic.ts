import { IUser } from '../interfaces/IUser';

export class MyDatabaseClassic{

  /*
    * Todos os itens marcados com * servem pra gerenciar a instância unica da classe, e por isso que quebra o
    * principio da responsabilidade unica, porque gerencia isto e faz o que deve fazer em sí, mais de uma função.
  */

  private static instance: MyDatabaseClassic | null = null;  // *
  private users: IUser[] = [];


  private constructor() {} // *


  static getInstance(): MyDatabaseClassic { // *

    if(this.instance === null){
      this.instance = new MyDatabaseClassic();
    }

    return this.instance;

  }

  addUser(user: IUser): void {
    this.users.push(user);
  }

  removeUser(index: number): void {
    this.users.splice(index, 1);
  }

  showUsers(): void {

    if(this.users.length == 0){
      console.log("There are no users here.");
    }
    else{
      for (const u of this.users) {
        console.log(`Nome: ${u.name}, Idade: ${u.age}`);
      }
    }

  }

}

