import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);


export const Component = ({cls, title, text , children}) => {

  const [open, setOpen] = useState(false);

  return(
    <div onMouseLeave={() => setOpen(false)}  className={cls}>
      {/* <div onMouseLeave={() => setOpen(false)}  className={cls}> */}
      <div className={cx('component__left')}>
        <div className={cx('component__element component__title')}><p>{title}</p></div>
        <div className={cx('component__element component__text')}><p>{text}</p></div>
      </div>
      <div className={cx('component__right')}>
      <div onClick={() => { setOpen(!open)}} className={cx('component__element component__button')}>
        {/* <button onClick={() => setOpen(!open)}  className={cx('button')}>=
        </button> */}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L4.46967 5.53033C4.76256 5.82322 5.23744 5.82322 5.53033 5.53033L9.53033 1.53033C9.82322 1.23744 9.82322 0.762563 9.53033 0.46967C9.23744 0.176777 8.76256 0.176777 8.46967 0.46967L5 3.93934L1.53033 0.46967Z" fill="#000014"/>
        </svg>

      </div>
      </div>
    {open && children}
      </div>
  )
}