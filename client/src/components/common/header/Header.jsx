import React, { useEffect, useState } from 'react';
import {logo, facebook, instagram, telegram, whatsApp, lorry, phone, user} from '../../../img/header/index';
import backet from '../../../img/header/icons/shopping-basket.svg';
import Navbar from './navbar';
import SearchBar from './SearchBar';
import CommunicationButton from '../buttonTemplates/CommunicationButton';
import {useDispatch, useSelector} from "react-redux";
import {increaseSum, setItemBasket, setLoadingBasket, setLoginModalStatus, setRegModalStatus, setSum} from "../../../store/actions";
import { exitUser } from '../../../store/asyncActions';
import { getAll } from '../../../http/basketAPI';


const Header = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(store => store.isAuth);
    const sum = useSelector(store => store.sum);
    const  basketItems = useSelector(store => store.basket);
    const [sumLoading, setSumLoading] = useState(true);
    const showRegModal = () => {
        dispatch(setRegModalStatus(true));
    };
    const showLoginModal = () => {
        dispatch(setLoginModalStatus(true));
    };
    const logOut = () => {
        dispatch(exitUser());
        location.reload();
    }
    const getAllBasketItems = async () => {
        try {
            const countedItems = await getAll();
            const items = countedItems.items;
            dispatch(setItemBasket(items));
        } catch (err) {
            console.error(err);
        } finally {
            dispatch(setLoadingBasket(false));
        }
    };
    useEffect(() => {
        getAllBasketItems();
    }, [isAuth]);

    useEffect(() => {
        if (basketItems.length) {
            console.log(basketItems);
            const sumItems = basketItems.reduce((previousValue, basketItem) => previousValue + basketItem.item.price * basketItem.basketCount, 0);
            dispatch(setSum(sumItems));
        }
        else {
            dispatch(setSum(0));
        }
    }, [basketItems]);
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
                            <div onClick={logOut}
                                className="authorization__exit">
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
                            <div className="contacts-purchases__basket">
                                <img src={backet} style={{width:'32px', height:'32px'}} alt="backet" />
                                <div className='contacts-purchases__sum'>{sum}<span style={{marginLeft:"10px"}}>&#8381;</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;