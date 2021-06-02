import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';
import { TourIcon } from '../../base/TourIcon/TourIcon'
import { TravelCardRating } from '../../base/TravelCard/TravelCardRating'
import { TravelCardStars } from '../../base/TravelCard/TravelCardStars'

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const SecShortInf = ({slide, about, tour, reviews, hotelArr}) => {

  const rating = '9.5'

  const base = [
    {
      title: 'Посмотреть туры',
      image: 'http://localhost:3001/static/car.png'
    },
    {
      title: 'Об отеле',
      image: 'http://localhost:3001/static/hotel.png'
    },
    {
      title: 'Фотографии',
      image: 'http://localhost:3001/static/camera.png'
    },
    {
      title: 'Отзывы',
      image: 'http://localhost:3001/static/comment.png'
    },
  ]

  const anchors = [
    tour = '#tour',
    about = '#about',
    slide = '#slide',
    reviews = '#reviews'
  ]

  return(
    <div className={cx('section__short-inf')}>
      <div className={cx('section__title')}>
        <h1>Туры в отель {hotelArr.title}</h1>
        <p>{hotelArr.city !== undefined ? hotelArr.city.title : '' }</p>
      </div>
      <div className={cx('section__short-inf__body')}>
        <div className={cx('short-inf__tour-raiting')}>
          {/* <TravelCardRating rating='0'/> */}
          <TravelCardStars stars={hotelArr.stars}/>
        </div>
        <div className={cx('short-inf__tour-icon')}>
          {base.map((baseItem, index) => {
          return(
            <TourIcon 
            title={baseItem.title}
            image={baseItem.image}
            anchor={anchors[index]}
            />
          )
        })}
        </div>
      </div>
    </div>
  )
}