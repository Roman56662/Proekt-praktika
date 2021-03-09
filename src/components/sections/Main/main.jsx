import React from 'react'
import { ComponentList } from '../../base/ComponentList/ComponentList'
import Navigation from './navigation'
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

const tags = [{ label:'Туры', href:''}, { label: 'Авиабилеты', href: ''}, { label: 'Отели',href:''}, { label: 'Прокат автомобилей',href:''}]
export const Main = () => {

    return(
        <div>
            <Navigation/>
            <div className={cx('container')}>
                <div>
                    <h1>Приобретайте туры онлайн и получайте бонусы</h1>
                </div>
                <div>
                    <ul className={cx('tags')}>
                        {tags.map((item, key) => (
                            <li key={key} className={cx('tags__li')}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <ComponentList/>
            </div>
        </div>
    )
}
