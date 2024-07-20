import { IMealBuilder } from "../interfaces/IMealBuilder";
import { Beans } from "./Beans";
import { Beverage } from "./Beverage";
import { Dessert } from "./Dessert";
import { MealBox } from "./MealBox";
import { Rice } from "./Rice";

export class VeganDishBuilder implements IMealBuilder{

  private _meal: MealBox = new MealBox();

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijões', 7);
    this._meal.addMeals(rice, beans);
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('suco', 4);
    this._meal.addMeals(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Bolo de Marácuja (Fatia)', 6);
    this._meal.addMeals(dessert);
    return this;
  }

  resetMeal(): this {
    this._meal = new MealBox();
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

}

