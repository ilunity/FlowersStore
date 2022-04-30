import React from 'react';
import RubleSign from '../templates/RubleSign';

const FinaliItemPrice = ({name, count, price}) => {
  return (
    <div className='card-price__item item-block'>
      <div className='item-block__name'>{name}</div>
      <div className='item-block__count'>{count}</div>
      <div className='item-block__price'>{price} <RubleSign marginLeft={'3'}/></div>
    </div>
  );
};

export default FinaliItemPrice;