import React, { useState } from 'react';
import arrowDown from '../../../img/header/icons/arrowDown.svg'
import arrowUp from '../../../img/header/icons/arrowUp.svg'
import Dropdown from './Dropdown';
const Navbar = () => {
  const [isVidible, setIsVidible] = useState(false);
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
        <li className={isVidible ? 'nav-bar__item nav-bar__item_info active' : 'nav-bar__item nav-bar__item_info'} onClick={() => setIsVidible(!isVidible)}>
          <a className='nav-bar__link'>Информация</a>
          {isVidible ? <img src={arrowUp} alt="arrowUp"/> : <img src={arrowDown} alt="arrowDown" />}
          {isVidible && <Dropdown />}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;