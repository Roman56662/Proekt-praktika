import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const TravelCardStars = ({stars}) => {

  return(
    <div className={cx('travel-card__stars')}>
      <img src="https://psv4.userapi.com/c532036/u173154522/docs/d33/fb6328365f90/star.png?extra=yU-NEcEekBUHRWMU5mwp8EAED-iKy4JSDHBBW5qK21aTHxhjZH1SadcsQkCckinxLaDeQvIX697o3XM1-KLv_eZZGla0OKA6fQjp4FdV9iWbj0ZOsZOpA_IlL7d4nJWpCmNXjSv4grNepTJBxwow5S8bfg" alt=""/>
      <img src="https://psv4.userapi.com/c532036/u173154522/docs/d33/fb6328365f90/star.png?extra=yU-NEcEekBUHRWMU5mwp8EAED-iKy4JSDHBBW5qK21aTHxhjZH1SadcsQkCckinxLaDeQvIX697o3XM1-KLv_eZZGla0OKA6fQjp4FdV9iWbj0ZOsZOpA_IlL7d4nJWpCmNXjSv4grNepTJBxwow5S8bfg" alt=""/>
      <img src="https://psv4.userapi.com/c532036/u173154522/docs/d33/fb6328365f90/star.png?extra=yU-NEcEekBUHRWMU5mwp8EAED-iKy4JSDHBBW5qK21aTHxhjZH1SadcsQkCckinxLaDeQvIX697o3XM1-KLv_eZZGla0OKA6fQjp4FdV9iWbj0ZOsZOpA_IlL7d4nJWpCmNXjSv4grNepTJBxwow5S8bfg" alt=""/>
      <img src="https://psv4.userapi.com/c532036/u173154522/docs/d33/fb6328365f90/star.png?extra=yU-NEcEekBUHRWMU5mwp8EAED-iKy4JSDHBBW5qK21aTHxhjZH1SadcsQkCckinxLaDeQvIX697o3XM1-KLv_eZZGla0OKA6fQjp4FdV9iWbj0ZOsZOpA_IlL7d4nJWpCmNXjSv4grNepTJBxwow5S8bfg" alt=""/>
      <img src="https://psv4.userapi.com/c532036/u173154522/docs/d33/fb6328365f90/star.png?extra=yU-NEcEekBUHRWMU5mwp8EAED-iKy4JSDHBBW5qK21aTHxhjZH1SadcsQkCckinxLaDeQvIX697o3XM1-KLv_eZZGla0OKA6fQjp4FdV9iWbj0ZOsZOpA_IlL7d4nJWpCmNXjSv4grNepTJBxwow5S8bfg" alt=""/>
    </div>
  )
}