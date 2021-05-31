import React, { useEffect, useState } from 'react'
import axios from 'axios'
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

    const [ticket , setTicket] = useState([]) 
 
    useEffect( () => {
      async function fetchData() {
        const request = await axios.get('http://localhost:3001/base/pay')
        setTicket(request.data)
        return request
      }
      fetchData()
    },[])

    console.log(ticket)


    return (
        <Page>
        <div className={cx('sales_Page')}>
            <Navigation/>
            <div className={cx('Main_Booking')}>
            <div>
                <BookingCard ticket={ticket}/>
            </div>
            <div>
                <CardsService/> 
            </div></div>
            <Footer/>
        </div>
        </Page>
    )
}
export default Booking;