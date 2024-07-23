import { IVehicle } from "../interfaces/IVehicle";

export class Bicycle implements IVehicle {

  private name: string = '';

  constructor(name: string) {
    this.name = name;
  }

  pickUp(customerName: string): void {
    console.log(`${this.name} está buscando ${customerName}.`);
  }

  stop(): void {
    console.log(`${this.name} parou.`);
  }

}
