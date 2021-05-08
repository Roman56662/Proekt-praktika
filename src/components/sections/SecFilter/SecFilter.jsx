import React, {  useState, useCallback, useMemo } from 'react';
import cn from 'classnames/bind';
import { ComponentList } from '../../base/ComponentList/ComponentList'

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const SecFilter = ({}) => {
  

  // DropDownTravel
  const [country, setCountry] = useState()

  const getCountry = useCallback( (q) => {
    setCountry(q);
  })
  
  const regions = (
    [
      {
        id: 1,
        title: 'Турция',
        price: ' от 36 524 ₽',
        popular: true
      },
      {
        id: 2,
        title: 'Россия',
        price: ' от 51 085 ₽',
        popular: true
      },
      {
        id: 3,
        title: 'Доминикана',
        price: ' от 106 741 ₽',
        popular: false
      }
    ]
  )

// Calendar
  const [dayArrived, setDayArrived] = useState()
  const [monthArrived, setMonthArrived] = useState()

  const [dayDeparted, setDayDeparted] = useState()
  const [monthDeparted, setMonthDeparted] = useState()

  const monthArr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'] 

  const getDayArrived = useCallback( (value) => {
    setDayArrived(value);
    setDayDeparted('');
  })

  const getDayDeparted = useCallback( (value) => {
    setDayDeparted(value);
  })

  const getMonthArrived = useCallback( (value) => {
    setMonthArrived(monthArr[value]);
    setMonthDeparted('');
  })

  const getMonthDeparted = useCallback( (value) => {
    setMonthDeparted(monthArr[value]);
  })

// Nights
const [count, setCount] = useState(1)
  const handleClick = useCallback((znak) => {
    if (znak === 'minus') {
      const res = count - 1;
      if (res > 0) {
        setCount(res)
      }
    } else {
      if (count<14) {
      const r = count + 1;
      setCount(r)
      }
    }
  }, [count])

  let countNights = count;
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

// Humans 
  const [countParents, setCountParents] = useState(1)
  const [countChildrens, setCountChildrens] = useState(1)
  const handleClickParents = useCallback((znakParents) => {
    if (znakParents === 'minusParents') {
      const resParents = countParents - 1;
      if (resParents > 0) {
        setCountParents(resParents)
      }
    } else {
      if (countParents<5) {
      const p = countParents + 1;
      setCountParents(p)
      }
    }
  }, [countParents])
  const handleClickChildrens = useCallback((znakChildrens) => {
    if (znakChildrens === 'minusChildren') {
      const resChildrens = countChildrens - 1;
      if (countChildrens > 0) {
        setCountChildrens(resChildrens)
      }
    } else {
      if (countChildrens<5) {
      const c = countChildrens + 1;
      setCountChildrens(c)
      }
    }
  }, [countChildrens])

  let parentsCount = countParents
    let childrensCount = countChildrens
    const titleParents = useMemo(() => {
        let parentTitle = 'взрослый'
        
        if (countParents <= 5 && countParents != 1) {
            parentTitle = 'взрослых'
        }
        return parentTitle
    }, [countParents])

    const titleChildrens = useMemo(() =>{
        let childrenTitle = 'ребёнок'
        
        if (countChildrens < 5 && countChildrens != 1 ) {
            childrenTitle = 'ребёнка'
        }
        if (countChildrens === 5 || countChildrens === 0)
            childrenTitle = 'детей'
        return childrenTitle
    },[countChildrens]
    )
  
    
  return(
      <div className={('section_filter')} >
        <div className={('section__title')}>
          <h1>Туры из вашего города</h1>
        </div>
        <div className={('section__component-list')}>
          <ComponentList 
                country={country}
                regions={regions}
                getCountry={getCountry}
                dayArrived={dayArrived}
                dayDeparted={dayDeparted}
                monthArrived={monthArrived}
                monthDeparted={monthDeparted}
                getDayArrived={getDayArrived}
                getDayDeparted={getDayDeparted}
                getMonthArrived={getMonthArrived}
                getMonthDeparted={getMonthDeparted}
                countNights={countNights}
                title={title}
                count={count}
                handleClick={handleClick}
                parentsCount={parentsCount}
                titleParents={titleParents}
                childrensCount={childrensCount}
                titleChildrens={titleChildrens}
                countParents={countParents}
                countChildrens={countChildrens}
                handleClickChildrens={handleClickChildrens}
                handleClickParents={handleClickParents}
          />
        </div>
      </div>
  )
}