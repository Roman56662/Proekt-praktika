import React, {useState,useMemo, useCallback} from 'react'
import './checkbox.styl'
import './counter.styl'


// mod = 'default' | 'custom'
export const Nights = ({ count, onClick }) => {
    let countNights = count;
    const [check,setCheck] = useState(false)
    const [firstNight,setfirstNight] = useState();
    const [lastNight,setlastNight] = useState();

    const title = useMemo(() => {
        let nigthTitle = 'Ночь'
        if (count < 5 && count != 1) {
            nigthTitle = 'Ночи'
        }
        if (count > 4) {
            nigthTitle = 'Ночей'
        }
        return nigthTitle
    }, [count])

    const checkout= useCallback(() => {
        if (check==false){
            setfirstNight(count-2);
            setlastNight(count+2);
        }
        else {setfirstNight(0);
            setlastNight(0);
            }
            return setCheck(!check)
    },[check,count])
    
  
    return (
        <div>
            <div style={{display:'flex',justifyContent:'left'}}>
                <button onClick={() => onClick('minus')} className='counterLeft'>-</button>
                <input type="text" value={countNights + ' ' + title} className='counterInput'></input>
                <button  onClick={() => onClick('plus')} className='counterRight'>+</button>
            </div>
            <div>
                <label className='check'>
                <input type="checkbox" onChange={checkout}/>
                <span>± 2 ночи</span></label>
            </div>
        </div>);
}

