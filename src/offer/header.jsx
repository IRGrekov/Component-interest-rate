import information from "../InfoJson";
import '../style/ofer.css'
import logosvg from '../img/logoPage.svg'
import alfasvg from '../img/alfa.svg'
import opensvg from '../img/open.svg'
import gpsvg from '../img/gp.svg'
import sbersvg from '../img/sber.svg'
import promsvg from '../img/prom.svg'

const banksInfo = {
  "alfa": {
    logoSrc: alfasvg,
    name: "Альфа Банк",
  },
  "delta": {
    logoSrc: promsvg,
    name: "Дельта Банк",
  },
  "domrf": {
    logoSrc: sbersvg,
    name: "ДомРФ Банк",
  },
  "gpb": {
    logoSrc: gpsvg,
    name: "ГазПромБанк",
  },
  "open": {
    logoSrc: opensvg,
    name: "Банк Открытие",
  },
  "vtb-new": {
    logoSrc: logosvg,
    name: "Банк ВТБ",
  },
}

const housing = {
  "NEW": "Новостройка",
  "USED": "Вторичка",
}

export function ComponentInfoHeader({ bankId, product }) {
  const bankName = bankId.substring(5)
  const { logoSrc, name } = banksInfo[bankName]
  console.log('offer.product', product)


  console.log('housing', housing[product])
  return (
    <div className='form__item'>
      <div className='form__title-wrapper'>
        <p className='form__title'>{name}</p>

        <p className='form__subtitle'>{housing[product]}</p>
      </div>
      <img className='form__icon' src={logoSrc} />
    </div>
  )
}
