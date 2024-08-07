import { EmailValidator } from "./validation/classes/EmailValidator";
import { IEmailValidator } from "./validation/interfaces/IEmailValidator";


function validationEmailInterface(validatorEmail: IEmailValidator, value: string): void {

  if(validatorEmail.isEmail(value)){
    console.log('Email is valid.');
  }else{
    console.log('Email is invalid.');
  }

}

function validationEmailClass(validatorEmail: EmailValidator, value: string): void {

  if(validatorEmail.isEmail(value)){
    console.log('Email is valid.');
  }else{
    console.log('Email is invalid.');
  }

}


const email = 'antoniojunio402@gmail.com';
const emailValidator = new EmailValidator();

validationEmailInterface(new EmailValidator, email);
validationEmailClass(emailValidator, email);



