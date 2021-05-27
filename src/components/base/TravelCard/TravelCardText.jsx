import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const TravelCardText = ({hotel, city, bar, parking, wifiType}) => {
  return(
    <div className={cx('travel-card__text')} >
      <div className={cx('text__title')} >
        <div className={cx('text__title_name')} >
          <h3>{hotel}</h3>
          <p>{city}</p>
        </div>
        <div className={cx('text__title_review')} >
          <a href="">n отзывов</a>
        </div>
      </div>
      <div className={cx('text__inf')} >
        <div className={cx('text__inf_sea text__inf_block')} >
          <p>{ bar == undefined ? 'ошибка' : (bar == true ? 'есть бар' : 'нет бара') }</p>
        </div>
        <div className={cx('text__inf_beach text__inf_block')} >
          <p>{ parking == undefined ? 'ошибка' : (parking == true ? 'есть парковка' : 'нет парковки') }</p>
        </div>
        <div className={cx('text__inf_wifi text__inf_block')} >
          <p>{ wifiType == undefined ? 'ошибка' : (wifiType == true ? 'есть wifi' : 'нет wifi') }</p>
        </div>
      </div>
    </div>
  )
}