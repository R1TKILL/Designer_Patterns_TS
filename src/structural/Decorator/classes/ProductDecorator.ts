import { IProduct } from "../interfaces/IProduct";

export class ProductDecorator implements IProduct {

  protected product: IProduct;

  constructor(product: IProduct) {
    this.product = product;
  }

  getPrice(): number {
    return this.product.getPrice();
  }

  getName(): string {
    return this.product.getName();
  }

}

