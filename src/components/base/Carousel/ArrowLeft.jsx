import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';


const cx = cn.bind(styles);

export const ArrowLeft = ({pervSlide}) => {

  return (
    <div onClick={pervSlide} className={cx('slider__arrow slider__arrow-left')}>
      <img src="https://psv4.userapi.com/c532036/u173154522/docs/d17/7c173beeeb56/left-arrow.png?extra=GU_qceaN29AKHXMoHV1ow9FIVj7PsKpBxUgwwP_Nrf17nr4YO5NUvXjmyhwENrc7WoD6SkUHDP3EFUkjUTdQSK-L47Bx1AxowVdSuU0sWuHaddyFGOL0TxLMFE8KUtYmR2pTsNlWaK179tZzHw2IXiks6A" alt=""/>
    </div>
  );
}