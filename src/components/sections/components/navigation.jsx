import React from 'react'
import '../../navigation.styl'

const title = 'билеты'
const emblem  = 'AVIA'
const links = [
{ label:'Акции', href:'/sales'}, 
{ label: 'Перелеты', href: '/perelet'}, 
{ label: 'F.A.Q.',href:'/faq'},]

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