import React, {useMemo} from 'react'
import cn from 'classnames/bind';

//Styles
import styles from '../../styles.styl';
import { CardSales } from './CardSales';
const cx = cn.bind(styles);
const cardsValue = [
   {Name:'Ростов-на-Дону - Москва', dataAndTimesO:'04.05.21 15:45:00', dataAndTimesP: '04.05.21 23:00:00', priceOld: '15400 руб', priceNew: '12200 руб'},
   {Name:'Ростов-на-Дону - Санкт-Петербург', dataAndTimesO:'05.05.21 12:15:00', dataAndTimesP: '05.05.21 21:00:00', priceOld: '24400 руб', priceNew: '18700 руб'},
   {Name:'Москва - Ростов-на-Дону', dataAndTimesO:'05.05.21 21:45:00', dataAndTimesP: '06.05.21 05:20:00', priceOld: '14000 руб', priceNew: '11900 руб'} ,
   {Name:'Ростов-на-Дону - Сочи', dataAndTimesO:'04.05.21 09:00:00', dataAndTimesP : '04.05.21 13:25:00', priceOld: '10400 руб', priceNew: '9200 руб'} ,
   {Name:'Ростов-на-Дону - Архангельск', dataAndTimesO :'07.05.21 10:45:00', dataAndTimesP: '07.05.21 18:50:00', priceOld: '19400 руб', priceNew: '11200 руб'},
     
];


export const Cards = ({cardsSales}) => {
   let countCards = cardsSales.length; 

    const titleCards = useMemo(() => {
        let cardsCount = 'предложение'
        if (countCards < 5 && countCards != 1) {
            cardsCount = 'предложения'
        }
        if (countCards > 4) {
            cardsCount = 'предложений'
        }
        return cardsCount
    }, [countCards])
    return(
        <div className={cx('Cards_Page')}>
        <div className={cx('Cards_Page_Sales')}>
            <div className={cx('Cards_Page_Sales_Card')}> 
            <div className={cx('Cards_Count')}>
            <p>Сейчас у нас действуют скидки на следующие  {countCards} {titleCards}</p>
            </div>
                {cardsSales.map((item, key) => (
                    <CardSales key={key} item={item}/>
                ))}
            </div>
        </div></div>
    )

}