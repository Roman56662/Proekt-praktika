import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';
import { Reviews } from '../../base/Reviews/Reviews'
import { ReviewAdd } from '../../base/ReviewAdd/ReviewAdd'
//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const SecReviews = ({hotelArr}) => {

  const base = [
    {
      user: 'Александр',
      date: '05.03.2021',
      figure: 9,
      text: 'Отличный отель! Удобное расположение, относительно невысокая цена. Рекомендую всем!'
    },
    {
      user: 'Виктор',
      date: '06.04.2021',
      figure: 8,
      text: 'Всё очень понравилось. Отдыхал с супругой. Все достопримечательности расположены рядом. Уникальное оформление номеров, нигде такого не встречал. Рекомендую!'
    },
  ]
  
console.log(hotelArr.review)

  return(
    <div className={cx('section__reviews')}>
      <div className={cx('section__title')}>
        <h1>Отзывы</h1>
      </div>
      <div className={cx('section__reviews__body')}>
        <div className={cx('reviews')}>
          {
            hotelArr.review != undefined && hotelArr.review.length != 0  ?
            hotelArr.review.map((baseItem, index) => {
              return(
                <Reviews 
                  index={index} 
                  key={baseItem.id} 

                  user={baseItem.user}
                  date={baseItem.date}
                  figure={baseItem.rating}
                  text={baseItem.text}
                />
              )
            })
            :
            <h1 className='error-message' >Отзывов пока нет</h1>
          }
        </div>
        <div>
          <ReviewAdd hotelArr={hotelArr} />
        </div>
      </div>
    </div>
  )
}