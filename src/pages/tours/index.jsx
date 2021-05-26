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
  
  const [appState, SetAppState] = useState(
    {
      loading: false,
      filter: null,
    }
  ) 

  // GET
  useEffect(() => {
      SetAppState({ loading: true })
      const apiUrl = 'http://localhost:3001/api/test'
      axios.get(apiUrl).then((res) => {
        const filterData = res.data
        SetAppState({
          loading: false,
          filter: filterData
        })
      })
  },[SetAppState])

  console.log(appState.filter)

  return(
    <Page>
      <Header />
      <main>
        <div className={cx('container')}>
          <section>
            <SecFilter filterData={appState.filter}/>
          </section>
          <section>
            <SecTours />
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