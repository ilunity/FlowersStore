import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {deleteFromBasket, setItemCount} from '../../http/basketAPI';
import {STATIC_URL} from '../../http/consts';
import deleteIcon from '../../img/basket/delete.svg';
import {deleteItemBasket} from '../../store/actions';
import '../../scss/components/counter.scss';

import Counter from '../common/Counter';

const ItemBasket = ({item, basketCount}) => {
    const dispatch = useDispatch();

    const {id, name, price, count: maxCount, img: imgName} = item;
    const img = `${STATIC_URL}/${imgName}`;


    const [currentCount, setCurrentCount] = useState(basketCount);
    const setCount = async (value) => {
        await setItemCount(id, value);
        setCurrentCount(value);
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

export default ItemBasket;