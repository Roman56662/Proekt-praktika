import React, {useState} from 'react'
import './checkbox.styl'
import './counter.styl'

const Nights = () => {
    const [count,setCount] = useState(1)
    const [night,setNight] = useState('Ночь');
    const [check,setCheck] = useState(false)
    const [firstNight,setfirstNight] = useState();
    const [lastNight,setlastNight] = useState();

    const plus = () => {
        if (count<14) {
        setCount(count + 1)}
        if (count>3) {
            setNight('Ночей')
        }
        else setNight('Ночи')
    }
    const minus = () => {
        if (count>1) {
            setCount(count - 1)
        }
        if (count >= 1) {
            setNight('Ночь')
        }
        if (count<6 && count !=2 && count !=1)  {
            setNight('Ночи')
        }   
        if (count>5) {
            setNight('Ночей')
        }
}     

    return (
        <div style={{width:'200px'}}>
        <div style={{display:'flex',justifyContent:'left'}}>
            <button onClick={minus} className='counterLeft'>-</button>
            <input  type="text" value={count + ' ' + night} className='counterInput'></input>
            <button  onClick={plus} className='counterRight'>+</button>
        </div>
        <div>
            <label className='check'><input type="checkbox" 
            onChange={() => {
                if (check==false){
                    setfirstNight(count-2);
                    setlastNight(count+2);
                }
                else {setfirstNight(0);
                    setlastNight(0);
                }
                setCheck(!check)
            }}/><span>± 2 ночи</span></label>
            {console.log(check)}
            {console.log(firstNight)}
            {console.log(lastNight)}
        </div>
        </div>);
}
export default Nights;   
