import { IDevices } from "../interfaces/IDevices";

export class Tv implements IDevices {

  private volume: number = 10;
  private power: boolean = false;
  private name: string = 'Tv';

  getName(): string {
    return this.name;
  }

  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }

  getPower(): boolean {
    return this.power;
  }

  setVolume(volume: number): void {
    if(volume >= 100 || volume <= 0) return;
    this.volume = volume;
  }

  getVolume(): number {
    return this.volume;
  }

}

