import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);


const Component = (props) => {

  const [open, setOpen] = useState(false);

  return(
    <div className={props.class}>
      <div className={cx('component__title')}>
        <p>{props.title}</p>
      </div>
      <div className={cx('component__text')}>
        <p>{props.text}</p>
      </div>
      <div className={cx('component__button')}>
        <button onClick={() => setOpen(!open)} className={cx('button')}>=</button>
    </div>
    {open && props.children}
      </div>
  )
}

export default Component