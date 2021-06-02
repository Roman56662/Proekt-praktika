import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';
import { Reviews } from '../../base/Reviews/Reviews'
//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const SecReviews = ({}) => {

  const base = [
    // {
    //   user: 'Alex',
    //   date: '05.03.2021',
    //   figure: 9,
    //   text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facilis, quam hic, repellat ipsa adipisci odio blanditiis nisi, error ut ipsam ipsum maiores totam doloremque impedit velit quas similique explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facilis, quam hic, repellat ipsa adipisci odio blanditiis nisi, error ut ipsam ipsum maiores totam doloremque impedit velit quas similique explicabo?'
    // },
    // {
    //   user: 'Sam',
    //   date: '06.04.2021',
    //   figure: 5,
    //   text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, reiciendis consequuntur accusantium architecto debitis, neque fugiat vitae commodi quis temporibus officia adipisci unde cumque ad facilis sunt voluptates molestiae impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facilis, quam hic, repellat ipsa adipisci odio blanditiis nisi, error ut ipsam ipsum maiores totam doloremque impedit velit quas similique explicabo'
    // },
    // {
    //   user: 'Linda',
    //   date: '07.04.2021',
    //   figure: 3,
    //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sit nam voluptas ullam illo aperiam ab accusamus optio inventore adipisci mollitia quis doloribus eligendi itaque, dolorum cumque dicta quo enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facilis, quam hic, repellat ipsa adipisci odio blanditiis nisi, error ut ipsam ipsum maiores totam doloremque impedit velit quas similique explicabo'
    // },
  ]


  return(
    <div className={cx('section__reviews')}>
      <div className={cx('section__title')}>
        <h1>Отзывы</h1>
      </div>
      <div className={cx('section__reviews__body')}>
        <div className={cx('reviews')}>
          {
            base.length != 0 ?
            base.map((baseItem, index) => {
              return(
                <Reviews 
                  index={index} 
                  key={baseItem.id} 

                  user={baseItem.user}
                  date={baseItem.date}
                  figure={baseItem.figure}
                  text={baseItem.text}
                />
              )
            })
            :
            <h1>Отзывов пока нет</h1>
          }
        </div>
      </div>
    </div>
  )
}