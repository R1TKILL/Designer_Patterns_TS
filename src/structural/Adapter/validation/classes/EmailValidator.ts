import { IEmailValidator } from "../interfaces/IEmailValidator";
import isEmail from "validator/lib/isEmail";


export class EmailValidator implements IEmailValidator {

  isEmail(email: string): boolean {
    return isEmail(email);
  }

}

