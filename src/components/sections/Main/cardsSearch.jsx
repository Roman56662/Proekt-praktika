import React, {useMemo} from 'react'
import cn from 'classnames/bind';

import {Card} from './Card'

//Styles
import styles from '../../styles.styl';
const cx = cn.bind(styles);
// const cardsSearchValue = [
//     {Name:'Ростов-на-Дону - Москва', dataAndTimesO:'10.05.21 15:45:00', dataAndTimesP: '04.05.21 23:00:00', price: '13200 руб'},
//     {Name:'Ростов-на-Дону - Москва', dataAndTimesO:'10.05.21 21:45:00', dataAndTimesP: '06.05.21 05:20:00', price: '11900 руб'} ,
//  ];



export const Cardssearch = ({cardsTest}) => {
    



    
    return(
        <div className={cx('Cards_Search_P')}>
            <div className={cx('Cards_Search_PP')}>
                <p>Результаты поиска</p>
            </div>
            <div className={cx('Cards_Search')}>
            <div className={cx('Cards_Search_Cards')}>
            {cardsTest.map((item, key) => (
                    <Card key={key} item={item}/>
                ))}
            </div>
            </div>
        </div>
    )
} 