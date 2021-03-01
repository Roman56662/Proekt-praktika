import React, {useState,useMemo, useCallback} from 'react'
import './checkbox.styl'
import './counter.styl'


// mod = 'default' | 'custom'
export const Nights = ({ count, onClick }) => {
    const [check,setCheck] = useState(false)
    const [firstNight,setfirstNight] = useState();
    const [lastNight,setlastNight] = useState();

    const title = useMemo(() => {
        let nigthTitle = 'Ночь'
        if (count < 5 && count != 2 && count != 1) {
            nigthTitle = 'Ночи'
        }
        if (count >= 5) {
            nigthTitle = 'Ночей'
        }
        return nigthTitle
    }, [count])

    const checkout= useMemo(() => {
        if (check==true){
            setfirstNight(count-2);
            setlastNight(count+2);
        }
        else {setfirstNight(0);
            setlastNight(0);
            }
    },[check])
    
    const checker = useMemo(() => {
        if (check==true){
            setfirstNight(count-2);
            setlastNight(count+2);
        }
        else {setfirstNight(0);
            setlastNight(0);
        }
    },[count])
    

    
    return (
        <div style={{width:'200px'}}>
        <div style={{display:'flex',justifyContent:'left'}}>
            <button onClick={() => onClick('minus')} className='counterLeft'>-</button>
            <input  type="text" value={count + ' ' + title} className='counterInput'></input>
            <button  onClick={() => onClick('plus')} className='counterRight'>+</button>
        </div>
        <div>
            <label className='check'><input type="checkbox" 
            onChange={()=>setCheck(!check)}/>
            <span>± 2 ночи</span></label>
            {console.log(check)}
            {console.log(firstNight)}
            {console.log(lastNight)}
        </div>
        </div>);
}

