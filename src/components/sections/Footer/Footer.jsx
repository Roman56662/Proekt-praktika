import React from 'react';
import { Logo } from '../../base/Logo/Logo'
import { LogoTitle } from '../../base/Logo/LogoTitle'

import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const Footer = ({}) => {

  return(
    <div className={cx('footer')}>
      <div className={cx('footer__col')}>
        <div className={cx('footer__row-1')}>
          <LogoTitle />
        </div>
        <div className={cx('footer__row-2')}>
          <p>Сделано в Студии Олега Чулакова</p>
          <div className={(cx('footer__logo'))}>
          <Logo />
        </div>
      </div>
      </div>

      <div className={cx('footer__copyright')}>
        <p>© ООО «Студия Олега Чулакова» 2021</p>
      </div>
    </div>
  )
}