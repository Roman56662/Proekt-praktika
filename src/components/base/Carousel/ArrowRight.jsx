import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';


const cx = cn.bind(styles);

export const ArrowRight = ({nextSlide}) => {

  return (
    <div onClick={nextSlide} className={cx('slider__arrow slider__arrow-right')}>
      <img src="https://psv4.userapi.com/c532036/u173154522/docs/d28/efc16bf32841/right-arrow.png?extra=0uqA5mg8kvJqnXk6DjEwtcguS20_Q5Aw6wibGUK9t6eF27fiF6f0hsAhGMNwQpOdwm-fm7AszetZRc8aLgVTksyeVYZKwxE2FOR8S_0bxy1nuUGGFu--HK0mxHAzJqULZ6xq5pWGQdGZE09Bj9PsonMtjg" alt=""/>
    </div>
  );
}

