import React from 'react';
import backet from '../../img/header/icons/basker1.svg';
const BasketButton = ({count}) => {
  return (
    <div className="contacts-purchases__basket"><img src={backet} alt="backet" /></div>
  );
}

export default BasketButton;