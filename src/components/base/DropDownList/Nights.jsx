import React, {useState,useMemo, useCallback} from 'react'

import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);


// mod = 'default' | 'custom'
export const Nights = ({ count, onClick, countNights, title }) => {
    
    const [check,setCheck] = useState(false)
    const [firstNight,setfirstNight] = useState();
    const [lastNight,setlastNight] = useState();

    

    const checkout= useCallback(() => {
        if (check==false){
            setfirstNight(count-2);
            setlastNight(count+2);
        }
        else {setfirstNight(0);
            setlastNight(0);
            }
            return setCheck(!check)
    },[check, count])
    
  
    return (
        <div className={cx('component__nights')}>
            <div className={cx('counter')}>
                <button onClick={() => onClick('minus')} className={cx('counterLeft')}>-</button>
                <input type="text" value={countNights + ' ' + title} className={cx('counterInput')}></input>
                <button  onClick={() => onClick('plus')} className={cx('counterRight')}>+</button>
            </div>
            <div>
                <label className={cx('nights__checkbox')}>
                <input type="checkbox" onChange={checkout}/>
                <span>± 2 ночи</span></label>
            </div>
        </div>);
}

