import React from 'react';
import cn from 'classnames/bind';
import { Header } from '../../sections/Header/Header'
import { Footer } from '../../sections/Footer/Footer'
import { SecShortInf } from '../../sections/SecShortInf/SecShortInf'
import { SecTourist } from '../../sections/SecTourist/SecTourist'

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const Booking = ({}) => {
    
  return(
    <main>
      <Header />
      <div className={cx('container')}>

        {/* <section>
          <SecShortInf/>
        </section> */}
        <section>
          <SecTourist/>
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