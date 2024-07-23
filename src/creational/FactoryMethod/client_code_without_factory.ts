import { Car } from "./classes/Car";

/*
  * Veja o uso de muitos news neste código do cliente, iso é algo que deve ser corrigido, onde se usa o new
  * o código se torna dependente do mesmo, então pra evitar quebrar o código do cliente podemos usar o factory.
*/

const fusca = new Car("Fusca");
fusca.pickUp('Joana');
fusca.stop();

const celta = new Car("Celta");
celta.pickUp('Romário');
celta.stop();
