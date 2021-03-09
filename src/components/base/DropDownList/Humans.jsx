import React, {useState,useMemo} from 'react'
import './counter.styl'

export const Humans = ({countParents, countChildrens, onClickChildrens, onClickParents, parentsCount, titleParents, childrensCount, titleChildrens}) => {
    const [parent,setParent] = useState()
    const [children,setChildren] = useState()



    return (
        <div style={{width:'200px'}}>
            <span className='nadpis'>Взрослые</span>
                <div style={{display:'flex',justifyContent:'left'}}>
                    <button onClick={() => onClickParents('minusParents')} className='counterLeft'>-</button>
                    <input  type="text" value={parentsCount + ' ' + titleParents} className='counterInput'></input>
                    <button  onClick={() => onClickParents('plusParents')} className='counterRight'>+</button>
                </div>
            <span className='nadpis'>Дети, до 14 лет</span>
        <div>
        <div style={{display:'flex',justifyContent:'left'}}>
                    <button onClick={() => onClickChildrens('minusChildren')} className='counterLeft'>-</button>
                    <input  type="text" value={childrensCount + ' ' + titleChildrens} className='counterInput'></input>
                    <button  onClick={() => onClickChildrens('plusChildren')} className='counterRight'>+</button>
        </div>
        </div>
        </div>);
}
