import React from 'react';
import cn from 'classnames/bind';
import { Header } from '../../sections/Header/Header'
import { Footer } from '../../sections/Footer/Footer'
import { SecShortInf } from '../../sections/SecShortInf/SecShortInf'
import { SecSlide } from '../../sections/SecSlide/SecSlide'
import { SecAboutHotel } from '../../sections/SecAboutHotel'
import { SecChooseTour } from '../../sections/SecChooseTour'
import { SecReviews } from '../../sections/SecReviews'

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const TourPage = ({}) => {



    
  return(
    <main>
      <Header />
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
      <footer>
        <div className={cx('container')}>
          <Footer />
        </div>
      </footer>
      
    </main>

  )
}