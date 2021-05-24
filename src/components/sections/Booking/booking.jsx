import React from 'react'
import Navigation from '../components/navigation'
import cn from 'classnames/bind';
import {Footer} from '../components/footer'
import {CardsService} from './cardsService'

//Styles
import styles from '../../styles.styl';
const cx = cn.bind(styles);


export const Booking= () => {

    return(
        <div className={cx('service_Page')}>
            <Navigation/>
            <div className={cx('service_Page_Cards')}>
                <CardsService/>
            </div>
            <Footer/>
        </div>
    )
}