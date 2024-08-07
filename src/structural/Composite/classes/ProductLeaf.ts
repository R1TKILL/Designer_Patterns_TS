import { ProductComponent } from "./../abstactClasses/ProductComponent";

export class ProductLeaf extends ProductComponent {

  private name: string = '';
  private price: number = 0;

  constructor(name: string, price: number){
    super();
    this.name = name;
    this.price = price;
  }

  getPrice(): number {
    return this.price;
  }

}

