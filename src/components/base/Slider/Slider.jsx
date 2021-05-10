import React, { Component, createContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../../styles.styl'
import cn from 'classnames/bind';
const cx = cn.bind(styles);


export const SliderTest = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Города назначения </h2>
        <Slider {...settings} className={cx('Slider_Size')}>
          <div>
            <img src={'https://miro.medium.com/max/768/1*8W7fjHZhKf4BT3WEHCy7EQ.jpeg'}></img>
            Москва
          </div>
          <div>
            <img src={'https://miro.medium.com/max/768/1*8W7fjHZhKf4BT3WEHCy7EQ.jpeg'}></img>
            Ростов-на-Дону
          </div>
          <div>
            <img src={'https://miro.medium.com/max/768/1*8W7fjHZhKf4BT3WEHCy7EQ.jpeg'}></img>
            Архангельск
          </div>
          <div>
            <img src={'https://miro.medium.com/max/768/1*8W7fjHZhKf4BT3WEHCy7EQ.jpeg'}></img>
            Санкт-Петербург
          </div>
          <div>
            <img src={'https://miro.medium.com/max/768/1*8W7fjHZhKf4BT3WEHCy7EQ.jpeg'}></img>
            Челябинск
          </div>
          <div>
            <img src={'https://miro.medium.com/max/768/1*8W7fjHZhKf4BT3WEHCy7EQ.jpeg'}></img>
            Владивосток
          </div>
          <div>
            <img src={'https://miro.medium.com/max/768/1*8W7fjHZhKf4BT3WEHCy7EQ.jpeg'}></img>
            Сочи
          </div>
          <div>
            <img src={'https://miro.medium.com/max/768/1*8W7fjHZhKf4BT3WEHCy7EQ.jpeg'}></img>
            Пермь
          </div>
          <div>
            <img src={'https://miro.medium.com/max/768/1*8W7fjHZhKf4BT3WEHCy7EQ.jpeg'}></img>
            Мурманск
          </div>
        </Slider>
      </div>
    );
  }