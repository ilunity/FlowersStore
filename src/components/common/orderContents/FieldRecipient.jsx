import React from "react";
import { InputFrame } from "../templates/InputFrame";

const FieldRecipient = () => {
    return (
        <div className="contacts-order__recipient order-recipient">
            <div className="order-recipient__title title-info">
                1. Контакты получателя
            </div>
            <div className="order-recipient__body">
                <div className="order-recipient__column">
                    <InputFrame
                        className={"order-recipient__input"}
                        placeholder={"Имя получателя *"}
                    />
                    <InputFrame
                        className={"order-recipient__input"}
                        placeholder={"Телефон получателя *"}
                    />
                    <InputFrame
                        className={"order-recipient__input"}
                        type={"date"}
                        placeholder={"Дата доставки"}
                    />
                </div>
                <div className="order-recipient__column">
                    <InputFrame
                        className={"order-recipient__input"}
                        placeholder={"Регион *"}
                    />
                    <InputFrame
                        className={"order-recipient__input"}
                        placeholder={"Адрес *"}
                    />
                    <InputFrame
                        className={"order-recipient__input"}
                        placeholder={"Время доставки"}
                    />
                </div>
            </div>
        </div>
    );
};

export default FieldRecipient;
