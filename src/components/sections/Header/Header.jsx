import React from 'react';
import { Logo } from '../../base/Logo/Logo'
import { LogoTitle } from '../../base/Logo/LogoTitle'


import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const Header = ({}) => {
  
  const links = [{ label:'Туры', href:''}, { label: 'Часто задаваемые вопросы', href: '/faq'}]

    
  return(
    <header id='head' className={cx('header')} >
      <div className={(cx('header__logo'))}>
        {/* <Logo  /> */}
        <LogoTitle />
      </div>
      <div className={('header__nav')}>
        <nav className={('navigation')}>
          <ul className={('navigation__list')}>
            {
              links.map((item, key) => (
                <li key={key}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}