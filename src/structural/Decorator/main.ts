import { ProductDecorator } from "./classes/ProductDecorator";
import { ProductStampDecorator } from "./classes/ProductStampDecorator";
import { TShirt } from "./classes/T-shirt";

const tShirt = new TShirt();
const decoratedTShirt = new ProductStampDecorator(tShirt);


console.log(tShirt.getName());
console.log(tShirt.getPrice());

console.log(decoratedTShirt.getName());
console.log(decoratedTShirt.getPrice());

