import React, { useContext } from 'react'
import cn from 'classnames/bind';
import Link from '@ch/next-router/Link';
import Page from 'components/environment/Page';
import Navigation from '../../components/sections/components/navigation'
import {Footer} from '../../components/sections/components/footer'
import styles from '../../components/styles.styl';

import { BookingCard } from '../../components/sections/Booking/bookingCard';
import { CardsService } from '../../components/sections/Booking/cardsService';
const cx = cn.bind(styles);

const Booking = () => {

    return (
        <Page>
        <div className={cx('sales_Page')}>
            <Navigation/>
            <div>
                <BookingCard/>
            </div>
            <div>
                <CardsService/> 
            </div>
            <Footer/>
        </div>
        </Page>
    )
}
export default Booking;