import React from 'react';
import { STATIC_URL } from '../../http/consts';
import deleteIcon from '../../img/basket/delete.svg';
const ItemBasket = ({img:imgName, name, count, price}) => {
  const img = `${STATIC_URL}/${imgName}`;
  return (
    <div className="list-block__item item-basket">
        <div className="item-basket__img">
          <img src={img} alt="картинка товара"/>
        </div>
        <div className="item-basket__name">{name}</div>
        <div className="item-basket__price">{price}</div>
        <div className="item-basket__counter">{count}</div>
        <div className="item-basket__total">{price*count}</div>
        <div className="item-basket__delete-icon">
          <img src={deleteIcon} alt="delete" />
        </div>
    </div>
  );
};

export default ItemBasket;