import { ICustomer } from "../../interfaces/ICustomer";

export class EnterpriseCustomer implements ICustomer {

  private name: string = '';

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

}

