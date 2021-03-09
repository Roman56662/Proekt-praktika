import React from 'react'
import './navigation.styl'

const title = 'Сбер Путешествия'
const image = 'https://cdn2.scratch.mit.edu/get_image/gallery/2092276_200x130.png'
const links = [{ label:'Перелеты', href:''}, { label: 'Проживание', href: ''}, { label: 'Готовые туры',href:''}, { label: 'Прокат автомобилей',href:''}]

const Navigation = () => {
    return (
        <div className='navigation' style={{width:'1555px'}}>
            <div className='emblema'>
                <img src={image} style={{width:'35px'}}></img>
                <a>{title}</a>
            </div>
            <div className='navigator'>
                <ul>
                    {links.map((item, key) => (
                        <li key={key}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='service'>
                    <ul>
                <li>
                    <a>Шар</a>
                </li>
                <li>
                    <a>2 </a>
                </li>
                <li>
                    <a><span>Войти</span></a>
                </li>
            </ul>
            </div>
        </div>
    )
}
export default Navigation