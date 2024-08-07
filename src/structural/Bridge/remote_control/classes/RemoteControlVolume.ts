import { RemoteControl } from "./RemoteControl";

export class RemoteControlVolume extends RemoteControl {

  volumeUp(): void {
    const oldVolume = this.device.getVolume();
    if(oldVolume < 100){
      this.device.setVolume(oldVolume + 10);
    }
  }

  volumeDown(): void {
    const oldVolume = this.device.getVolume();
    if(oldVolume > 0){
      this.device.setVolume(oldVolume - 10);
    }
  }

  showVolume(): void {
    console.log(`This volume of ${this.device.getName()} is ${this.device.getVolume()}`);
  }

}

