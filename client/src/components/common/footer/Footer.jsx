import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {box_green, liqpay, logo, Maestro, visa1, visa2, map, masterCard} from '../../../img/footer/index';
import {paths} from '../../../utils/routes';
import ModalWarningWindow from '../../modals/ModalWarningWindow';

const Footer = () => {
    const [warningWindow, setWarningWindow] = useState(false);
    const showWarningWindow = () => {
        setWarningWindow(true);
        setTimeout(() => {
            setWarningWindow(false);
        }, 2000);
    }
    const handlerScrollUp = () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            window.scrollBy(0, -50);
            setTimeout(handlerScrollUp, 5);
        }
    }
    return (
        <footer className='footer'>
            {warningWindow && <ModalWarningWindow tilte={'Страница в разработке'}/>}
            <div className="footer__containder-map container">
                <div className='footer__map'>
                    <img src={map} alt="map"/>
                </div>
            </div>
            <div className="footer__info info-footer">
                <div className="info-footer__containder container">
                    <div className="info-footer__body">
                        <div className="info-footer__menu-footer menu-footer">
                            <a className="menu-footer__logo">
                                <img src={logo} alt="logo-white"/>
                            </a>
                            <div className="menu-footer__list">
                                <div className="menu-footer__column">
                                    <div className="menu-footer__label">ИНФОРМАЦИЯ</div>
                                    <nav className="menu-footer__nav nav">
                                        <ul className="nav__list">
                                            <li className="nav__item">
                                                <Link to={paths.ABOUT} onClick={handlerScrollUp}
                                                      style={{color: 'inherit'}}>
                                                    О НАС
                                                </Link>
                                            </li>
                                            <li className="nav__item">
                                                <Link to={paths.PAYMENT_DELIVERY} onClick={handlerScrollUp}
                                                      style={{color: 'inherit'}}>
                                                    ДОСТАВКА И ОПЛАТА
                                                </Link>
                                            </li>
                                            <li className="nav__item" onClick={showWarningWindow}>ПОЛИТИКА
                                                КОНФИДЕНЦИАЛЬНОСТИ
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="menu-footer__column">
                                    <div className="menu-footer__label">СЛУЖБА ПОДДЕРЖКИ</div>
                                    <nav className="menu-footer__nav nav">
                                        <ul className="nav__list">
                                            <li className="nav__item" onClick={showWarningWindow}>КАРТА САЙТА</li>
                                            <li className="nav__item" onClick={showWarningWindow}>ВОЗВРАТ ТОВАРА</li>
                                            <li className="nav__item" onClick={showWarningWindow}>СВЯЗАТЬСЯ С НАМИ</li>
                                            <li className="nav__item" onClick={showWarningWindow}>ДЛЯ СОТРУДНИЧЕСТВА
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="menu-footer__column">
                                    <div className="menu-footer__label">ЛИЧНЫЙ КАБИНЕТ</div>
                                    <nav className="menu-footer__nav nav">
                                        <ul className="nav__list">
                                            <li className="nav__item" onClick={showWarningWindow}>ЛИЧНЫЙ КАБИНЕТ</li>
                                            <li className="nav__item" onClick={showWarningWindow}>ИСТОРИЯ ЗАКАЗА</li>
                                            <li className="nav__item" onClick={showWarningWindow}>ЗАКЛАДКИ</li>
                                            <li className="nav__item" onClick={showWarningWindow}>СПИСОК НОВОСТЕЙ</li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="menu-footer__column">
                                    <div className="menu-footer__label" onClick={showWarningWindow}>ДОПОЛНИТЕЛЬНО</div>
                                    <nav className="menu-footer__nav nav">
                                        <ul className="nav__list">
                                            <li className="nav__item" onClick={showWarningWindow}>ПОДАРОЧНЫЕ</li>
                                            <li className="nav__item" onClick={showWarningWindow}>СЕРТИФИКАТЫ</li>
                                            <li className="nav__item" onClick={showWarningWindow}>АКЦИИ</li>
                                            <li className="nav__item" onClick={showWarningWindow}>ЦВЕТЫ В ОФИС</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="info__copy copy">
                            <div className="copy__text">Copyright © 2021. Все права защищены</div>
                            <div className="copy__payment payment">
                                <div className="payment__title">Способы оплаты:</div>
                                <div className="payment__icons">
                                    <div className="payment__item">
                                        <img src={box_green} alt="способ оплаты"/>
                                    </div>
                                    <div className="payment__item">
                                        <img src={liqpay} alt="способ оплаты"/>
                                    </div>
                                    <div className="payment__item">
                                        <img src={Maestro} alt="способ оплаты"/>
                                    </div>
                                    <div className="payment__item">
                                        <img src={masterCard} alt="способ оплаты"/>
                                    </div>
                                    <div className="payment__item">
                                        <img src={visa1} alt="способ оплаты"/>
                                    </div>
                                    <div className="payment__item">
                                        <img src={visa2} alt="способ оплаты"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;