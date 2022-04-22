import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromBasket } from '../../http/basketAPI';
import { STATIC_URL } from '../../http/consts';
import deleteIcon from '../../img/basket/delete.svg';
import { deleteItemBasket } from '../../store/actions';

import Counter from '../common/Counter';
const ItemBasket = ({img:imgName, name, count, price, item}) => {
  const img = `${STATIC_URL}/${imgName}`;

  const dispatch = useDispatch();

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
        <Counter maxCount={count}/>
        <div className="item-basket__total">{price*count}</div>
        <div onClick={() => removeItemBasket(item)} className="item-basket__delete-icon">
          <img src={deleteIcon}  alt="delete" />
        </div>
    </div>
  );
};

export default ItemBasket;