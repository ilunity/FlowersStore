import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromBasket } from '../../http/basketAPI';
import { STATIC_URL } from '../../http/consts';
import deleteIcon from '../../img/basket/delete.svg';
import { delItemBasket } from '../../store/actions';
const ItemBasket = ({img:imgName, name, count, price, item}) => {
  const img = `${STATIC_URL}/${imgName}`;

  const dispatch = useDispatch();

  const removeItemBasket = async (item) => {
      await deleteFromBasket(item.id);
      dispatch(delItemBasket(item.id));
  }
  
  return (
    <div className="list-block__item item-basket">
        <div className="item-basket__img">
          <img src={img} alt="картинка товара"/>
        </div>
        <div className="item-basket__name">{name}</div>
        <div className="item-basket__price">{price}</div>
        <div className="item-basket__counter">{count}</div>
        <div className="item-basket__total">{price*count}</div>
        <div onClick={() => removeItemBasket(item)} className="item-basket__delete-icon">
          <img src={deleteIcon}  alt="delete" />
        </div>
    </div>
  );
};

export default ItemBasket;