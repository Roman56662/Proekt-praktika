import React, {useMemo} from 'react'
import axios from 'axios'
import cn from 'classnames/bind';

//Styles
import styles from '../../styles.styl';
const cx = cn.bind(styles);


export const CardSales = ({item}) => { 
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
          <div className={cx('Sales_Card_Price_Old')}>
              {item.priceOld}
          </div>
      </div>
      <div className={cx('Sales_Card_Data')}>
      <div className={cx('Sales_Card_Data_O')}>Дата отправки <br></br>
          {item.dataO}<br></br> Время отправки<br></br>{item.timesO}<br></br></div>
          <div className={cx('Sales_Card_Data_P')}>Дата прибытия <br></br> 
          {item.dataP}<br></br> Время прибытия<br></br>{item.timesP}</div>
          <div className={cx('Sales_Card_Price_New')}>{item.priceNew}<br></br><a href='/booking'><button onClick={postClick} className={cx('Sales_Card_Button')}>Купить</button></a></div>
      </div>

 </div>   
)
}