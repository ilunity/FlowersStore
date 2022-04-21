import React from 'react';
import '../../../scss/components/item-wrapper.scss';
import InteractionButton from "../buttonTemplates/InteractionButton";
import {addToBasket} from "../../../http/basketAPI";
import {STATIC_URL} from "../../../http/consts";
import { useDispatch } from 'react-redux';
import { addItemBasket } from '../../../store/actions';

function ItemCard({item, className}) {
    const {id, name, price, count, img: imgName} = item;
    const dispatch = useDispatch();

    const img = `${STATIC_URL}/${imgName}`;
    
    const addToBasketHandler = async () => {
        dispatch(addItemBasket(item));
        await addToBasket(id, 1);
    };
    return (
        <div className={`${className} item-card`}>
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
                    {price}<span style={{marginLeft: "5px"}}>&#8381;</span>
                </div>
            </div>
            <InteractionButton
                onClick={addToBasketHandler}
                value={'Заказать'}
            />
        </div>
    )
}

export {ItemCard};