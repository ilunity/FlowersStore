import React from "react";
import { InputFrame } from "../templates/InputFrame";
import Option from "./Option";
const bonuses = [
    {
        name: "Доставка сюрпризом",
        price: 0,
    },
    {
        name: "Фотоотчет",
        price: 30,
    },
    {
        name: "Добавить вазу",
        price: 500,
    },
    {
        name: "Напомнить о событии",
        price: 0,
    },
    {
        name: "Визитка",
        price: 0,
    },
    {
        name: "Открытка",
        price: 160,
    },
];
const SelectableOptions = () => {
    return (
        <div className="contacts-order__options order-options">
            <div className="order-options__title title-info">
                3. Детали доставки
            </div>
            <div className="order-options__list">
                {bonuses.map((item, i) => {
                    return (
                        <Option key={i} name={item.name} price={item.price} />
                    );
                })}
                <InputFrame
                    className={"order-options__input"}
                    placeholder={"Повод для открытки"}
                />
                <InputFrame
                    className={"order-options__input"}
                    placeholder={"Текст открытки"}
                />
            </div>
        </div>
    );
};

export default SelectableOptions;
