import { IMealComposite } from "../interfaces/IMealComposite";

export abstract class AbstractMealComposite implements IMealComposite {

  private name!: string;
  private price!: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getPrice(): number {
    return this.price;
  }

}


