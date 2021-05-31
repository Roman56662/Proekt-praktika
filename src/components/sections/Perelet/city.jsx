import React, {useState,useMemo} from 'react'
import cn from 'classnames/bind';
//Styles
import styles from '../../styles.styl';
const cx = cn.bind(styles);

const cityInfo = [
    { Name: 'Ростов-на-Дону',
    info: <p>Ростов-на-Дону — крупнейший город на юго-западе России, административный центр Южного федерального округа и Ростовской области. Город воинской славы (2008). Основан по грамоте императрицы Елизаветы Петровны от 15 декабря 1749 года.
        Расположен на юго-востоке Восточно-Европейской равнины, на обоих берегах реки Дон в 46 км от места её впадения в Азовское море и в 380 км от Чёрного моря, в 1092 км к югу от Москвы. Население — 1 137 704 человека, это десятый по численности населения город России.
        В пределах Ростовской агломерации проживает свыше 2,16 млн человек. Город является крупным административным, экономическим, культурным, научно-образовательным, промышленным центром и важнейшим транспортным узлом Юга России. Неофициально Ростов именуют «Воротами Кавказа» и «южной столицей России», а также донской столицей.
        21 февраля 2019 года Ростов-на-Дону был признан региональной столицей на законодательном уровне.</p>,
    foto:<div className={cx('City_Perelet_Info_Foto')}>
        <div><img src='https://i.ytimg.com/vi/M6rQ0x0M0IE/hqdefault.jpg'></img></div>
<div><img src='https://i.ytimg.com/vi/M6rQ0x0M0IE/hqdefault.jpg'></img></div>
<div><img src='https://i.ytimg.com/vi/M6rQ0x0M0IE/hqdefault.jpg'></img></div>
<div><img src='https://i.ytimg.com/vi/M6rQ0x0M0IE/hqdefault.jpg'></img></div>
</div>},
    { Name: 'Сочи',
    info:'СочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочи',
    foto:<div className={cx('City_Perelet_Info_Foto')}>
    <div><img src='https://i.ytimg.com/vi/M6rQ0x0M0IE/hqdefault.jpg'></img></div>
<div><img src='https://i.ytimg.com/vi/M6rQ0x0M0IE/hqdefault.jpg'></img></div>
<div><img src='https://i.ytimg.com/vi/M6rQ0x0M0IE/hqdefault.jpg'></img></div>
<div><img src='https://i.ytimg.com/vi/M6rQ0x0M0IE/hqdefault.jpg'></img></div>
</div>}
]


export const City = () => {

const [citySelect,setCitySelect] = useState();


const handleChange = (e) => {
    setCitySelect(e.target.value)
}
console.log(citySelect)
console.log(cityInfo.foto)
    return(
        <div>
            <div className={cx('City_Perelet_Select')}>
                <h1>Выберите город в который Вы хотите отправиться</h1>
                <select onChange={handleChange}>
                    <option value='' selected></option>
                    <option value='Москва'>Москва</option>
                    <option value='Ростов-на-Дону'>Ростов-на-Дону</option>
                    <option value='Сочи'>Сочи</option>
                    <option value='Санкт-Петербург'>Санкт-Петербург</option>
                </select>
            </div>
            <hr></hr>
            <div className={cx('City_Perelet_Info')}>
                {cityInfo.map((item, key) => (
                    item.Name == citySelect ? item.info:''
                ))}
            </div>
            <hr></hr>
            <div className={cx('City_Perelet_Foto')}>
                    {cityInfo.map((item) => (
                        item.Name == citySelect ? item.foto:''
                    ))}
                        
            </div>
        </div>
    )
}