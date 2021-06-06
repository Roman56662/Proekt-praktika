import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';
import { Reviews } from '../../base/Reviews/Reviews'
//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const SecReviews = ({}) => {

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


  return(
    <div className={cx('section__reviews')}>
      <div className={cx('section__title')}>
        <h1>Отзывы</h1>
      </div>
      <div className={cx('section__reviews__body')}>
        <div className={cx('reviews')}>
          {
            base.length != 0 ?
            base.map((baseItem, index) => {
              return(
                <Reviews 
                  index={index} 
                  key={baseItem.id} 

                  user={baseItem.user}
                  date={baseItem.date}
                  figure={baseItem.figure}
                  text={baseItem.text}
                />
              )
            })
            :
            <h1>Отзывов пока нет</h1>
          }
        </div>
      </div>
    </div>
  )
}