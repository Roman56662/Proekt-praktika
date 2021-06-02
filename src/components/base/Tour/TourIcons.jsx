import React from 'react';

import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const TourIcons = ({ nutrition, fly, transfer, health}) => {
  

  return(
    <div className={cx('icons')}>
      <div className={cx('icons__fly')}>
      <div className={cx('statick')}>
          <img src="http://localhost:3001/static/airplane.png" alt=""/>
          <div className={cx('hover')}>
            <p>
              {fly === true ? 'Перелёт включен' : 'Перелёт не включен'}
            </p>
          </div>
        </div>
      </div>
      <div className={cx('icons__nutrition')}>
      <div className={cx('statick')}>
          <img src="http://localhost:3001/static/restaurant.png" alt=""/>
          <div className={cx('hover')}>
            <p>
              {nutrition === true ? 'Питание включено' : ' Питание не включено'}
            </p>
          </div>
        </div>
      </div>
      <div className={cx('icons__transfer')}>
      <div className={cx('statick')}>
          <img src="http://localhost:3001/static/transfer.png" alt=""/>
          <div className={cx('hover')}>
            <p>
              {transfer === true ? 'Трансфер включен' : 'Трансфер не включен'}
            </p>
          </div>
        </div>
      </div>
      <div className={cx('icons__health')}>
      <div className={cx('statick')}>
          <img src="http://localhost:3001/static/health-care.png" alt=""/>
          <div className={cx('hover')}>
            <p>
              {health === true ? 'Мед страховка включена' : 'Мед страховка не включена'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}