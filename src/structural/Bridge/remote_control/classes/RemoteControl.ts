import { IDevices } from "../../device/interfaces/IDevices";

export class RemoteControl {

  protected device: IDevices | undefined;

  constructor(device: IDevices) {
    this.device = device;
  }

  togglePower(): void {

    this.device?.setPower(!this.device.getPower());

    if(this.device?.getPower()){
      console.log(`${this.device?.getName()} power status is on`);
    } else {
      console.log(`${this.device?.getName()} power status is off`);
    }

  }

}

