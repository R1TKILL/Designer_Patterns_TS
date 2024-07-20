import { IPerson } from "../interfaces/IPerson";

export class Person implements IPerson {

  private firstName!: string;
  private lastName!: string;
  private age!: number;

  constructor(firstName: string, lastName: string, age: number){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  setName(firstName: string, lastName: string): void{
    this.firstName = firstName;
    this.lastName = lastName;
  }

  setAge(age: number): void{
    this.age = age;
  }

  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  getFullName(): string{
    return `${this.firstName} ${this.lastName}`;
  }

  getAge(): number{
    return this.age;
  }

}
