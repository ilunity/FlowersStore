import React from 'react';
import logo from '../../../img/header/logo.svg';
import facebook from '../../../img/header/icons/facebook.svg';
import instagram from '../../../img/header/icons/instagram.svg';
import telegram from '../../../img/header/icons/telegram.svg';
import whatsApp from '../../../img/header/icons/whatsApp.svg';
import Navbar from './navbar';
import SearchBar from './SearchBar';
import CommunicationButton from '../buttonTemplates/CommunicationButton';
import lorry from '../../../img/header/icons/lorry.svg';
import phone from '../../../img/header/icons/phone.svg';
import user from '../../../img/header/icons/user.svg';
import BasketButton from './BasketButton';

const Header = () => {
  return (
    <header className='header'>
        <div className="header__upper-menu upper-menu">
          <div className="upper-menu__container container">
            <div className="upper-menu__body">
              <div className="upper-menu__shipping-payment shipping-payment">
                <img className='shipping-payment__icon' src={lorry} alt="lorry" />
                <div className="shipping-payment__text">Доставка и оплата</div>
              </div>
              <div className="upper-menu__contacts contacts">
                <img src={phone} alt="phone" className="contacts__icon" />
                <div className='contacts__text'>Контакты</div>
              </div>
              <div className="upper-menu__authorization authorization">
                <img src={user} alt="userIcon"/>
                <div className="authorization__login">Вход</div><span style={{color: '#956D84', marginRight: '5px', marginLeft: '5px'}}>|</span>
                <div className="authorization__registration">Регестрация</div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__lower-menu lower-menu">
          <div className="lower-menu__container container">
            <div className="lower-menu__body">
              <a href="" className='lower-menu__logo'><img src={logo} alt="logo" /></a>
              <div className="lower-menu__navigation">
                <SearchBar/>
                <Navbar/>
              </div>
              
              <div className="header__contacts-purchases contacts-purchases">
                <div className="contacts-purchases__socialmedia socialmedia">
                  <CommunicationButton parentClass='socialmedia__item' iconURL={whatsApp}/>
                  <CommunicationButton parentClass='socialmedia__item' iconURL={instagram}/>
                  <CommunicationButton parentClass='socialmedia__item' iconURL={telegram}/>
                  <CommunicationButton parentClass='socialmedia__item' iconURL={facebook}/>
                </div>
                <a href="tel:380678293030" className="contacts-purchases__phone">+38 (067) 829 30 30</a>
                <BasketButton/>
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header;