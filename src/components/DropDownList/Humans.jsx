import React, {useState} from 'react'
import './counter.styl'

const Humans = () => {
    const [countParents,setParents] = useState(1)
    const [countChildrens,setChildrens] = useState(1)
    const [parent,setParent] = useState('взрослый')
    const [children,setChildren] = useState('ребёнок')

    const plusPar = () => {
        if (countParents<5) {
            setParents(countParents + 1)
        }
        if (countParents > 0) {
                setParent('взрослых')
        }
        else setParent('взрослый')
    }
    const minusPar = () => {
        if (countParents>1) {
            setParents(countParents - 1)
        }
        if (countParents < 3) {
            setParent('взрослый')
        }
    }

    const plusChi = () => {
        if (countChildrens<4) {
            setChildrens(countChildrens + 1)
        }
        if (countChildrens>0) {
            setChildren('ребёнка')
        }
        else setChildren('ребёнок')

    }
    const minusChi = () => {
        if (countChildrens>1){
            setChildrens(countChildrens-1)
        }
        if (countChildrens < 3)
        setChildren('ребёнок')
    }

    return (
        <div style={{width:'200px'}}>
            <span className='nadpis'>Взрослые</span>
                <div style={{display:'flex',justifyContent:'left'}}>
                    <button onClick={minusPar} className='counterLeft'>-</button>
                    <input  type="text" value={countParents + ' ' + parent} className='counterInput'></input>
                    <button  onClick={plusPar} className='counterRight'>+</button>
                </div>
            <span className='nadpis'>Дети, до 14 лет</span>
        <div>
        <div style={{display:'flex',justifyContent:'left'}}>
                    <button onClick={minusChi} className='counterLeft'>-</button>
                    <input  type="text" value={countChildrens + ' ' + children} className='counterInput'></input>
                    <button  onClick={plusChi} className='counterRight'>+</button>
        </div>
        </div>
        </div>);
}

export default Humans; 