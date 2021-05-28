import React, {useMemo} from 'react'
import cn from 'classnames/bind';

//Styles
import styles from '../../styles.styl';
const cx = cn.bind(styles);

const nameString = [
    {
        Name: <div className={cx('Booking_Card_nameString')}>
        <input placeholder='Фамилия'></input>
        <input placeholder='Имя'></input>
        <input placeholder='Дата рождения'></input>
        <input placeholder='Паспорт'></input>
        </div>}
]

export const BookingCard = () => {

    const nameStringCopy = nameString.map((item) => {
        return ( 
        <div>{item.Name}</div>
        )
       })
       console.log(nameStringCopy)
       const count = 4;
       const nameArray =[];
       for (let i = 0; i < count; i++) {
        let j=i+1
        nameArray.push(<h2>{j} Пассажир</h2>)
        nameArray.push(nameStringCopy);
      }
      console.log(nameArray)
    return(
        <div className={cx('Booking_Card')}>
            <h1>Авиабилет</h1>
            <div className={cx('Booking_Card_Search')}>
                <h2>Откуда</h2>
                <h2>Куда</h2>
                <h2>Дата</h2>
                <h2>Время</h2>
                <input placeholder="Кол-во пассажиров"></input>
            </div>
            <div className={cx('Booking_Card_Humans')}>
                {nameArray.map((item) => {
                 return ( 
                 <div>{item}</div>
                 )
                })}
            </div>
            <h1>После бронирования Вы можете воспользоваться дополнительными услугами</h1>
        </div> 
    )
}