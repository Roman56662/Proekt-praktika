import React, { useCallback, useState, useMemo } from 'react';
import axios from 'axios'

import {Component} from './Component'
import {DropDownTravel} from '../DropDownTravel/DropDownTravel'
import {Nights} from '../DropDownList/Nights'
import {Humans} from '../DropDownList/Humans'
import {Button} from '../Button/Button'
import {CalendarComponent} from '../Calendar/Calendar'
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const ComponentList = ({
  filterData,
  country,
  regions,
  getCountry,
  dayArrived,
  dayDeparted,
  monthArrived,
  monthDeparted,
  getDayArrived,
  getDayDeparted,
  getMonthArrived,
  getMonthDeparted,
  countNights,
  title,
  count,
  handleClick,
  parentsCount,
  titleParents,
  childrensCount,
  titleChildrens,
  countParents,
  countChildrens,
  handleClickChildrens,
  handleClickParents,
}) => {

const findClick = () => {
  const data = {
    country: country,
    dayArrive: dayArrived,
    dayDepart: dayDeparted,
    monthArrive: monthArrived,
    monthDepart: monthDeparted,
    countNights: countNights,
    parentsCount: parentsCount,
    titleParents: titleParents,
    childrensCount: childrensCount,
    titleChildrens: titleChildrens,
  }

// POST
    axios.post('http://localhost:3001/api/base/hotels', data)
    .then(res => {
        responseData = res.data
        if (responseData.status == 'success') {
          const user = responseData.user
        } else {
          alert('Something went wrong while creating account')
        }
    })
}

  return(
    <div className={cx('components')}>
      <div className={cx('components__body')}>
        <Component cls={'components__block country'} title='Страна, курорт или отель' text={ filterData == null ? (country || 'Выберите страну') : country || filterData.country }>
          <div className={cx('drop-down-travel__drop-body')}>
            <DropDownTravel arr={regions} getCountryFunc={getCountry}/>
          </div>
        </Component>
        <Component 
          cls={'components__block date'} 
          title='Дата вылета' 
          text={ filterData == null || filterData.dayArrive == undefined ? 
            ( dayArrived != undefined && monthArrived != undefined && dayDeparted != undefined && monthDeparted != undefined ? dayArrived + ' ' + monthArrived + ' ' + dayDeparted + ' ' + monthDeparted : 'Выберите дату') : 
            (filterData.dayArrive + ' ' + filterData.monthArrive + ' ' + filterData.dayDepart + ' ' + filterData.monthDepart)} 
        >
          <div className={cx('calendar__drop-body')}>
            <CalendarComponent 
              getDayArrived={getDayArrived} 
              getDayDeparted={getDayDeparted} 
              getMonthArrived={getMonthArrived} 
              getMonthDeparted={getMonthDeparted}
            />
          </div>
        </Component>
        {/* <Component cls={'components__block nights'} title='Кол-во ночей' text={ filterData == null ? (countNights + ' ' + title) : countNights + ' ' + title || filterData.countNights + ' ' + title }>
          <div className={cx('nights__drop-body')} >
            <Nights count={count} onClick={handleClick} title={title} countNights={countNights}/>
          </div>
        </Component> */}
        <Component cls={'components__block humans'} title='Кто поедет' text={ filterData == null ? (parentsCount + ' ' + titleParents ) : ( parentsCount + ' ' + titleParents  || filterData.parentsCount + ' ' + filterData.titleParents )  }>
          <div className={cx('humans__drop-body')}>
            <Humans 
              countParents={countParents} 
              countChildrens={countChildrens} 
              onClickChildrens={handleClickChildrens} 
              onClickParents={handleClickParents} 
              parentsCount={parentsCount} 
              titleParents={titleParents} 
              childrensCount={childrensCount} 
              titleChildrens={titleChildrens}/>
          </div>
        </Component>
      </div>
      <div className={cx('components__block-button')}>
        <Button 
          title={'Искать'} 
          theme={'_button_yellow_bordered components__button '} 
          onClick={ findClick }
          link="/tours"
        />
      </div>
    </div>
  )
  
}





