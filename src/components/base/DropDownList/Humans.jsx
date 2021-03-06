import React, {useState,useMemo} from 'react'
import './counter.styl'

export const Humans = ({countParents, countChildrens, onClick, onClickParents}) => {
    const [parent,setParent] = useState()
    const [children,setChildren] = useState()
    let parentsCount = countParents
    let childrensCount = countChildrens
    const titleParents = useMemo(() => {
        let parentTitle = 'взрослый'
        
        if (countParents < 5 && countParents != 1) {
            parentTitle = 'взрослых'
        }
        return parentTitle
    }, [countParents])

    const titleChildrens = useMemo(() =>{
        let childrenTitle = 'ребёнок'
        
        if (countChildrens < 5 && countChildrens != 1) {
            childrenTitle = 'ребёнка'
        }
        if (countChildrens === 5)
            childrenTitle = 'детей'
        return childrenTitle
    },[countChildrens]
    )


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
                    <button onClick={() => onClick('minusChildren')} className='counterLeft'>-</button>
                    <input  type="text" value={childrensCount + ' ' + titleChildrens} className='counterInput'></input>
                    <button  onClick={() => onClick('plusChildren')} className='counterRight'>+</button>
        </div>
        </div>
        </div>);
}
