import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { paths } from "../../../utils/routes";
import InteractionButton from "../templates/buttonTemplates/InteractionButton";
import RubleSign from "../templates/RubleSign";

const BasketTotalSum = () => {
    const basketItems = useSelector(store => store.basket.basketItems);
    const sum = useSelector(store => store.basket.totalPrice);

    const showErrorMessage = () => {
        alert('корзина пуста');
    }
    return (
        <div className="basket__price-block price-block">
            <div className="price-block__title">Ваш заказ</div>
            <div className="price-block__general">
                <div className="price-block__general-text">Всего</div>
                <div className="price-block__general-sum">
                    {sum}
                    <RubleSign />
                </div>
            </div>
            {basketItems.length ? (
                <Link
                    to={paths.ORDER}
                    style={{ display: "inline-block", width: "100%" }}
                >
                    <InteractionButton value={"Оформить заказ"} />
                </Link>
            ) : (
                <InteractionButton
                    onClick={showErrorMessage}
                    value={"Оформить заказ"}
                />
            )}
        </div>
    );
};

export default BasketTotalSum;
