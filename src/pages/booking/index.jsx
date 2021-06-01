import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Link from '@ch/next-router/Link';
import Page from 'components/environment/Page';

import cn from 'classnames/bind';
import { Header } from '../../components/sections/Header/Header'
import { Footer } from '../../components/sections/Footer/Footer'
import { SecShortInf } from '../../components/sections/SecShortInf/SecShortInf'
import { SecTourist } from '../../components/sections/SecTourist/SecTourist'

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

const Booking = ({}) => {
    
  return(
    <Page>
      <Header />
      <main>
        <div className={cx('container')}>
          {/* <section>
            <SecShortInf/>
          </section> */}
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