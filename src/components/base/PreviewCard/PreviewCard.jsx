import React, { useCallback, useState } from 'react';
import axios from 'axios'
import cn from 'classnames/bind';

// Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const PreviewCard = ({mod, back, flag, country, price}) => {

  
  const findClick = () => {
    const data = {
      country: country,
    }
  
  // POST
      axios.post('http://localhost:3001/api/base/tour-popular', data)
      .then(res => {
          responseData = res.data
          if (responseData.status == 'success') {
            const user = responseData.user
          } else {
            alert('Something went wrong while creating account')
          }
      })
  }

  return(
    <a onClick={findClick} href='/tours'  className={cx('preview-card preview-card'+mod)} >
        <div className={cx('preview-card__back')} >
          <img className={cx('back__img')} src={back} alt=""/>
          <div className={cx('preview-card__content')}>
            <div className={cx('preview-card__flag')} >
              <img src={flag} alt=""/>
            </div>
            <div className={cx('preview-card__country')} >
              <h3>{country}</h3>
            </div>
            <div className={cx('preview-card__price')} >
              <p>{price}</p>
            </div>
          </div>
        </div>
    </a>
  )
}