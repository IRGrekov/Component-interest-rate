import information from "../InfoJson";
import '../style/ofer.css'
import badge from '../img/ok.svg';
import MATERNITY_CAPITAL from '../img/MATERNITY_CAPITAL.svg'
import GOS_HELP_FAMILY from '../img/GOS_HELP_FAMILY.svg'

const featureInfo = {
  DISCOUNT_FOR_CIAN: {
    image: badge,
    test: "Скидка для циан",
    color: "#fff",
    background: "#000",
  },
  GOS_HELP_FAMILY: {
    topFeatureIconSrc: GOS_HELP_FAMILY,
    test: "Гос поддержка семьи",
    color: "#fff",
    background: "#FF7E00",
  },
  MATERNITY_CAPITAL: {
    topFeatureIconSrc: MATERNITY_CAPITAL,
    test: "Материнский капитал",
    color: "#fff",
    background: "#0468FF",
  },
  GOS_HELP_COVID: {
    topFeatureIconSrc: MATERNITY_CAPITAL,
    test: "Помощь при Ковиде",
    color: "#0468FF",
    background: "#000",
  },
  GOS_HELP_IGS: {
    topFeatureIconSrc: badge,
    test: "Гос поддержка для ...",
    color: "#0468FF",
    background: "#0468FF",
  }
}



export function OffersMore({ features }) {

  const actualFeatures = features !== undefined
    ? features.filter(feature => feature in featureInfo)
    : [];
  // console.log('actualFeatures.length', actualFeatures.length)

  if (actualFeatures.length === 0) {
    return null;
  }
  // console.log('actualFeatures.features', features)

  const { topFeatureIconSrc, test, color, background } = featureInfo[actualFeatures[0]];
  // const { color, background } = 
  // const firstFeature = actualFeatures[0]
  // const style = divstyle[firstFeature]

  return (
    <div className='form__item'>
      <div className='form__topFeature' style={{ color, background }}>
        <img className='form__topFeature-icon' src={topFeatureIconSrc} />
        <p className='form__topFeature-text'>{test}</p>
      </div>
      {actualFeatures.length > 1 && (
        <div className='form__rating'>
          <p className='form__rating-text'>+{actualFeatures.length - 1} </p>
        </div>
      )}
    </div>
  )
}

