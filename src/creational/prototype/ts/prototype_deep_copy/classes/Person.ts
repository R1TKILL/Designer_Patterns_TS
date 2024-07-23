import { IPerson } from "../interfaces/IPerson";
import { Address } from "./Address";

export class Person implements IPerson {

  private addresses: Address[] = [];
  private firstName!: string;
  private lastName!: string;
  private age!: number;

  constructor(firstName: string, lastName: string, age: number){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // * Isto muda no deepcopy:
  clone(): Person {
    const newObj = new Person(this.firstName, this.lastName, this.age);
    newObj.addresses = this.addresses.map((item) => item.clone());
    return newObj;
  }

  getAddresses(): string | undefined {
    if(this.addresses.length == 0){
      return 'Don\'t is addresses here'
    }else{
      for(const address of this.addresses){
        return `Rua: ${address.street}, Numero da casa: ${address.number.toString()}`;
      }
    }
  }

  alterStreet(newAdress: string, position: number): void{
    this.addresses[position].street = newAdress;
  }

  alterNumber(newNumber: number, position: number): void{
    this.addresses[position].number = newNumber;
  }

  setName(firstName: string, lastName: string): void{
    this.firstName = firstName;
    this.lastName = lastName;
  }

  setAge(age: number): void{
    this.age = age;
  }


  getFullName(): string{
    return `${this.firstName} ${this.lastName}`;
  }

  getAge(): number{
    return this.age;
  }

  addAddresses(address: Address): void{
    this.addresses.push(address);
  }

}
