import React from 'react';
import cn from 'classnames/bind';

// Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const Logo = ({}) => {

  const image = 'https://psv4.userapi.com/c532036/u173154522/docs/d44/7d98160ae5c1/text857.png?extra=pPl11pbhVHXDr9V0wiscNEXsebSP7GUB2RZ3s84_kG3MDAyQ3uu__dwU-f5C_1xLVW12KJtOq4J4mzeOniObexWfNrm4ysfINi1XzXwOsX1KqFTIWntnkpAVYapIGPsiG56GFwBq3Qe8yv01bgbRH8H29Q'
  
  return(
      <a className={(cx('logo__img'))} href="">
        <img src={image} alt="logo"/>
      </a>
  )
}