import { EnterpriseCustomer } from "../../products/classes/customers/EnterpriseCustomer";
import { EnterpriseVehicle } from "../../products/classes/vehicles/EnterpriseVehicle";
import { ICustomer } from "../../products/interfaces/ICustomer";
import { IVehicle } from "../../products/interfaces/IVehicle";
import { ICustomerVehicleFactory } from "../interfaces/ICustomerVehicleFactory";

export class EnterpriseCustomerVehicleFactory implements ICustomerVehicleFactory {

  createCustomer(customerName: string): ICustomer {
    return new EnterpriseCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): IVehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseVehicle(vehicleName, customer);
  }

}

