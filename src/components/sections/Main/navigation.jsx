import React from 'react'
import './navigation.styl'



const Navigation = () => {



    return (
        <div className='navigation'>
            <div className='emblema'>
            <ul>
                <li>
                <img style={{height:"50px"}} src="https://cdn2.scratch.mit.edu/get_image/gallery/2092276_200x130.png"></img>
                </li>
                <li>
                    <a>Сбер Путешествия</a>
                </li>
            </ul>
            </div>
            <div className='navigator'>
                <ul>
                <li>
                    <a>Перелеты</a>
                </li>
                <li>
                    <a>Проживание</a>
                </li>
                <li>
                    <a>Готовые туры</a>
                </li>
                <li>
                    <a>Прокат автомобилей</a>
                </li>
                <li>
                    <a>Сервисы</a>
                </li>
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