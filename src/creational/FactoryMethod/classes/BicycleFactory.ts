import { VehicleFactory } from "../abstract_classes/Vehicle_factory";
import { IVehicle } from "../interfaces/IVehicle";
import { Bicycle } from "./Bicycle";

export class BicycleFactory extends VehicleFactory {

  getVehicle(vehicleName: string): IVehicle {
    return new Bicycle(vehicleName);
  }

}

