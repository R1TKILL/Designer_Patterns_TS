import { ProductComponent } from "./../abstactClasses/ProductComponent";

export class ProductComposite extends ProductComponent {

  private children: ProductComponent[] = [];


  getPrice(): number {
    return this.children.reduce((sum, child) => (sum + child.getPrice()), 0);
  }

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if(productIndex != -1) {
      this.children.splice(productIndex, 1);
    }
  }

}

