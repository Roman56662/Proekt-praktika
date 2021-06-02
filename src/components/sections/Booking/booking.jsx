import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Navigation from '../components/navigation'
import cn from 'classnames/bind';
import {BookingCard} from './bookingCard'
import {Footer} from '../components/footer'
import {CardsService} from './cardsService'

//Styles
import styles from '../../styles.styl';

const cx = cn.bind(styles);


export const Booking= () => {

    return(
        <div className={cx('service_Page')}>
            <Navigation/>
            <div className={cx('booking_Page_bookingCard')}>
                <BookingCard ticket={ticket}/>
            </div>
            <div className={cx('service_Page_Cards')}>
                <CardsService/>
            </div>
            <Footer/>
        </div>
    )
}