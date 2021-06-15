import React, { useCallback, useMemo, useState } from 'react';
import axios from 'axios'
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
                            hotel, city, bar,
                            parking, wifiType, price, hotelArr }) => {



  const postHotelTitle = () => {
    const data = {
      tourTitle: hotelArr.title
    }

    const arr = {
      hotel: hotelArr._id
    }


// POST
      axios.post('http://localhost:3001/api/base/tour', data)
      .then(res => {
          responseData = res.data
          if (responseData.status == 'success') {
            const user = responseData.user
          } else {
            alert('Something went wrong while creating account')
          }
      })

      // POST
      axios.post('http://localhost:3001/api/base/hotel', arr)
      .then(res => {
          responseData = res.arr
          if (responseData.status == 'success') {
            const user = responseData.user
          } else {
            alert('Something went wrong while creating account')
          }
      })
  }



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
          bar={bar} 
          parking={parking} 
          wifiType={wifiType} 
        />
        
      </div>
      <div className={cx('travel-card__button')}>
        <Button onClick={postHotelTitle} link='/tour' title={'Посмотреть туры'}  theme={'_button_yellow travel-card__button'} />
      </div>
    </div>
  )
}