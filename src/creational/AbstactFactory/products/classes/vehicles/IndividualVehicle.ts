import { ICustomer } from "../../interfaces/ICustomer";
import { IVehicle } from "../../interfaces/IVehicle";

export class IndividualVehicle implements IVehicle {

  private name: string = '';
  private readonly customer: ICustomer;

  constructor(name: string, customer: ICustomer) {

    if(name === '') {
      this.name = 'undefined vehicle';
    }

    this.name = name;
    this.customer = customer;

  }

  pickUp(): void {
    console.log(`${this.name} is seeking out the ${this.customer.name}`);
  }

}

