import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const TravelCardText = ({hotel, city, seaMeters, beachType, wifiType}) => {

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
          <p>{seaMeters} м до моря</p>
        </div>
        <div className={cx('text__inf_beach text__inf_block')} >
          <p>{beachType} пляж</p>
        </div>
        <div className={cx('text__inf_wifi text__inf_block')} >
          <p>{wifiType} Wi-Fi</p>
        </div>
      </div>
    </div>
  )
}