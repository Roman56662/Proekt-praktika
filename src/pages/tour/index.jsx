import React, { useState, useEffect, useMemo, useCallback } from 'react';
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

    
  return(
    <Page>
    <Header />
      <main>
        <div className={cx('container')}>
          <section>
            <SecShortInf />
          </section>
          <section id='slide'>
            <SecSlide />
          </section>
          <section id='about'>
            <SecAboutHotel />
          </section>
          <section id='tour'>
            <SecChooseTour />
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