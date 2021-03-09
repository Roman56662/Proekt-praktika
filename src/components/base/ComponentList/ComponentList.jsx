import React, { useCallback, useState } from 'react';
import {Component} from './Component'
import {DropDownTravel} from '../DropDownTravel/DropDownTravel'
import {Nights} from '../DropDownList/Nights'
import {Humans} from '../DropDownList/Humans'
import {Button} from '../Button/Button'
import {MyCalendar} from '../Calendar/Calendar'
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);


export const ComponentList = ({arr}) => {

// DropDownTravel
  const [country, setCountry] = useState()

  const getCountry = useCallback( (q) => {
    setCountry(q);
  })
  
  const regions = (
    [
      {
        id: 1,
        title: 'Турция',
        price: ' от 36 524 ₽',
        popular: true
      },
      {
        id: 2,
        title: 'Россия',
        price: ' от 51 085 ₽',
        popular: true
      },
      {
        id: 3,
        title: 'Доминикана',
        price: ' от 106 741 ₽',
        popular: false
      }
    ]
  )

// Nights
const [count, setCount] = useState(1)
  const handleClick = useCallback((znak) => {
    if (znak === 'minus') {
      const res = count - 1;
      if (res > 0) {
        setCount(res)
      }
    } else {
      if (count<14) {
      const r = count + 1;
      setCount(r)
      }
    }
  }, [count])

  
  return(
    <div className={cx('components')}>
      <Component cls={'components__block country'} title='Страна, курорт или отель' text={country || 'Выберите страну'}>
        <DropDownTravel arr={regions} getCountryFunc={getCountry}/>
      </Component>
      <Component cls={'components__block date'} title='Дата вылета' text='some text'>
        <MyCalendar />
      </Component>
      <Component cls={'components__block nights'} title='Кол-во ночей' text='some text'>
        <Nights count={count} onClick={handleClick}/>
      </Component>
      <Component cls={'components__block humans'} title='Кто поедет' text='some text'>
        <Humans />
      </Component>
      <Button title={'Искать'} style={'button components__button button_gradient_radius-right'}></Button>
    </div>
  )
}





