import React from 'react';

import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const TourIcons = ({}) => {
  

  return(
    <div className={cx('tour-icons')}>
      <div className={cx('tour-icons__live')}>
        <div className={cx('statick')}>
          <img src="https://i7.pngflow.com/pngimage/414/415/png-symmetry-star-angle-design-angle-symmetry-art-star-clipart.png" alt=""/>
          <div className={cx('hover')}>
            <p>some text</p>
          </div>
        </div>
      </div>
      <div className={cx('tour-icons__fly')}>
      <div className={cx('statick')}>
          <img src="https://i7.pngflow.com/pngimage/414/415/png-symmetry-star-angle-design-angle-symmetry-art-star-clipart.png" alt=""/>
          <div className={cx('hover')}>
            <p>some text</p>
          </div>
        </div>
      </div>
      <div className={cx('tour-icons__nutrition')}>
      <div className={cx('statick')}>
          <img src="https://i7.pngflow.com/pngimage/414/415/png-symmetry-star-angle-design-angle-symmetry-art-star-clipart.png" alt=""/>
          <div className={cx('hover')}>
            <p>some text</p>
          </div>
        </div>
      </div>
      <div className={cx('tour-icons__transfer')}>
      <div className={cx('statick')}>
          <img src="https://i7.pngflow.com/pngimage/414/415/png-symmetry-star-angle-design-angle-symmetry-art-star-clipart.png" alt=""/>
          <div className={cx('hover')}>
            <p>some text</p>
          </div>
        </div>
      </div>
      <div className={cx('tour-icons__health')}>
      <div className={cx('statick')}>
          <img src="https://i7.pngflow.com/pngimage/414/415/png-symmetry-star-angle-design-angle-symmetry-art-star-clipart.png" alt=""/>
          <div className={cx('hover')}>
            <p>some text</p>
          </div>
        </div>
      </div>
    </div>
  )
}