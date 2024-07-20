import { IMealComposite } from "../interfaces/IMealComposite";

export class MealBox implements IMealComposite {

  // * Aqui é o produto, objeto composto por outros objetos.

  private readonly _children: IMealComposite[] = [];

  getPrice(): number {
    if(this._children.length == 0){
      return 0;
    } else {
      let totalPrice: number = 0;
      for(const p of this._children){
        totalPrice += p.getPrice();
      }
      return totalPrice;
    }
  }

  addMeals(...meals: IMealComposite[]): void {
    meals.forEach((meal) => {
      this._children.push(meal);
    })
  }

}

