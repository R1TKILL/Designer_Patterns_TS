import { ValidationComponent } from "../abstactClasses/ValidationComponent";

export class ValidateComposite extends ValidationComponent {

  private children: ValidationComponent[] = [];

  validate(value: unknown): boolean {

    for(const child of this.children) {
      const validation = child.validate(value);
      if(!validation) return false;
    }

    return true;
  }

  add(...products: ValidationComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }

}

