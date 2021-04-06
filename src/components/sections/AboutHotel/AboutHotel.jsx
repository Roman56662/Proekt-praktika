import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const AboutHotel = ({}) => {
  return(
    <div className={cx('AboutHotel')}>
      <div className={cx('AboutHotel__title')}>
        <h1>Об отеле</h1>
      </div>
      <div className={cx('AboutHotel__body')}>
        <div className={cx('AboutHotel__text')}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores illum, tempore dicta et perspiciatis nemo veniam ratione odio provident accusantium, iste quia aspernatur exercitationem ut quisquam at vitae doloribus voluptatibus.
          Voluptates, exercitationem! Voluptatem necessitatibus minima, libero tempore, omnis tempora est nulla consequuntur veritatis voluptatibus iure asperiores maiores eos nemo obcaecati? Consequatur, iure fuga. Vel reiciendis at in suscipit pariatur asperiores.
          Perspiciatis sapiente praesentium consectetur distinctio expedita nobis, cum reiciendis quidem, odit quae totam illum culpa laudantium ratione magnam dolorum. Labore voluptates consequatur quis, maiores ad fugit earum quasi est omnis.
          Dolorum laboriosam quidem sapiente consequatur sunt officia adipisci delectus. Esse beatae, vero doloremque unde inventore aperiam labore maxime ipsa commodi reiciendis quidem illo vitae! Corporis eveniet reiciendis numquam esse obcaecati?
          Animi reiciendis earum reprehenderit consequuntur quod nemo praesentium in pariatur iste, est porro eius suscipit doloremque non temporibus quisquam eveniet unde. Perspiciatis cumque, est praesentium fugiat optio magni corrupti qui.
          Sunt excepturi provident aut tempora, cumque incidunt veniam aspernatur nobis ipsam rem amet quisquam itaque qui quas, non officia minus libero! Expedita consectetur alias nobis voluptatem sunt saepe exercitationem dolor.
          Odio aperiam, maiores officia reiciendis iure voluptatum qui earum natus unde a quia libero repellat? Asperiores, enim? Ex et dolorum animi amet totam architecto omnis voluptatem officiis minus, reiciendis minima.
          Placeat consequatur quidem totam temporibus quae a cum fuga mollitia repudiandae excepturi assumenda sapiente repellendus blanditiis delectus odit, id ipsum cumque. Dolore et dolorem earum dignissimos laboriosam ea eius! In?
          Repellat aliquam nisi libero ratione. Odio animi reiciendis ratione quia officiis laboriosam nisi sint quaerat obcaecati, cum eaque non? Iusto mollitia necessitatibus nihil enim perferendis provident libero aperiam reiciendis doloribus?
          Qui obcaecati ipsa commodi sunt iusto itaque quasi at laboriosam excepturi ex, tempora placeat deserunt nam nemo error expedita rem eveniet ullam non, eaque recusandae illo earum voluptatum. Ab, molestiae.</p>
        </div>
        <div className={cx('AboutHotel__map')}>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae492ad9ce365da22c1b662946171e24e67669cc04fff96f736469e604cb6a0cd&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
        </div>
      </div>
      
    </div>
  )
}