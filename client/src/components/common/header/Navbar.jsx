import React, {useState} from 'react';
import {arrowDown, arrowUp, arrowRight} from '../../../img/common/index';
import Dropdown from './Dropdown';


const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <nav className='lower-menu__nav-bar nav-bar'>
            <ul className="nav-bar__list">
                <li className='nav-bar__item'>
                    <a className='nav-bar__link'>Каталог товаров</a>
                </li>
                <li className='nav-bar__item'>
                    <a className='nav-bar__link'>Форум</a>
                </li>
                <li className='nav-bar__item'>
                    <a className='nav-bar__link'>Отзывы</a>
                </li>
                <li className='nav-bar__item'>
                    <a className='nav-bar__link'>Акции</a>
                </li>
                <li className='nav-bar__item'>
                    <a className='nav-bar__link'>Новости</a>
                </li>
                <li className={isVisible ? 'nav-bar__item nav-bar__item_info active' : 'nav-bar__item nav-bar__item_info'}
                    onClick={() => setIsVisible(!isVisible)}>
                    <a className='nav-bar__link'>Информация</a>
                    {isVisible ? <img src={arrowUp} alt="arrowUp"/> : <img src={arrowDown} alt="arrowDown"/>}
                    {isVisible && <Dropdown/>}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;