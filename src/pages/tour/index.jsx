import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux';
import Link from '@ch/next-router/Link';
import Page from 'components/environment/Page';

import cn from 'classnames/bind';
import { Header } from '../../components/sections/Header/Header'
import { Footer } from '../../components/sections/Footer/Footer'
import { SecShortInf } from '../../components/sections/SecShortInf/SecShortInf'
import { SecSlide } from '../../components/sections/SecSlide/SecSlide'
import { SecAboutHotel } from '../../components/sections/SecAboutHotel'
import { SecChooseTour } from '../../components/sections/SecChooseTour'
import { SecReviews } from '../../components/sections/SecReviews'

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

const TourPage = ({}) => {

  const [tourArr, setTourArr] = useState([]) 
  const [hotelArr, setHotelArr] = useState([]) 

// GET HOTEL 
    useEffect( () => {
      async function fetchData() {
        const request = await axios.get('http://localhost:3001/api/base/hotel')
        setHotelArr(request.data)
        return request
      }
      fetchData()
    },[])

// GET TOUR
  useEffect( () => {
    async function fetchData() {
      const request = await axios.get('http://localhost:3001/api/base/tour')
      setTourArr(request.data)
      return request
    }
    fetchData()
  },[])

  const [price, setPrice] = useState()

  // GET TOUR
  useEffect( () => {
    async function fetchData() {
      const request = await axios.get('http://localhost:3001/api/base/tour/price')
      setPrice(request.data)
      return request
    }
    fetchData()
  },[])

  // console.log('tourArr', tourArr)
  console.log('hotelArr', hotelArr)  
    
  return(
    <Page>
    <Header />
      <main>
        <a href='#' className={cx('buttonUp')}> <img src="http://localhost:3001/static/up-arrow.png" alt="" /> </a>
        <div className={cx('container')}>
          <section>
            <SecShortInf hotelArr={ hotelArr }/>
          </section>
          <section id='slide'>
            <SecSlide photoArr={hotelArr.room}/>
          </section>
          <section id='about'>
            <SecAboutHotel mapPos={hotelArr.geopos} about={hotelArr.about}/>
          </section>
          <section id='tour'>
            <SecChooseTour hotelArr={hotelArr} tourArr={tourArr}/>
          </section>
          <section id='reviews'>
            <SecReviews />
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

export default TourPage