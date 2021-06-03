import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux';

import Link from '@ch/next-router/Link';
import Page from 'components/environment/Page';

import cn from 'classnames/bind';
import { Header } from '../../components/sections/Header/Header'
import { Footer } from '../../components/sections/Footer/Footer'
import { SecShortInf } from '../../components/sections/SecShortInf/SecShortInf'
import { SecTourist } from '../../components/sections/SecTourist/SecTourist'
import { TourIcon } from '../../components/base/TourIcon/TourIcon'
import { TravelCardRating } from '../../components/base/TravelCard/TravelCardRating'
import { TravelCardStars } from '../../components/base/TravelCard/TravelCardStars'

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

const Booking = ({}) => {

  const [tour, setTour] = useState()
  const [hotelArr, setHotelArr] = useState([]) 

    // GET COUNTRY
    useEffect( () => {
      async function fetchData() {
        const request = await axios.get('http://localhost:3001/api/base/pay')
        setTour(request.data)
        return request
      }
      fetchData()
    },[])

    

    // GET HOTEL 
        useEffect( () => {
          async function fetchData() {
            const request = await axios.get('http://localhost:3001/api/base/hotel')
            setHotelArr(request.data)
            return request
          }
          fetchData()
        },[])

    console.log(tour)
    
  return(
    <Page>
      <Header />
      <main>
        <div className={cx('container')}>
          <section>
          <div className={cx('section__short-inf')}>
      <div className={cx('section__title')}>
        <h1>Отель {hotelArr.title}</h1>
        <p>{hotelArr.city !== undefined ? hotelArr.city.title : '' }</p>
      </div>
      <div className={cx('section__short-inf__body')}>
        <div className={cx('short-inf__tour-raiting')}>
          {/* <TravelCardRating rating='0'/> */}
          <TravelCardStars stars={hotelArr.stars}/>
        </div>
      </div>
    </div>
          </section>
          <section>
            <SecTourist/>
          </section>
        </div>
      </main>
      <footer>
        <div className={cx('container')}>
          <Footer />
        </div>
      </footer>
    </Page>
  )
}

export default Booking;