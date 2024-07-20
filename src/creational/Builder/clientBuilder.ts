import { MainDishBuilder } from "./classes/MainDishBuilder";
import { VeganDishBuilder } from "./classes/VeganDishBuilder";


const mainDishBuilde = new MainDishBuilder();
mainDishBuilde.makeMeal().makeDessert().getMeal();
console.log(mainDishBuilde);
console.log(mainDishBuilde.getMeal().getPrice());

const mainDishBuilde2 = mainDishBuilde.resetMeal();
mainDishBuilde2.makeBeverage().getMeal();
console.log(mainDishBuilde2);
console.log(mainDishBuilde2.getMeal().getPrice());


const veganDishBuilde = new VeganDishBuilder();
veganDishBuilde.makeMeal().makeBeverage().getMeal();
console.log(veganDishBuilde);
console.log(veganDishBuilde.getMeal().getPrice());

const veganDishBuilde2 = veganDishBuilde.resetMeal();
veganDishBuilde2.makeDessert().getMeal();
console.log(veganDishBuilde2);
console.log(veganDishBuilde2.getMeal().getPrice());

