import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteFromBasket, setItemCount} from '../../../http/basketAPI';
import deleteIcon from '../../../img/basket/delete.svg';
import '../../../scss/components/counter.scss';
import Counter from '../templates/Counter';
import { deleteItemBasket, setSumBasket } from '../../../store/actions';
import { STATIC_URL } from '../../../http/consts';

const BasketItem = ({item, basketCount}) => {
    const dispatch = useDispatch();
    const basketItems = useSelector(store => store.basket.basketItems);
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

    useEffect(() => {
        if (basketItems.length) {
            const sumItems = basketItems.reduce((previousValue, basketItem) => previousValue + basketItem.item.price * basketItem.basketCount, 0);
            dispatch(setSumBasket(sumItems));
        }
        else {
            dispatch(setSumBasket(0));
        }
    }, [currentCount]);

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