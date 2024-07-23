import { IPerson } from "../interfaces/IPerson"

export class Address implements IPerson {


  constructor(public street: string, public number: number){}

  // * Isto foi adicionado no deepcopy
  clone(): Address {
    return new Address(this.street, this.number);
  }

  getStreet(): string {
    return this.street
  }

  getNumber(): number {
    return this.number
  }

}
