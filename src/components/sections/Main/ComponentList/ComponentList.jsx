import React, { useCallback, useContext, useState } from 'react';
import Component from './Component'
import DropDownTravel from '../DropDownTravel/DropDownTravel'
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);


const ComponentList = (props) => {

  // const [open, setOpen] = useState(true);

  // const handleClick = useCallback(() => {
  //   setOpen(!open)
  //   console.log('text')
  // },[open])
  const [finalCountry, setFinalCountry] = useState()

  const getCountry = useCallback( (q) => {
    setFinalCountry(q);
  })



  return(
    <div className={cx('components')}>

      <Component class={'country'} title='Страна, курорт или отель' text={finalCountry}>
        <DropDownTravel getCountry={getCountry}/>
      </Component>
      <Component class={'date'} title='Дата вылета' text='some text'>
      </Component>
      <Component class={'nights'} title='Кол-во ночей' text='some text'/>
      <Component class={'people'} title='Кто поедет' text='some text'/>

    </div>
  )
}

export default ComponentList




