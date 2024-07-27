import { ICustomer } from "../../products/interfaces/ICustomer";
import { IVehicle } from "../../products/interfaces/IVehicle";

export interface ICustomerVehicleFactory {
  createCustomer(customerName: string): ICustomer;
  createVehicle(vehicleName: string, customerName: string): IVehicle
}

