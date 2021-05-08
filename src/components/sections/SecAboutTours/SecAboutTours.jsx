import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
import { usePosition } from '../../modals/usePosition/usePosition';
const cx = cn.bind(styles);

export const SecAboutTours = ({}) => {


  // if(navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //               var latitude = position.coords.latitude;
  //               var longitude = position.coords.longitude;
  //         alert(latitude+' '+longitude);
  //   });
  //   } else {
  //       alert("Geolocation API не поддерживается в вашем браузере");
  //   }

  return(
    <div className={cx('section__about-tours')}>
      <div className={cx('section__title')}>
        <h1>О турах</h1>
      </div>
      <div className={cx('section__about-tours__body')}>
        <div className={cx('section__about-tours__text')}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci commodi quidem mollitia ea quas reprehenderit repudiandae, dicta repellat deleniti odit reiciendis suscipit sit aperiam iusto vero ex est atque totam!
            Numquam aut eos necessitatibus deserunt sunt nihil ipsa modi, exercitationem quisquam fugiat delectus, asperiores corporis facere? Repellat facilis earum minima odio quo! Consequatur tenetur deserunt odio expedita nemo exercitationem sed.
            Laborum ipsam laudantium tenetur quaerat, at dolor maxime est illum repudiandae, adipisci nemo mollitia omnis minus facere unde maiores aperiam, incidunt accusamus fugiat sapiente ea vitae tempore sint? Dolorem, totam.
            Obcaecati voluptates et perspiciatis distinctio assumenda dicta blanditiis aliquam error nihil quod accusamus expedita omnis sapiente repellat, porro ipsa. Vitae et porro tempore doloribus molestiae hic perferendis eligendi asperiores at.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci commodi quidem mollitia ea quas reprehenderit repudiandae, dicta repellat deleniti odit reiciendis suscipit sit aperiam iusto vero ex est atque totam!
            Numquam aut eos necessitatibus deserunt sunt nihil ipsa modi, exercitationem quisquam fugiat delectus, asperiores corporis facere? Repellat facilis earum minima odio quo! Consequatur tenetur deserunt odio expedita nemo exercitationem sed.
            Laborum ipsam laudantium tenetur quaerat, at dolor maxime est illum repudiandae, adipisci nemo mollitia omnis minus facere unde maiores aperiam, incidunt accusamus fugiat sapiente ea vitae tempore sint? Dolorem, totam.
            Obcaecati voluptates et perspiciatis distinctio assumenda dicta blanditiis aliquam error nihil quod accusamus expedita omnis sapiente repellat, porro ipsa. Vitae et porro tempore doloribus molestiae hic perferendis eligendi asperiores at.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci commodi quidem mollitia ea quas reprehenderit repudiandae, dicta repellat deleniti odit reiciendis suscipit sit aperiam iusto vero ex est atque totam!
            Numquam aut eos necessitatibus deserunt sunt nihil ipsa modi, exercitationem quisquam fugiat delectus, asperiores corporis facere? Repellat facilis earum minima odio quo! Consequatur tenetur deserunt odio expedita nemo exercitationem sed.
            voluptates et perspiciatis distinctio assumenda dicta blanditiis aliquam error nihil quod accusamus expedita omnis sapiente repellat, porro ipsa. Vitae et porro tempore doloribus molestiae hic perferendis eligendi asperiores at.
          </p>
        </div>
        <div className={cx('section__about-tours__text')}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequuntur error, in quaerat officiis voluptates asperiores porro facilis soluta quo consectetur! Earum aut nihil veniam quasi incidunt, in quisquam laudantium!
            Quidem, officiis voluptates? Recusandae molestiae hic unde laboriosam. Cupiditate architecto ut maxime veniam, commodi itaque, assumenda magnam culpa aliquid pariatur suscipit deserunt! Nihil quaerat quis amet ipsam veritatis debitis nulla.
            Similique, est numquam. Maiores fugit aliquam tempora officiis quam dicta dolores natus! Eos impedit repellat modi consequuntur culpa ab architecto molestiae fugit illo soluta ipsum, laboriosam, alias consequatur id aspernatur!
            Fugiat eligendi numquam id dolorum quisquam vitae quo itaque distinctio facere praesentium corporis quasi delectus quas vero esse animi exercitationem maxime facilis porro consequatur, cumque nesciunt qui. Placeat, eaque repudiandae?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequuntur error, in quaerat officiis voluptates asperiores porro facilis soluta quo consectetur! Earum aut nihil veniam quasi incidunt, in quisquam laudantium!
            Quidem, officiis voluptates? Recusandae molestiae hic unde laboriosam. Cupiditate architecto ut maxime veniam, commodi itaque, assumenda magnam culpa aliquid pariatur suscipit deserunt! Nihil quaerat quis amet ipsam veritatis debitis nulla.
            Similique, est numquam. Maiores fugit aliquam tempora officiis quam dicta dolores natus! Eos impedit repellat modi consequuntur culpa ab architecto molestiae fugit illo soluta ipsum, laboriosam, alias consequatur id aspernatur!
            Fugiat eligendi numquam id dolorum quisquam vitae quo itaque distinctio facere praesentium corporis quasi delectus quas vero esse animi exercitationem maxime facilis porro consequatur, cumque nesciunt qui. Placeat, eaque repudiandae?
            quisquam vitae quo itaque distinctio facere praesentium corporis quasi delectus quas vero esse animi exercitationem maxime facilis porro consequatur, cumque nesciunt qui. Placeat, eaque repudiandae?
          </p>
        </div>
      </div>
      
    </div>
  )
}