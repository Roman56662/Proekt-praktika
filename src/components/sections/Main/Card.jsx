import React, {useMemo} from 'react'
import axios from 'axios'
import cn from 'classnames/bind';

//Styles
import styles from '../../styles.styl';
const cx = cn.bind(styles);
// const cardsSearchValue = [
//     {Name:'Ростов-на-Дону - Москва', dataAndTimesO:'10.05.21 15:45:00', dataAndTimesP: '04.05.21 23:00:00', price: '13200 руб'},
//     {Name:'Ростов-на-Дону - Москва', dataAndTimesO:'10.05.21 21:45:00', dataAndTimesP: '06.05.21 05:20:00', price: '11900 руб'} ,
//  ];



export const Card = ({item}) => {
    
  const postClick = () => {
  const data = item

// POST
  axios.post('http://localhost:3001/base/pay', data)
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
<div className={cx('Sales_Card')}>
  <div className={cx('Sales_Card_Name_Card')}>
    <div className={cx('Sales_Card_Name')}> 
    {item.cityO} - {item.cityP}
    </div>
  </div>
  <div className={cx('Sales_Card_Data')}>
      <div className={cx('Sales_Card_Data_O')}>Дата и время отправки<br></br>
      {item.dataO} {item.timeO}</div>
      <div className={cx('Sales_Card_Data_P')}>Дата и время прибытия<br></br>
      {item.dataP} {item.timeP}</div>
      <div className={cx('Sales_Card_Price_New')}>{item.price}<br></br><a onClick={postClick} href={'/booking'} className={cx('Sales_Card_Button')} >Купить</a></div>
  </div>
</div>   
  )
} 

