import { VehicleFactory } from "../abstract_classes/Vehicle_factory";
import { IVehicle } from "../interfaces/IVehicle";
import { Car } from "./Car";

export class CarFactory extends VehicleFactory {

  getVehicle(vehicleName: string): IVehicle {
    return new Car(vehicleName);
  }

}

