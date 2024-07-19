import { IMealComposite } from "../interfaces/IMealComposite";

export class MealBoxComposite implements IMealComposite {

  // * Composite: aqui é o produto, objeto composto por outros objetos, segundo o padrão Builder.

  private readonly _children: IMealComposite[] = [];
  private totalPrice: number = 0;

  getPrice(): number {
    if(this._children.length == 0){
      return 0;
    } else {
      for(const p of this._children){
        this.totalPrice += p.getPrice();
      }
      return this.totalPrice;
    }
  }

  addMeals(...meals: IMealComposite[]): void {
    meals.forEach((meal) => {
      this._children.push(meal);
    })
  }

}

