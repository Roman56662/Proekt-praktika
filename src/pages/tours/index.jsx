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



// GET FILTER
  useEffect( () => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3001/api/base/filter');
        setFilter(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
  },[] )



// GET HOTEL
  useEffect( () => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3001/api/base/hotels');
        setHotel(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
  },[] )



  return(
    <Page>
      <Header />
      <main>
        <div className={cx('container')}>
          <section>
            <SecFilter filterData={ filter }/>
          </section>
          <section>
 
            <SecTours hotelArr={ hotel == undefined || hotel.length == 0 ? [] : hotel } />

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