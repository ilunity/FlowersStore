import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteFromBasket, setItemCount} from '../../../http/basketAPI';
import deleteIcon from '../../../img/basket/delete.svg';
import '../../../scss/components/counter.scss';
import Counter from '../templates/Counter';

import {STATIC_URL} from '../../../http/consts';
import { deleteItemBasket, setBasketItemCount } from '../../../store/reducers/basketReducer';

const BasketItem = ({item, basketCount}) => {
    const dispatch = useDispatch();
    const {id, name, price, count: maxCount, img: imgName} = item;
    const img = `${STATIC_URL}/${imgName}`;
    const [currentCount, setCurrentCount] = useState(basketCount);

    const setCount = async (value) => {
        setCurrentCount(value);
        dispatch(setBasketItemCount({id, value}));
        await setItemCount(id, value);
    };

    const removeItemBasket = async (item) => {
        dispatch(deleteItemBasket(item.id));
        await deleteFromBasket(item.id);
    }

    return (
        <div className="list-block__item item-basket">
            <div className="item-basket__img">
                <img src={img} alt="картинка товара"/>
            </div>
            <div className="item-basket__name">{name}</div>
            <div className="item-basket__price">{price}</div>
            <Counter
                className={'item-basket__counter'}
                count={currentCount}
                setCount={setCount}
                maxCount={maxCount}
            />
            <div className="item-basket__total">{price * currentCount}</div>
            <div onClick={() => removeItemBasket(item)} className="item-basket__delete-icon">
                <img src={deleteIcon} alt="delete"/>
            </div>
        </div>
    );
};

export default BasketItem;