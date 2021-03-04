import React, { useCallback, useState } from 'react';
import {Component} from './Component'
import {DropDownTravel} from '../DropDownTravel/DropDownTravel'
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);


export const ComponentList = (props) => {


  const [finalCountry, setFinalCountry] = useState()

  const getCountry = useCallback( (q) => {
    setFinalCountry(q);
  })

  // const handleClick = useCallback( (q) => {
  //   setCountry(q);
  // })
  



  return(
    <div className={cx('components')}>
      <Component cls={'country'} title='Страна, курорт или отель' text={finalCountry}>
        <DropDownTravel getCountry={getCountry}/>
      </Component>
      <Component cls={'date'} title='Дата вылета' text='some text'>

      </Component>
      <Component cls={'nights'} title='Кол-во ночей' text='some text'>
      </Component>
      <Component cls={'humans'} title='Кто поедет' text='some text'>
      </Component>
    </div>
  )
}





