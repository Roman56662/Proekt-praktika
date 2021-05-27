import React, { useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios'

import { useSelector } from 'react-redux';
import Link from '@ch/next-router/Link';
import Page from 'components/environment/Page';

import cn from 'classnames/bind';
import { Header } from '../../components/sections/Header/Header'
import { Footer } from '../../components/sections/Footer/Footer'
import { SecFilter } from '../../components/sections/SecFilter'
import { SecTours } from '../../components/sections/SecTours/SecTours'

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

const Tours = ({}) => {
   
  const [filter, setFilter] = useState([])
  const [hotel, setHotel] = useState([])
  const [tour, setTour] = useState([])


// GET FILTER
  useEffect( () => {
    async function fetchData() {
      const request = await axios.get('http://localhost:3001/api/filter')
      setFilter(request.data)
      return request
    }
    fetchData()
  },[])  
 


// GET HOTEL
  useEffect( () => {
    async function fetchData() {
      const request = await axios.get('http://localhost:3001/api/base/tour-card/hotel')
      setHotel(request.data)
      return request
    }
    fetchData()
  },[])

  
// GET TOUR
  useEffect( () => {
    async function fetchData() {
      const request = await axios.get('http://localhost:3001/api/base/tour-card/tour')
      setTour(request.data)
      return request
    }
    fetchData()
  },[])
      


// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();

// axios.get('http://localhost:3001/api/filter', {
//   cancelToken: source.token
// }).catch(function (thrown) {
//   if (axios.isCancel(thrown)) {
//     console.log('Request canceled', thrown.message);
//   } else {
//     // handle error
//   }
// });

// // cancel the request (the message parameter is optional)
// source.cancel('Operation canceled by the user.');





  return(
    <Page>
      <Header />
      <main>
        <div className={cx('container')}>
          <section>
            <SecFilter filterData={ filter }/>
          </section>
          <section>
            <SecTours hotelArr={ hotel } />
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

export default Tours;