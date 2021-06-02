import React from 'react'
import cn from 'classnames/bind';
import styles from '../../styles.styl';
const cx = cn.bind(styles);

const FAQ = [
    {ask:'Как забронировать билет?',
    que:'- Перейдите на страницу "Главная". Введите критерии поиска, которые Вам нужны. Выберите билет, нажав кнопку купить. Вас перенесет на страницу бронирования. Заполните все поля и нажмите кнопку "Забронировать" '
},
{ask:'Как происходит оплата забронированного билета?',
que:'- В день вылета Вы приезжаете в аэропорт и подходите к менеджеру. Говорите, что вы хотите оплатить билет. Он сверяет Ваши личные данные с базой и выдает вам квитанцию о бронировании. Далее Вы подходите к терминалу и оплачиваете Ваш билет согласно инструкции.'},
{ask:'Что необходимо для отказа от забронированного билета?',
que:'- Если Вы хотите отказаться от забронированного билета, пожалуйста позвоните по номеру +7(952)586-82-07 и назовите свои персональные данные. Наш менеджер сверит данные с базой и отменит вашу бронь.'},
{ask:'Что будет с забронированным билетом?',
que:'- Если пассажир не оплачивает бронь за 20 минут до вылета, то она спадает, а билет начинает продаваться непосредственно в аэропорте. Поэтому пожалуйста убедитесь что успеете оплатить билет, дабы неприятных ситуаций'},
]


export const Faq = () =>{


    return(
             <div className={cx('Faq_Text')}>
                <p>Часто задаваемые вопросы</p>
                {FAQ.map((item) => (
                 <div>
                     <h1>{item.ask}</h1>
                     <h2>{item.que}</h2>
                </div>
                ))}    
            </div>   
        )
}