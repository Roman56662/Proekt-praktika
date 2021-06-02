import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
import { usePosition } from '../../modals/usePosition/usePosition';
const cx = cn.bind(styles);

export const SecAboutTours = ({}) => {


  // if(navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //               var latitude = position.coords.latitude;
  //               var longitude = position.coords.longitude;
  //         alert(latitude+' '+longitude);
  //   });
  //   } else {
  //       alert("Geolocation API не поддерживается в вашем браузере");
  //   }

  return(
    <div className={cx('section__about-tours')}>
      <div className={cx('section__title')}>
        <h1>О турах</h1>
      </div>
      <div className={cx('section__about-tours__body')}>
        <div className={cx('section__about-tours__text')}>
          <p>
            Наша компания предоставляет Вам удобный поиск туров и бронирование отелей
          </p>
        </div>
      </div>
      
    </div>
  )
}