import React, { useState } from "react";
import "../../../scss/components/item-wrapper.scss";
import InteractionButton from "../templates/buttonTemplates/InteractionButton";
import { addToBasket } from "../../../http/basketAPI";
import { STATIC_URL } from "../../../http/consts";
import { useDispatch, useSelector } from "react-redux";

import RubleSign from "../templates/RubleSign";
import { Link } from "react-router-dom";
import { paths } from "../../../utils/routes";
import { HorizontalLoader } from "../templates/horizontalLoader";
import { addItemBasket } from "../../../store/reducers/basketReducer";

function ItemCard({ item }) {
    const { id, name, price, count, img: imgName } = item;

    const dispatch = useDispatch();
    const basketItems = useSelector(store => store.basket.basketItems);
    const isAuth = useSelector(store => store.isAuth.auth);

    const [isAddingToBasket, setIsAddingToBasket] = useState(false);
    const img = `${STATIC_URL}/${imgName}`;

    const addToBasketHandler = async () => {
        const isAlreadyExists = Boolean(
            basketItems.find(basketItem => {
                return basketItem.item.id === id;
            })
        );
        if (!isAlreadyExists && isAuth) {
            setIsAddingToBasket(true);
            dispatch(addItemBasket(item));
            await addToBasket(id);
            setIsAddingToBasket(false);
        }
    };

    return (
        <div className="item-card">
            <Link
                className="item-card__image-wrapper"
                to={`${paths.ITEM}/${id}`}
            >
                <img
                    src={img}
                    className="item-card__image"
                    alt="Изображение товара"
                />
            </Link>
            <div className="item-card__description">
                <div className="item-card__name">{name}</div>
                <div className="item-card__price">
                    {price} <RubleSign />
                </div>
            </div>
            {isAddingToBasket ? (
                <HorizontalLoader />
            ) : (
                <InteractionButton
                    onClick={addToBasketHandler}
                    value={"В корзину"}
                />
            )}
        </div>
    );
}

export { ItemCard };
