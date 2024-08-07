import { ValidateComposite } from "./classes/ValidateComposite";
import { ValidateEmail, ValidateNumber, ValidateString } from "./classes/ValidateLeaf"


const validationEmail = new ValidateEmail();
const validationNumber = new ValidateNumber();
const validationString = new ValidateString();

const validationComposite = new ValidateComposite();

validationComposite.add(validationEmail);
console.log(validationComposite.validate('1@1'));


