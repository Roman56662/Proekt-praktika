import React from 'react';

import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const Header = ({}) => {
  
  const title = 'Chulakov.Туры'
  const image = ''
  const links = [{ label:'Туры', href:''}, { label: 'Интересное', href: ''}, { label: 'Новости',href:''}]
    
  return(
      <div className={('container')} >
        <header className={cx('header')} >
          <div className={(cx('header__logo'))}>
            <a className={(cx('logo__img'))} href="">
              <img src={image} alt="logo"/>
            </a>
            <a className={(cx('logo__title'))} href="">{title}</a>
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
      </div>
  )
}