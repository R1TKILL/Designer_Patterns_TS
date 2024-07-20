import { Beans } from "./classes/Beans";
import { Beverage } from "./classes/Beverage";
import { Dessert } from "./classes/Dessert";
import { Meat } from "./classes/Meat";
import { Rice } from "./classes/Rice";
import { MealBox } from "./classes/MealBox";

const rice = new Rice('Arroz', 5);
const beans = new Beans('Feijões', 7);
const meat = new Meat('Carne', 30);
const beverage = new Beverage('suco', 4);
const dessert = new Dessert('Bolo', 6);

const mealBox = new MealBox();
mealBox.addMeals(rice, beans, meat, beverage, dessert);
console.log(mealBox);
console.log(mealBox.getPrice());


