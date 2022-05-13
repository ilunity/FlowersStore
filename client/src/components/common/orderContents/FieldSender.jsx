import React from "react";
import { InputFrame } from "../templates/InputFrame";

const FieldSender = () => {
    return (
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
    );
};

export default FieldSender;
