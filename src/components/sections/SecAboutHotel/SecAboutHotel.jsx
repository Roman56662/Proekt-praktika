import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const SecAboutHotel = ({text, mapPos}) => {



  return(
    <div className={cx('section__about-hotel')}>
      <div className={cx('section__title')}>
        <h1>Об отеле</h1>
      </div>
      <div className={cx('section__about-hotel__body')}>
        <div className={cx('about-hotel__text')}>
          <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque numquam sapiente veniam porro odio saepe distinctio quos cupiditate rerum? Facilis eum vel, obcaecati iusto numquam ex sunt molestias consectetur ea!
          Excepturi doloremque, velit omnis dignissimos inventore nobis exercitationem ullam! Necessitatibus impedit corporis, totam magni autem earum commodi. Expedita voluptatibus ipsam esse, temporibus, perferendis, omnis voluptatem provident saepe voluptas earum ipsum.
          Quae, alias fugiat nihil rerum, ipsum minus recusandae blanditiis expedita ipsa sunt exercitationem nisi dignissimos vel accusamus saepe earum perspiciatis nesciunt quaerat beatae provident? Perferendis ipsum nam optio dignissimos doloremque?
          Quis provident similique aspernatur repellat itaque asperiores impedit beatae ullam dicta facilis! Delectus, neque nam. Natus inventore nesciunt magni dolores laboriosam suscipit veritatis facilis officia commodi ut! Quisquam, doloribus exercitationem!
          Quod ex repellendus doloribus suscipit libero nemo id quia exercitationem itaque ab magnam consectetur, porro rem obcaecati delectus eveniet neque qui, laboriosam optio! Fugiat soluta necessitatibus molestiae reiciendis tenetur. Fugiat.
          Ad laborum consequuntur eaque nulla repellendus exercitationem molestias adipisci? A pariatur eveniet, tempore tenetur accusamus perspiciatis totam placeat maiores ducimus eum debitis, ullam deleniti esse voluptatem sed sequi eligendi reprehenderit!
          Ipsa soluta quis aliquid qui. Eaque debitis porro perspiciatis. Dolorem dicta consectetur repellat aut autem, perspiciatis, culpa tempora id provident excepturi beatae doloremque, expedita corrupti facilis nesciunt qui explicabo? Quas.
          Quod molestiae voluptatem accusantium reprehenderit inventore natus rem dolorum, consectetur eos aspernatur mollitia, molestias odit dolores necessitatibus nam. Beatae corporis vitae consequuntur modi nihil voluptate voluptatem optio soluta minima amet?
          Laboriosam soluta quibusdam fuga eum optio culpa tempora dolore iusto quo, asperiores voluptas dolorum consectetur debitis, repudiandae a quis tenetur inventore qui explicabo. Fugit delectus maxime ullam veniam! Commodi, dicta!
          Officia pariatur reiciendis facilis expedita! Nulla placeat in eaque debitis assumenda eligendi neque architecto modi iusto voluptate earum illo dignissimos illum sit labore obcaecati, vero exercitationem tenetur eius. Quia, minima?
          Rem quas fuga saepe sint et fugiat, odit dolor laborum porro quia eligendi dolore blanditiis. Sequi quam, assumenda est voluptate neque in reprehenderit esse saepe incidunt officia ad excepturi sunt!
          </p>
        </div>
        <div className={cx('about-hotel__map')}>
          {/* <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae492ad9ce365da22c1b662946171e24e67669cc04fff96f736469e604cb6a0cd&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe> */}
        </div>
      </div>
      
    </div>
  )
}