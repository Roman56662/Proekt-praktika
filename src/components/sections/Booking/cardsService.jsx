import React, {useMemo} from 'react'
import cn from 'classnames/bind';

//Styles
import styles from '../../styles.styl';
const cx = cn.bind(styles);

const cardsServiceTaxi = [
    {Name: 'Такси до аэропорта', Adress:<input type='text'></input>
    , TimeO:<input type='time'></input>
    , Price:'500 руб'}]
const cardsServiceFood = [
    {Name: 'Перекус до вылета', TimeP:<input type='time'></input>,
    Menu: <select>
        <option>Ланч №1 (кофе + тост) 200 руб</option>
        <option>Ланч №2 (кофе + омлет) 250 руб</option>
        <option>Кофе 50 руб</option>
        <option>Ланч №3 (завтрак + чай) 300 руб</option>
        <option>Чай 25 руб</option>
        </select>}
]

export const CardsService = () => {

    return(
        <div className={cx('Cards_Page_Sales')}>
            <div className={cx('Cards_Page_Service_Card')}>
            {cardsServiceTaxi.map((item) => (
               <div className={cx('Sales_Card')}> 
                   <div className={cx('Sales_Card_Name_Card')}>
                        <div className={cx('Sales_Card_Name')}> 
                        {item.Name}
                        </div>
                        <div className={cx('Sales_Card_Price')}>
                            {item.Price}
                        </div>
                    </div>
                    <div className={cx('Sales_Card_Data')}>
                        <div className={cx('Sales_Card_Data_O')}>Адрес отправки <br></br>
                        {item.Adress}</div>
                        <div className={cx('Sales_Card_Data_P')}>Время отправки<br></br>
                        {item.TimeO}</div>
                        <button className={cx('Sales_Card_Button')}>Заказать</button>
                   
               </div>
               </div>
            ))}
                {cardsServiceFood.map((item) => (
               <div className={cx('Sales_Card')}> 
                   <div className={cx('Sales_Card_Name_Card')}>
                        <div className={cx('Sales_Card_Name')}> 
                        {item.Name}
                        </div>
                        <div className={cx('Sales_Card_Price')}>
                            {item.Price}
                        </div>
                    </div>
                    <div className={cx('Sales_Card_Data')}>
                        <div className={cx('Sales_Card_Data_O')}>Время прибытия<br></br>
                        {item.TimeP}</div>
                        <div className={cx('Sales_Card_Data_P')}>Меню<br></br>
                        {item.Menu}</div>
                        <button className={cx('Sales_Card_Button')}>Заказать</button>
               </div>
               </div>
            ))}
            
        </div>
        </div>
    )
}