import React, { useEffect } from "react";
import {
    logo,
    facebook,
    instagram,
    telegram,
    whatsApp,
    user,
} from "../../../img/header/index";
import basket from "../../../img/header/icons/shopping-basket.svg";
import Navbar from "./navbar";
import SearchBar from "./SearchBar";
import CommunicationButton from "../templates/buttonTemplates/CommunicationButton";
import { useDispatch, useSelector } from "react-redux";

import { exitUser } from "../../../store/asyncActions";
import { getAll } from "../../../http/basketAPI";
import { Link } from "react-router-dom";
import { paths } from "../../../utils/routes";
import RubleSign from "../templates/RubleSign";
import {
    setItemBasket,
    setLoadingBasket,
    setSumBasket,
} from "../../../store/reducers/basketReducer";
import {
    setLoginModalStatus,
    setRegModalStatus,
} from "../../../store/reducers/modalsReducer";

const Header = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(store => store.isAuth.auth);
    const sum = useSelector(store => store.basket.totalPrice);
    const basketItems = useSelector(store => store.basket.basketItems);

    const showRegModal = () => {
        dispatch(setRegModalStatus(true));
    };
    const showLoginModal = () => {
        dispatch(setLoginModalStatus(true));
    };
    const logOut = () => {
        dispatch(exitUser());
        location.reload();
    };
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
            const sumItems = basketItems.reduce(
                (previousValue, basketItem) =>
                    previousValue +
                    basketItem.item.price * basketItem.basketCount,
                0
            );
            dispatch(setSumBasket(sumItems));
        } else {
            dispatch(setSumBasket(0));
        }
    }, [basketItems]);
    return (
        <header className="header">
            <div className="header__upper-menu upper-menu">
                <div className="upper-menu__container container">
                    <div className="upper-menu__body">
                        {isAuth ? (
                            <div
                                onClick={logOut}
                                className="authorization__exit"
                            >
                                Выйти
                            </div>
                        ) : (
                            <div className="upper-menu__authorization authorization">
                                <img src={user} alt="userIcon" />
                                <div
                                    className="authorization__login"
                                    onClick={showLoginModal}
                                >
                                    Вход
                                </div>
                                <span
                                    style={{
                                        color: "#956D84",
                                        marginRight: "5px",
                                        marginLeft: "5px",
                                    }}
                                >
                                    |
                                </span>
                                <div
                                    className="authorization__registration"
                                    onClick={showRegModal}
                                >
                                    Регистрация
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="header__lower-menu lower-menu">
                <div className="lower-menu__container container">
                    <div className="lower-menu__body">
                        <Link to={paths.HOME} className="lower-menu__logo">
                            <img src={logo} alt="logo" />
                        </Link>
                        <div className="lower-menu__navigation">
                            <SearchBar />
                            <Navbar />
                        </div>
                        <div className="header__contacts-purchases contacts-purchases">
                            <div className="contacts-purchases__socialmedia socialmedia">
                                <CommunicationButton
                                    className="socialmedia__item"
                                    iconURL={whatsApp}
                                />
                                <CommunicationButton
                                    className="socialmedia__item"
                                    iconURL={instagram}
                                />
                                <CommunicationButton
                                    className="socialmedia__item"
                                    iconURL={telegram}
                                />
                                <CommunicationButton
                                    className="socialmedia__item"
                                    iconURL={facebook}
                                />
                            </div>
                            <a
                                href="tel:380678293030"
                                className="contacts-purchases__phone"
                            >
                                +38 (067) 829 30 30
                            </a>
                            <div className="contacts-purchases__basket">
                                <Link
                                    className="contacts-purchases__basket-link"
                                    to={paths.BASKET}
                                >
                                    <img
                                        src={basket}
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                        }}
                                        alt="basket"
                                    />
                                    <div className="contacts-purchases__sum">
                                        {sum} <RubleSign />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
