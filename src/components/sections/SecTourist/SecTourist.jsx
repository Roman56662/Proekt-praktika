import React, {  useState, useEffect } from 'react';
import axios from 'axios'
import cn from 'classnames/bind';
import { TouristString } from '../../base/TouristString/TouristString'
import { Button } from '../../base/Button/Button'
//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const SecTourist = ({ tourArr }) => {
  
  const personTextMok = 'Ваши e-mail и телефон'
  const emailMok = 'user@mail.ru'
  const phoneMok = '+7(999)-999-99-99'

  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [fam, setFam] = useState('')
  const [name, setName] = useState('')
  const [birth, setBirth] = useState('')
  const [ipassport, setIpassport] = useState('')
  const [ipassportDate, setIpassportDate] = useState('')

  const emailChange = (event) => {
    setEmail( event.target.value )
  }
  const phoneChange = (event) => {
    setPhone( event.target.value )
  }
  const famChange = (event) => {
    setFam( event.target.value )
  }
  const nameChange = (event) => {
    setName( event.target.value )
  }
  const birthChange = (event) => {
    setBirth( event.target.value )
  }
  const ipassportChange = (event) => {
    setIpassport( event.target.value )
  }
  const ipassportDateChange = (event) => {
    setIpassportDate( event.target.value )
  }

  console.log(tourArr[0]._id)

  const  handleClick = () => {
    if(email != '' && phone != '' && fam != '' && name != '' && birth != '' && ipassport != '' && ipassportDate != ''){
      const id = Date.now()
      alert(id)
      axios.post('http://localhost:3001/api/base/pay/tourist', {
        email: email,
        phone: phone,
        fam: fam,
        name: name,
        birth: new Date(birth),
        ipassport: ipassport,
        ipassportDate: new Date(ipassportDate),
        identifier: id,
        tour_id: tourArr[0]._id
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      setEmail('')
      setPhone('')
      setFam('')
      setName('')
      setBirth('')
      setIpassport('')
      setIpassportDate('')
    } else {
      alert('Заполните все поля')
    }
    
  }

  return(
      <div className={cx('section_tourist')} >
        <div className={cx('section__title')}>
          <h1>Данные туриста</h1>
        </div>
        <div className={cx('section__personal-data')}>
          <div>
            <p>{personTextMok}</p>
          </div>
          <div className={cx('email')}>
            <input onChange={ emailChange }  value={email} type='email' placeholder={emailMok}/>
          </div>
          <div className={cx('tel')}>
            <input onChange={ phoneChange }  value={phone} type='tel' placeholder={phoneMok}/>
          </div>
        </div>
        <div className={cx('block-tourist-cards')}>
          <div className={cx('tourist-string')} >
            <p>Данные туриста</p>
            <div className={cx('string')} >
              <div className={cx('fam')}>
                <input onChange={ famChange }  value={fam} type="text" placeholder='Фамилия' />
              </div>
              <div className={cx('name')}>
                <input onChange={ nameChange }  value={name} type="text" placeholder='Имя' />
              </div>
              <div className={cx('date')}>
                <input onChange={ birthChange }  value={birth} type="date" placeholder='Дата рождения' />
                <p>Дата рождения</p>
              </div>
              {/* <div className={cx('from')}>
                <input type="text" placeholder='Гражданство' />
              </div> */}
              <div className={cx('pas-number')}>
                <input onChange={ ipassportChange }  value={ipassport} type="number" placeholder='Номер загранпаспорта' />
              </div>
              <div className={cx('pas-date')}>
                <input onChange={ ipassportDateChange }  value={ipassportDate} type="date" placeholder='Окончание дейстаия' />
                <p>Окончание дейстаия</p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('booking')} >
          <Button onClick={handleClick} link='#' title={'Забронировать'}  theme={'_button_yellow travel-card__button'} />
        </div>
      </div>
  )
}