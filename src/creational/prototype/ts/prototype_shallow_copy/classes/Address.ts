
export class Address {

  public street!: string;
  public number!: number;

  constructor(street: string, number: number){
    this.street = street;
    this.number = number;
  }

  getStreet(): string {
    return this.street
  }

  getNumber(): number {
    return this.number
  }

}
