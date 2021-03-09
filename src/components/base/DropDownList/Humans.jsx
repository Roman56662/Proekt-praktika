import React, {useState,useMemo} from 'react'
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const Humans = ({countParents, countChildrens, onClickChildrens, onClickParents, parentsCount, titleParents, childrensCount, titleChildrens}) => {
    const [parent,setParent] = useState()
    const [children,setChildren] = useState()
    


    return (
        <div className={cx('component__humans')}>
            <span className={cx('humans__parents')}>Взрослые</span>
                <div className={cx('counter')}>
                    <button onClick={() => onClickParents('minusParents')} className={cx('counterLeft')}>-</button>
                    <input  type="text" value={parentsCount + ' ' + titleParents} className={cx('counterInput')}></input>
                    <button  onClick={() => onClickParents('plusParents')} className={cx('counterRight')}>+</button>
                </div>
            <span className={cx('humans__children')}>Дети, до 14 лет</span>
            <div>
                <div className={cx('counter')}>
                        <button onClick={() => onClickChildrens('minusChildren')} className={cx('counterLeft')}>-</button>
                        <input  type="text" value={childrensCount + ' ' + titleChildrens} className={cx('counterInput')}></input>
                        <button  onClick={() => onClickChildrens('plusChildren')} className={cx('counterRight')}>+</button>
                </div>
            </div>
        </div>);
}
