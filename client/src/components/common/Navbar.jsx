import React from 'react';
import arrowDown from '../../img/header/icons/arrowDown.svg'
const Navbar = () => {
  return (
    <nav className='lower-menu__nav-bar nav-bar'>
      <ul className="nav-bar__list">
        <li className='nav-bar__item nav-bar__item_catalog'>
          <a className='nav-bar__link'>Каталог товаров</a>
          <img src={arrowDown} alt="arrowDown" />
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
        <li className='nav-bar__item nav-bar__item_info'>
          <a className='nav-bar__link'>Информация</a>
          <img src={arrowDown} alt="arrowDown" />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;