import React from 'react';
import {Link} from "react-router-dom";
import {paths} from "../../../utils/routes";


const Navbar = () => {
    return (
        <nav className='lower-menu__nav-bar nav-bar'>
            <ul className="nav-bar__list">
                <li className='nav-bar__item'>
                    <Link
                        className='nav-bar__link'
                        to={paths.CATALOG}
                    >
                        Каталог товаров
                    </Link>
                </li>
                <li className='nav-bar__item'>
                    <Link
                        className='nav-bar__link'
                        to={paths.ABOUT}
                    >
                        О нас
                    </Link>
                </li>
                <li className='nav-bar__item'>
                    <Link
                        className='nav-bar__link'
                        to={paths.PAYMENT_DELIVERY}
                    >
                        Доставка и оплата
                    </Link>
                </li>
                <li className='nav-bar__item'>
                    <Link
                        className='nav-bar__link'
                        to={paths.СONTACTS}
                    >
                        Контакты
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;