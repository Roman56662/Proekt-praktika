import React from 'react'
import '../../navigation.styl'

const title = 'Авиабилеты'
const emblem  = 'CHULAKOV'
const links = [
{ label:'Акции', href:'/sales'}, 
{ label: 'Перелеты', href: '/perelet'}, 
{ label: 'F.A.Q.',href:'/booking'},]

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className='emblema'>
               <a href='/'> {emblem}
                {title}</a>
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