import { Beans } from "./classes/Beans";
import { Juice } from "./classes/Juice";
import { Cake } from "./classes/Cake";
import { Meat } from "./classes/Meat";
import { Rice } from "./classes/Rice";
import { MealBoxComposite } from "./classes/MealBoxComposite";

const rice = new Rice('Arroz', 5);
const beans = new Beans('Feijões', 7);
const meat = new Meat('Carne', 30);
const juice = new Juice('Bebida', 4);
const cake = new Cake('Bolo', 6);

const mealBox = new MealBoxComposite();
mealBox.addMeals(rice, beans, meat, juice, cake);
console.log(mealBox);
console.log(mealBox.getPrice());


