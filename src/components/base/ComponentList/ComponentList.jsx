import React, { useCallback, useState } from 'react';
import {Component} from './Component'
import {DropDownTravel} from '../DropDownTravel/DropDownTravel'
import {Nights} from '../DropDownList/Nights'
import {Humans} from '../DropDownList/Humans'
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);


export const ComponentList = ({arr}) => {

  // const [finalCountry, setFinalCountry] = useState()

  // const getCountry = useCallback( (q) => {
  //   setFinalCountry(q);
  // })

  const [country, setCountry] = useState()

  const getCountry = useCallback( (q) => {
    setCountry(q);
  })

  // const handleClick = useCallback( (q) => {
  //   setCountry(q);
  // })
  



  return(
    <div className={cx('components')}>
      <Component cls={'country'} title='Страна, курорт или отель' text={country}>
        <DropDownTravel arr={arr} getCountryFunc={getCountry}/>
      </Component>
      <Component cls={'date'} title='Дата вылета' text='some text'>

      </Component>
      <Component cls={'nights'} title='Кол-во ночей' text='some text'>
        <Nights/>
      </Component>
      <Component cls={'humans'} title='Кто поедет' text='some text'>
        <Humans />
      </Component>
      <div style={{width:' 158px', height:'40px', backgroundColor:'red', display:'inline-block'}}></div>
    </div>
  )
}





