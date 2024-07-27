import { EnterpriseCustomerVehicleFactory } from "./factories/classes/EnterpriseCustomerVehicleFactory"
import { IndividualCustomerVehicleFactory } from "./factories/classes/IndividualCustomerVehicleFactory";

const enterpriseFactory = new EnterpriseCustomerVehicleFactory();
const individualFactory = new IndividualCustomerVehicleFactory();


// * Vehicles and customers:

const enterpriseCustomer1 = enterpriseFactory.createCustomer("Pedro");
const individualCustomer1 = individualFactory.createCustomer("Gabriela");

const enterpriseCar1 = enterpriseFactory.createVehicle("Ferrari", enterpriseCustomer1.getName());
const individualCar1 = individualFactory.createVehicle("Celta", individualCustomer1.getName());

enterpriseCar1.pickUp();
individualCar1.pickUp();


