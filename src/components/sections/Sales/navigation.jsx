import React from 'react'
import '../../navigation.styl'

const title = 'Авиабилеты'
const emblem  = 'CHULAKOV'
const links = [
{ label:'Акции', href:'/sales'}, 
{ label: 'Сервисы', href: ''}, 
{ label: 'Перелеты',href:''},]

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className='emblema'>
                {emblem}
                <a href='/'>{title}</a>
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
        </div>
    )
}
export default Navigation