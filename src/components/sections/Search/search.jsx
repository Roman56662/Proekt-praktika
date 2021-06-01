import React from 'react'
import Navigation from '../components/navigation'
import cn from 'classnames/bind';
import {Footer} from '../components/footer'
import {Searchstring} from './searchstring'
//Styles
import styles from '../../styles.styl';
import { Cardssearchticket } from './cardsSearchTicket';
const cx = cn.bind(styles);

export const Main = () => {

    return(
        <div className={cx('border')}>
            <Navigation/>
            <div className={cx('Main')}>
                <div className={cx('Cards_Search_P')}>
                <p>Результаты поиска </p></div>
                <div className={cx('test')}>
                <Cardssearchticket cardsTest={cardsTest}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}