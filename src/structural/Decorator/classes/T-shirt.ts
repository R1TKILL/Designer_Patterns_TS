import { IProduct } from "../interfaces/IProduct";

export class TShirt implements IProduct {

  private name: string = "Camiseta";
  private price: number = 49.9;

  getPrice(): number {
    return this.price;
  }
  
  getName(): string {
    return this.name;
  }

}

