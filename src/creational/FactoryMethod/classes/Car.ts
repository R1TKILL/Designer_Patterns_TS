import { IVehicle } from "../interfaces/IVehicle";

export class Car implements IVehicle {

  private name: string = '';

  constructor(name: string) {
    if(name === '') {
      this.name = 'undefined vehicle.';
    }else{
      this.name = name;
    }
  }

  pickUp(customerName: string): void {
    console.log(`${this.name} está buscando o ${customerName}.`);
  }

  stop(): void {
    console.log(`${this.name} parou.`);
  }

}

