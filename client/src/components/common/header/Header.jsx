import React from 'react';
import {logo, facebook, instagram, telegram, whatsApp, lorry, phone, user} from '../../../img/header/index';
import Navbar from './navbar';
import SearchBar from './SearchBar';
import CommunicationButton from '../buttonTemplates/CommunicationButton';
import BasketButton from './BasketButton';
import {useDispatch, useSelector} from "react-redux";
import {setLoginModalStatus, setRegModalStatus} from "../../../store/actions";
import { exitUser } from '../../../store/asyncActions';


const Header = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(store => store.isAuth)
    const showRegModal = () => {
        dispatch(setRegModalStatus(true));
    };
    const showLoginModal = () => {
        dispatch(setLoginModalStatus(true));
    };

    return (
        <header className='header'>
            <div className="header__upper-menu upper-menu">
                <div className="upper-menu__container container">
                    <div className="upper-menu__body">
                        <div className="upper-menu__shipping-payment shipping-payment">
                            <img className='shipping-payment__icon' src={lorry} alt="lorry"/>
                            <div className="shipping-payment__text">Доставка и оплата</div>
                        </div>
                        <div className="upper-menu__contacts contacts">
                            <img src={phone} alt="phone" className="contacts__icon"/>
                            <div className='contacts__text'>Контакты</div>
                        </div>
                        {isAuth ?
                            <div onClick={() => dispatch(exitUser())} className="authorization__exit">
                                Выйти
                            </div>
                            :
                            <div className="upper-menu__authorization authorization">
                                <img src={user} alt="userIcon"/>
                                <div
                                    className="authorization__login"
                                    onClick={showLoginModal}
                                >
                                    Вход
                                </div>
                                <span style={{color: '#956D84', marginRight: '5px', marginLeft: '5px'}}>|</span>
                                <div
                                    className="authorization__registration"
                                    onClick={showRegModal}
                                >
                                    Регистрация
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="header__lower-menu lower-menu">
                <div className="lower-menu__container container">
                    <div className="lower-menu__body">
                        <a href="" className='lower-menu__logo'><img src={logo} alt="logo"/></a>
                        <div className="lower-menu__navigation">
                            <SearchBar/>
                            <Navbar/>
                        </div>
                        <div className="header__contacts-purchases contacts-purchases">
                            <div className="contacts-purchases__socialmedia socialmedia">
                                <CommunicationButton className='socialmedia__item' iconURL={whatsApp}/>
                                <CommunicationButton className='socialmedia__item' iconURL={instagram}/>
                                <CommunicationButton className='socialmedia__item' iconURL={telegram}/>
                                <CommunicationButton className='socialmedia__item' iconURL={facebook}/>
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