import React, { useState } from 'react';
import axios from 'axios'
import cn from 'classnames/bind';
import { Button } from '../Button/Button'
import { RadioButton } from './RadioButton'

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const ReviewAdd = ({hotelArr}) => {

  

  const [number, setNumber] = useState()
  const [comment, setComment] = useState() 
  const [name, setName] = useState() 
  const [mail, setMail] = useState() 

  const getNumber = (q) => {
    setNumber(q)
  }
  const commentChange = (event) => {
    setComment(event.target.value)
  }
  const nameChange = (event) => {
    setName(event.target.value)
  }
  const mailChange = (event) => {
    setMail(event.target.value)
  }

  const updateClick = () => {
    axios.post('http://localhost:3001/api/base/hotel', {
      hotel: hotelArr._id
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const sendHandler = () => {
    console.log(number)
    console.log(comment)
    console.log(name)
    console.log(mail)
    console.log(hotelArr)
    axios.post('http://localhost:3001/api/base/comment', {
      number: number,
      comment: comment,
      name: name,
      email: mail,
      id: hotelArr._id,
      hotelTitle: hotelArr.title
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    setTimeout(updateClick, 500);
  }



const radio = [1,2,3,4,5,6,7,8,9,10]

  return(
    <div className={cx('review-add')} >
      <div className={cx('text')}>
        <h4>Ваша оценка</h4>
          <div className={cx('radio')}>
            {
              radio.map((item, key) => {
                return(
                  <RadioButton getNumber={getNumber} key={key} text={item}/>
                )
              })
            }
          </div>
          
        <textarea 
          onChange={ commentChange } 
          value={comment} 
          className={cx('comment')} 
          type="text" 
          placeholder='Отставьте комментарий' 
        />
      </div>
      <div className={cx('row')}>
        <div className={cx('col-1')}>
          <input 
            onChange={ nameChange } 
            value={name}
            type="text" 
            placeholder='Имя' 
          />
          <input 
            onChange={ mailChange } 
            value={mail}
            type="email" 
            placeholder='Email'
          />
        </div>
        <div className={cx('col-2')}>
          <Button 
            title={'Отправить'} 
            onClick={ sendHandler }
            theme={'_button_yellow_bordered components__button button-comment'} 
            link="#"
          />
        </div>
      </div>
    </div>
  )
}