import React, { useCallback, useMemo, useState } from 'react';
import cn from 'classnames/bind';

import { TravelCardRating } from './TravelCardRating'
import { TravelCardBackground } from './TravelCardBackground'
import { TravelCardStars } from './TravelCardStars'
import { TravelCardText } from './TravelCardText'
import { Button } from '../Button/Button'

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const TravelCard = ({rating, backImg, stars, 
                            hotel, city, seaMeters,
                            beachType, wifiType, price }) => {
  
  return(
    <div className={cx('travel-card')}>
      <div className={cx('travel-card__back')}>
        <TravelCardRating rating={rating}/>
        <TravelCardBackground backImg={backImg} />
      </div>
      <div className={cx('travel-card__body')}>
        <TravelCardStars stars={stars}/>
        <TravelCardText 
          hotel={hotel}  
          city={city} 
          seaMeters={seaMeters} 
          beachType={beachType} 
          wifiType={wifiType} 
        />
        
      </div>
      <div className={cx('travel-card__button')}>
      <Button link='' title={'Посмотреть тур от ' + price + ' руб.'}  theme={'_button_yellow travel-card__button'} />
      </div>
    </div>
  )
}