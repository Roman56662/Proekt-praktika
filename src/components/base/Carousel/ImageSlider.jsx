import React, { useCallback, useState } from 'react';
import { ArrowLeft } from './ArrowLeft'
import { ArrowRight } from './ArrowRight'
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const ImageSlider = ({base}) => {

  const [current, setCurrent] = useState(0)
  const length = base.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const pervSlide = () => {
    setCurrent(current === 0  ? length - 1 : current - 1)
  }

  if (!Array.isArray(base) || base.length <= 0){
    return null
  }

  return(
    <div className={cx('slider')}>
      <ArrowLeft pervSlide={pervSlide} />
      <ArrowRight nextSlide={nextSlide} />
      {
        base.map((baseItem, index) => {
          return(
            <div className={index === current ? 'slider__slide-active' : 'slider__slide'} key={index}>
              {index === current && (
                <img 
                  className={cx('slider__slider-image')}
                  src={baseItem}
                />
              )}
            </div>
          )
        })
      }
    </div>
  )
}