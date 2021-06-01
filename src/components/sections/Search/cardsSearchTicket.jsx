import React, {useMemo} from 'react'
import cn from 'classnames/bind';

import {CardTicket} from './CardTicket'

//Styles
import styles from '../../styles.styl';
const cx = cn.bind(styles);



export const Cardssearchticket = ({tickets,cardsSearch}) => {
    

    return(
        <div className={cx('Cards_Search_P')}>
            <div className={cx('Cards_Search_PP')}>
                <p>Результаты поиска  </p>
                <a href='/home'><button>Отменить</button></a>
            </div>
            <div className={cx('Cards_Search')}>
            <div className={cx('Cards_Search_Cards')}>
            {cardsSearch.map((item, key) => (
                    <CardTicket key={key} item={item}/>
                ))}
            </div>
            </div>
        </div>
    )
} 