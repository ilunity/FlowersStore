import React from 'react';
import {box_green, liqpay, logo, Maestro, visa1, visa2, map, masterCard} from '../../../img/footer/index';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__containder-map container">
        <div className='footer__map'>
          <img src={map} alt="map" />
        </div>
      </div>
      <div className="footer__info info-footer">
        <div className="info-footer__containder container">
          <div className="info-footer__body">
            <div className="info-footer__menu-footer menu-footer">
              <a className="menu-footer__logo">
                <img src={logo} alt="logo-white" />
              </a>
              <div className="menu-footer__list">
                <div className="menu-footer__column">
                  <div className="menu-footer__label">ИНФОРМАЦИЯ</div>
                  <nav className="menu-footer__nav nav">
                    <ul className="nav__list">
                      <li className="nav__item">О НАС</li>
                      <li className="nav__item">ДОСТАВКА И ОПЛАТА</li>
                      <li className="nav__item">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</li>
                    </ul>
                  </nav>
                </div>
                <div className="menu-footer__column">
                  <div className="menu-footer__label">СЛУЖБА ПОДДЕРЖКИ</div>
                  <nav className="menu-footer__nav nav">
                    <ul className="nav__list">
                      <li className="nav__item">КАРТА САЙТА</li>
                      <li className="nav__item">ВОЗВРАТ ТОВАРА</li>
                      <li className="nav__item">СВЯЗАТЬСЯ С НАМИ</li>
                      <li className="nav__item">ДЛЯ СОТРУДНИЧЕСТВА</li>
                    </ul>
                  </nav>
                </div>
                <div className="menu-footer__column">
                  <div className="menu-footer__label">ЛИЧНЫЙ КАБИНЕТ</div>
                  <nav className="menu-footer__nav nav">
                    <ul className="nav__list">
                      <li className="nav__item">ЛИЧНЫЙ КАБИНЕТ</li>
                      <li className="nav__item">ИСТОРИЯ ЗАКАЗА</li>
                      <li className="nav__item">ЗАКЛАДКИ</li>
                      <li className="nav__item">СПИСОК НОВОСТЕЙ</li>
                    </ul>
                  </nav>
                </div>
                <div className="menu-footer__column">
                  <div className="menu-footer__label">ДОПОЛНИТЕЛЬНО</div>
                  <nav className="menu-footer__nav nav">
                    <ul className="nav__list">
                      <li className="nav__item">ПОДАРОЧНЫЕ</li>
                      <li className="nav__item">СЕРТИФИКАТЫ</li>
                      <li className="nav__item">АКЦИИ</li>
                      <li className="nav__item">ЦВЕТЫ В ОФИС</li>
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
                    <img src={box_green} alt="" />
                  </div>
                  <div className="payment__item">
                    <img src={liqpay} alt="" />
                  </div>
                  <div className="payment__item">
                    <img src={Maestro} alt="" />
                  </div>
                  <div className="payment__item">
                    <img src={masterCard} alt="" />
                  </div>
                  <div className="payment__item">
                    <img src={visa1} alt="" />
                  </div>
                  <div className="payment__item">
                    <img src={visa2} alt="" />
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