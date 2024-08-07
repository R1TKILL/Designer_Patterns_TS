import { ProductComposite } from "./classes/ProductComposite";
import { ProductLeaf } from "./classes/ProductLeaf";

// * products:

const pen = new ProductLeaf('Caneta', 2);
const smartphone = new ProductLeaf('Iphone X', 3000);
const tShirt = new ProductLeaf('Camiseta', 80);

const productsBox = new ProductComposite();
productsBox.add(pen, smartphone, tShirt);

console.log(`Preço total......:  ${productsBox.getPrice()}R$`);


const tablet = new ProductLeaf('Tablet', 800);
const kindle = new ProductLeaf('Kindle', 450);

const productsBox2 = new ProductComposite();
productsBox2.add(tablet, kindle);
productsBox.add(productsBox2);

console.log(`Preço total......:  ${productsBox.getPrice()}R$`);


