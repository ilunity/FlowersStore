import React from 'react';
import '../../../scss/components/item-card.scss';
import InteractionButton from "../buttonTemplates/InteractionButton";
import {addToBasket} from "../../../http/basketAPI";
import {STATIC_URL} from "../../../http/consts";
import { useDispatch } from 'react-redux';
import { addItemBasket } from '../../../store/actions';

function ItemCard({item, item: {id, name, price, count, img: imgName}}) {
    const dispatch = useDispatch();

    const img = `${STATIC_URL}/${imgName}`;
    
    const addToBasketHandler = async (item) => {
        dispatch(addItemBasket(item));
        await addToBasket(item, item.count);
        //todo Добавить проверку на успешкое добавление
    };
    return (
        <div className={'item-card'}>
            <div className="item-card__image-wrapper">
                <img
                    src={img}
                    className={'item-card__image'}
                    alt={'Изображение товара'}
                />
            </div>
            <div className="item-card__description">
                <div className="item-card__name">
                    {name}
                </div>
                <div className="item-card__price">
                    {`${price} rub`}
                </div>
            </div>
            <InteractionButton
                onClick={() => addToBasketHandler(item)}
                value={'Заказать'}
            />
        </div>
    )
}

export {ItemCard};