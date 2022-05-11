import React, { useState } from "react";
import { useSelector } from "react-redux";
import FinalPriceCard from "../components/common/orderContents/FinalPriceCard";
import SelectableOptions from "../components/common/orderContents/SelectableOptions";
import { InputFrame } from "../components/common/templates/InputFrame";

const Order = () => {
    // const [dropdownTime, setDropdownTime] = useState(false);
    const sum = useSelector(store => store.basket.totalPrice);

    return (
        <main className="main">
            <div className="main__order order">
                <div className="order__container container">
                    <div className="order__title title">Оформление заказа</div>
                    <div className="order__body">
                        <div className="order__contacts contacts-order">
                            <div className="contacts-order__row">
                                <div className="contacts-order__recipient order-recipient">
                                    <div className="order-recipient__title title-info">
                                        1. Контакты получателя
                                    </div>
                                    <div className="order-recipient__body">
                                        <div className="order-recipient__column">
                                            <InputFrame
                                                className={
                                                    "order-recipient__input"
                                                }
                                                placeholder={"Имя получателя *"}
                                            />
                                            <InputFrame
                                                className={
                                                    "order-recipient__input"
                                                }
                                                placeholder={
                                                    "Телефон получателя *"
                                                }
                                            />
                                            <InputFrame
                                                className={
                                                    "order-recipient__input"
                                                }
                                                type={"date"}
                                                placeholder={"Дата доставки"}
                                            />
                                        </div>
                                        <div className="order-recipient__column">
                                            <InputFrame
                                                className={
                                                    "order-recipient__input"
                                                }
                                                placeholder={"Регион *"}
                                            />
                                            <InputFrame
                                                className={
                                                    "order-recipient__input"
                                                }
                                                placeholder={"Адрес *"}
                                            />
                                            <InputFrame
                                                className={
                                                    "order-recipient__input"
                                                }
                                                placeholder={"Время доставки"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contacts-order__row contacts-order__row-lower">
                                <div className="contacts-order__column">
                                    <div className="contacts-order__sender order-sender">
                                        <div className="order-sender__title title-info">
                                            2. Контакты отправителя
                                        </div>
                                        <InputFrame
                                            className={"order-sender__input"}
                                            placeholder={"Имя *"}
                                        />
                                        <InputFrame
                                            className={"order-sender__input"}
                                            placeholder={"Телефон *"}
                                        />
                                        <InputFrame
                                            className={"order-sender__input"}
                                            placeholder={"Email *"}
                                        />
                                    </div>
                                </div>
                                <div className="contacts-order__column">
                                    <SelectableOptions />
                                </div>
                            </div>
                        </div>
                        <FinalPriceCard sum={sum} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Order;
