import React from "react";
import { useSelector } from "react-redux";
import BasketItem from "./BasketItem";
import Loader from "../templates/Loader";
const BasketItems = () => {
    const isLoadingBasketItems = useSelector(
        store => store.basket.isLoadingBasketItems
    );
    const basketItems = useSelector(store => store.basket.basketItems);
    return (
        <div className="basket__list-block list-block">
            <div className="list-block__column-names column-names">
                <div className="column-names__item column-names__item-name">
                    Название
                </div>
                <div className="column-names__item column-names__item-price">
                    Цена за шт.
                </div>
                <div className="column-names__item column-names__item-num">
                    Кол-во
                </div>
                <div className="column-names__item column-names__item-general">
                    Итог
                </div>
            </div>
            {isLoadingBasketItems && <Loader />}
            {basketItems.length ? (
                <div className="list-block__items">
                    {basketItems.map(basketItem => {
                        return (
                            <BasketItem
                                key={basketItem.item.id}
                                item={basketItem.item}
                                basketCount={basketItem.basketCount}
                            />
                        );
                    })}
                </div>
            ) : isLoadingBasketItems ? null : (
                <div className="list-block__no-items">Корзина пуста</div>
            )}
        </div>
    );
};

export default BasketItems;
