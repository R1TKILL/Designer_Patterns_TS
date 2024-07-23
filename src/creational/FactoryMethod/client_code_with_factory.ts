import { BicycleFactory } from "./classes/BicycleFactory";
import { CarFactory } from "./classes/CarFactory";

const carFactory = new CarFactory();
const bicycleFactory = new BicycleFactory();

const fusca = carFactory.getVehicle('Fusca');
fusca.pickUp('Joana');
fusca.stop();
console.log('--');

const celta = carFactory.getVehicle('Celta');
celta.pickUp('Romário');
celta.stop();
console.log('--');


const caloi = bicycleFactory.getVehicle('Caloi');
caloi.pickUp('João');
caloi.stop();
console.log('--');


const cairu = bicycleFactory.getVehicle('Cairu');
cairu.pickUp('Ingrid');
cairu.stop();


