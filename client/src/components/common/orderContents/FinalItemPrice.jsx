import React from 'react';
import RubleSign from '../templates/RubleSign';

const FinalItemPrice = ({name, count, price}) => {
    return (
        <div className='card-price__item item-block'>
            <div className='item-block__name'>{name}</div>
            <div className='item-block__count'>{count}</div>
            <div className='item-block__price'>{price} <RubleSign/></div>
        </div>
    );
};

export default FinalItemPrice;