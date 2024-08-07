import { ValidationComponent } from "../abstactClasses/ValidationComponent";

export class ValidateEmail extends ValidationComponent {

  validate(value: unknown): boolean {
    if(typeof(value) !== 'string'){
      return false;
    } else {
      return /@/.test(value);
    }
  }

}

export class ValidateString extends ValidationComponent {

  validate(value: unknown): boolean {
    return typeof(value) === 'string';
  }

}

export class ValidateNumber extends ValidationComponent {

  validate(value: unknown): boolean {
    return typeof(value) === 'number';
  }

}

