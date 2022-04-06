import React from 'react'
import logo from '../../img/logo.png'
import SearchIcon from '../../img/icons/ToFindIcon.svg'
const Header = () => {
  return (
    <header className='header'>
      <div className="header__container container">
        <div className="header__selects">
          <div className="header__selects__ShippingandPayment">Доставка и оплата</div>
          <div className="header__selects__contacts">Контакты</div>
          <div className="header__selects__authorization authorization">
            <div className="authorization__login">Вход</div>
            <div className="authorization__registration">Регестрация</div>
          </div>
        </div>
        <a href="" className='header__logo'><img src={logo} alt="logo" /></a>
        <div className="header__menu menu">
          <div className="menu__search search">
            <form action="#" className='search__categories-block'>
              <input type="text" className='search__categories'/>
            </form>
            <form action="#" className='search__goods-block'>
              <input type="text" className='search__goods'/>
              <button className='search__goods__btn'><img src={SearchIcon} alt="" /></button>
            </form>
          </div>
          <nav className='menu__list-block'>
            <ul className="menu__list">
              <li className='menu__item menu__item__catalog'>
                <a className='menu__link'>Каталог товаров</a>
              </li>
              <li className='menu__item'>
                <a className='menu__link'>Форум</a>
              </li>
              <li className='menu__item'>
                <a className='menu__link'>Отзывы</a>
              </li>
              <li className='menu__item'>
                <a className='menu__link'>Акции</a>
              </li>
              <li className='menu__item'>
                <a className='menu__link'>Новости</a>
              </li>
              <li className='menu__item menu__item__info'>
                <a className='menu__link'>Информация</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__contactsBasket-block">
          <div className="header__socialMedia"></div>
          <div className="header__phone"></div>
          <div className="header__basket"></div>
        </div>
      </div>
    </header>
  )
}

export default Header