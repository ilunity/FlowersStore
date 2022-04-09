import React from 'react';
import backet from '../../img/header/icons/shopping-basket.svg';
const BasketButton = ({sum = 0}) => {
  return (
    <div className="contacts-purchases__basket">
      <img src={backet} style={{width:'32px', height:'32px'}} alt="backet" />
      <div className='contacts-purchases__sum'>₴ {sum}</div>
    </div>
  );
}

export default BasketButton;