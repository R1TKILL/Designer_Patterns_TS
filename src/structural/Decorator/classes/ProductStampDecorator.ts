import { ProductDecorator } from "./ProductDecorator";

export class ProductStampDecorator extends ProductDecorator {

  getPrice(): number {
      return this.product.getPrice() + 10;
  }

  getName(): string {
    return this.product.getName() + " com estampa."
  }

}

