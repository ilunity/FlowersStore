import React from 'react';
import '../../../scss/components/item-wrapper.scss';
import InteractionButton from "../buttonTemplates/InteractionButton";
import {addToBasket} from "../../../http/basketAPI";
import {STATIC_URL} from "../../../http/consts";
import { useDispatch } from 'react-redux';
import { addItemBasket } from '../../../store/actions';

function ItemCard({item}) {
    const {id, name, price, count, img: imgName} = item;
    const dispatch = useDispatch();

    const img = `${STATIC_URL}/${imgName}`;
    
    const addToBasketHandler = async () => {
        dispatch(addItemBasket(item));
        await addToBasket(id);
    };

    return (
        <div className='item-card'>
            <div className="item-card__image-wrapper">
                <img
                    src={img}
                    className='item-card__image'
                    alt='Изображение товара'
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
                onClick={addToBasketHandler}
                value={'В корзину'}
            />
        </div>
    )
}

export {ItemCard};