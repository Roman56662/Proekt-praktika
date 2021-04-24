import React from 'react';

import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const TourIcons = ({live, nutrition, fly, transfer, health}) => {
  

  return(
    <div className={cx('icons')}>
      <div className={cx('icons__live')}>
        <div className={cx('statick')}>
          <img src="https://i7.pngflow.com/pngimage/414/415/png-symmetry-star-angle-design-angle-symmetry-art-star-clipart.png" alt=""/>
          <div className={cx('hover')}>
            <p>
              {live == 1 ? 'Проживание включено' : 'Проживание не включено'}
            </p>
          </div>
        </div>
      </div>
      <div className={cx('icons__fly')}>
      <div className={cx('statick')}>
          <img src="https://i7.pngflow.com/pngimage/414/415/png-symmetry-star-angle-design-angle-symmetry-art-star-clipart.png" alt=""/>
          <div className={cx('hover')}>
            <p>
              {fly == 1 ? 'Перелёт включен' : 'Перелёт не включен'}
            </p>
          </div>
        </div>
      </div>
      <div className={cx('icons__nutrition')}>
      <div className={cx('statick')}>
          <img src="https://i7.pngflow.com/pngimage/414/415/png-symmetry-star-angle-design-angle-symmetry-art-star-clipart.png" alt=""/>
          <div className={cx('hover')}>
            <p>
              {nutrition === '' ? 'Питание не включено' : 'Питание включено'}
            </p>
          </div>
        </div>
      </div>
      <div className={cx('icons__transfer')}>
      <div className={cx('statick')}>
          <img src="https://i7.pngflow.com/pngimage/414/415/png-symmetry-star-angle-design-angle-symmetry-art-star-clipart.png" alt=""/>
          <div className={cx('hover')}>
            <p>
              {transfer == 1 ? 'Трансфер включен' : 'Трансфер не включен'}
            </p>
          </div>
        </div>
      </div>
      <div className={cx('icons__health')}>
      <div className={cx('statick')}>
          <img src="https://i7.pngflow.com/pngimage/414/415/png-symmetry-star-angle-design-angle-symmetry-art-star-clipart.png" alt=""/>
          <div className={cx('hover')}>
            <p>
              {health == 1 ? 'Мед страховка включена' : 'Мед страховка не включена'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}