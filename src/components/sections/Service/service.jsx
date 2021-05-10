import React from 'react'
import cn from 'classnames/bind';
import Navigation from './navigation'
import {Footer} from './footer'
import {CardsService} from './cardsService'

//Styles
import styles from '../../styles.styl';
const cx = cn.bind(styles);


export const Service = () => {

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