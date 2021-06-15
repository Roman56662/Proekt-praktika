import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import Link from '@ch/next-router/Link';
import Page from 'components/environment/Page';

import cn from 'classnames/bind';
import { Header } from '../../components/sections/Header/Header'
import { Footer } from '../../components/sections/Footer/Footer'


//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

const Faq = () => {

  return (
    <Page>
      <Header />
      <main>
        <div className={cx('container')}>
          <section className={cx('faq')}>
            <h1>Как мне Найти тур?</h1>
            <p>Для начала Вам необходимо открыть главную станицу сайта. Это можно сделать при помощи клика по логотипу. Далее Вам необходимо заполнить поля 
              фильтрации и кликнуть курсором по кнопке "Искать". Если такие туры существуют, Вам отобразятся карточки отелей, с краткой информацией. Далее Вам
              необходимо кликнуть по кнопке 'Посмотреть тур' и ознакомиться с подробной информацией о туре. </p>
            <h1>Как мне забронировать тур?</h1>
            <p>Для начала Вам необходимо перейти к странице тура. Описание поиска тура описана выше. Находясь на странице тура вы можете перейти к просмотру 
              возможных туров, кликнув по кнопке 'Посмотреть туры'. Далее Вам необходимо выбрать подходящий тур и кликнуть по кнопке 'Посмотреть тур'. 
              Далее Вам необходимо заполнить все поля и нажать на кнопку 'Забронировать'. После этого для Вас будет сгенерирован уникальный код.</p>
            <h1>Что мне делать с уникальным кодом?</h1>
            <p>Вы предоставляете данный код в офисе компании.</p>
          </section>
        </div>
      </main>
      <footer>
        
          <div className={cx('fixed')}>
            <div className={cx('container')}>
              <Footer  />
            </div>
          </div>

      </footer>
    </Page>
  );
};

export default Faq;
