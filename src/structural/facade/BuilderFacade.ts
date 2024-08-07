import { MainDishBuilder } from "../../creational/Builder/classes/MainDishBuilder";
import { VeganDishBuilder } from "../../creational/Builder/classes/VeganDishBuilder";

export class BuilderFacade {
  // Fachada para a pasta src/creational/builder/clientBuilder.ts

  private mainDishBuilde = new MainDishBuilder();
  private veganDishBuilde = new VeganDishBuilder();

  mainMakeMeal(): void {
    this.mainDishBuilde.makeMeal().makeDessert().getMeal();
    console.log(this.mainDishBuilde);
    console.log(this.mainDishBuilde.getMeal().getPrice());
  }


  veganMakeMeal(): void {
    this.veganDishBuilde.makeMeal().makeBeverage().getMeal();
    console.log(this.veganDishBuilde);
    console.log(this.veganDishBuilde.getMeal().getPrice());
  }

}


