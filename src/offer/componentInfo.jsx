import information from "../InfoJson";
import '../style/ofer.css'
import badge from '../img/ok.svg';
import logosvg from '../img/logoPage.svg'
import alfasvg from '../img/alfa.svg'
import opensvg from '../img/open.svg'
import gpsvg from '../img/gp.svg'
import sbersvg from '../img/sber.svg'
import promsvg from '../img/prom.svg'
import MATERNITY_CAPITAL from '../img/MATERNITY_CAPITAL.svg'
import { OffersMore } from "./offersMore";
import { ComponentInfoHeader } from "./header";
import GOS_HELP_FAMILY from '../img/GOS_HELP_FAMILY.svg'


// import { ComponentInfoHeader } from "./header";

export function ComponentInfo(props) {
  const {
    offer = '',
  } = props

  // console.log('offer.product', offer.product)
  return (
    <div div className='form__wrapper'>
      < ComponentInfoHeader bankId={props.offer.bankId} product={props.offer.product} />
      < OffersMore features={props.offer.features} />
      <div className='form__item'>
        <div className="form__calculations">
          <p className="form__calculations-subtext">ставка</p>
          <p className="form__calculations-text">{(offer.rate * 100).toFixed(2)}%</p>
        </div>
        <div className="form__calculations">
          <p className="form__calculations-subtext">Макс. кредит</p>
          <p className="form__calculations-text">{(offer.maxAmount / 1000000).toFixed(1)}млн Р</p>
        </div>
        <div className="form__calculations">
          <p className="form__calculations-subtext">Взнос от</p>
          <p className="form__calculations-text">{(offer.minInitialPayment * 100).toFixed(0)}%</p>
        </div>
      </div>
      <div className='form__item'>
        <button className='form__button'>
          Подробнее
        </button>
      </div>
    </div>
  )
}
