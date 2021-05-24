import React from 'react'
import cn from 'classnames/bind';

//Styles
import styles from '../../styles.styl';
const cx = cn.bind(styles);
const traveler = "Путешественникам"
const company = "Компания"
const adress = [{label:'Chulkov >', href:' '}]
const aboutTraveler = [
{label: 'Text', href:' '},
{label: 'Text', href:' '},
{label: 'Text', href:' '},
{label: 'Text', href:' '},]
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
            <table>
                <tr className={cx('main_Tr')}>
                    <td><a>{traveler}</a></td>
                    <td><a>{company}</a></td>
                </tr>
                {aboutTraveler.map((aboutTraveler, key) => (
                        <tr key={key} className={cx('all_Tr')}>
                            <td><a href={aboutTraveler.href}>{aboutTraveler.label}</a></td>
                            <td><a href={aboutTraveler.href}>{aboutTraveler.label}</a></td>
                        </tr>
                    ))}
            </table>
            </div>
            <div className={cx('down')}>
               {aboutCompany.map((item) => (
                    <a href={item.href} >{item.label}</a>
                ))}
            </div>
        </div>
    )
}
