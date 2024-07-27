import { IndividualCustomer } from "../../products/classes/customers/IndividualCustomer";
import { IndividualVehicle } from "../../products/classes/vehicles/IndividualVehicle";
import { ICustomer } from "../../products/interfaces/ICustomer";
import { IVehicle } from "../../products/interfaces/IVehicle";
import { ICustomerVehicleFactory } from "../interfaces/ICustomerVehicleFactory";

export class IndividualCustomerVehicleFactory implements ICustomerVehicleFactory {

  createCustomer(customerName: string): ICustomer {
    return new IndividualCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): IVehicle {
    const customer = this.createCustomer(customerName);
    return new IndividualVehicle(vehicleName, customer);
  }

}
