import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';
import { Carousel } from '../../base/Carousel/Carousel'

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const SecSlide = ({}) => {

  const base = [
    {
      id: 1,
      image: 'https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg'
    },
    {
      id: 2,
      image: 'https://i.artfile.ru/2048x1093_1071593_[www.ArtFile.ru].jpg'
    },
    {
      id: 3,
      image: 'https://www.expedea.ru/wp-content/uploads/2020/03/%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F-5-768x505.jpg'
    },
  ]

  return(
    <div className={cx('section__slide')}>
      <div className={cx('section__title')}>
        <h1>Фотографии</h1>
      </div>
      <div className={cx('section__slide__body')}>
        <div className={cx('choose-tour__slide')}>
          <Carousel 
            base={base}
          />
        </div>
      </div>
    </div>
  )
}