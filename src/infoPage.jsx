import information from "./InfoJson";
import './style/ofer.css';
import badge from './img/ok.svg';
import logosvg from './img/logoPage.svg'
import { ComponentInfo } from "./offer/componentInfo";
export function InfoPage() {

  const offer = information.offers.list[0];
  // console.log("info", offer)
  // console.log(information.offers.list[0])
  return (
    <div>
      {information.offers.list.map(el => (
        <ComponentInfo offer={el} />
      ))}
    </div>

  )
}
