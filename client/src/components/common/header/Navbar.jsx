import React, {useEffect, useRef, useState} from 'react';
import {arrowDropdown} from '../../../img/common/index';
import Dropdown from './Dropdown';


const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsVisible(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [wrapperRef]);

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
                <li 
                    ref={wrapperRef}
                    className={isVisible ? 'nav-bar__item nav-bar__item_info active' : 'nav-bar__item nav-bar__item_info'}
                    onClick={() => setIsVisible(!isVisible)}
                >
                    <a className='nav-bar__link'>Информация</a>
                    <img className={isVisible ? 'arrow-dropdown active' : 'arrow-dropdown'} src={arrowDropdown} alt="arrowUp"/>
                    <Dropdown className = {isVisible ? 'dropdown active' : 'dropdown'}/>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;