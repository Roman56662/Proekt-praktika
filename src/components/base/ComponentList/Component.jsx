import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);


export const Component = ({cls, title, text , children}) => {

  const [open, setOpen] = useState(false);

  return(
    <div onMouseLeave={() => setOpen(false)}  className={cls}>
      <div className={cx('component__title')}>
        <p>{title}</p>
      </div>
      <div className={cx('component__text')}>
        <p>{text}</p>
      </div>
      <div className={cx('component__button')}>
        <button onClick={() => setOpen(!open)}  className={cx('button')}>=</button>
    </div>
    {open && children}
      </div>
  )
}