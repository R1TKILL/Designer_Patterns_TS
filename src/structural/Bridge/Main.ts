import { Radio } from "./device/classes/Radio";
import { Tv } from "./device/classes/Tv";
import { RemoteControl } from "./remote_control/classes/RemoteControl";
import { RemoteControlVolume } from "./remote_control/classes/RemoteControlVolume";


export function clientCode(abstraction: RemoteControl | RemoteControlVolume) {

  abstraction.togglePower();

  // * Type Guard.
  if(!('volumeUp' in abstraction)) return;

  abstraction.volumeUp(); // 20
  abstraction.volumeUp(); // 30
  abstraction.volumeUp(); // 40

  abstraction.showVolume();

}


const tv = new Tv();
const radio = new Radio();

const radioRemoteControl = new RemoteControl(radio);
clientCode(radioRemoteControl);

const tvRemoteControl = new RemoteControlVolume(tv);
clientCode(tvRemoteControl);

