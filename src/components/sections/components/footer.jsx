import React from 'react'
import cn from 'classnames/bind';

//Styles
import styles from '../../styles.styl';
const cx = cn.bind(styles);
const traveler = "Путешественникам"
const company = "Компания"
const adress = [{label:'CHULAKOV Авиабилеты', href:'/home'}]
const aboutCompany = [
    {label:'© 2021 ООО «Студия Олега Чулакова»',href:' '},
    {label:'Политика обработки персональных данных',href:' '},
    {label:'Правовая информация',href:' '},
]
export const Footer = () => {

    return(
        <div className={cx('footer')}>
            <div className={cx('footer_adress')}>
            {adress.map((item) => (
                <a href={item.href} >{item.label}</a>
            ))}
            </div>
            <div className={cx('table')}>
                <p>
                Copyright © 2021 CHULAKOV Авиабилеты - All rights reserved
                </p>
            </div>
            <div className={cx('down')}>
               {aboutCompany.map((item) => (
                    <a href={item.href} >{item.label}</a>
                ))}
            </div>
        </div>
    )
}
