import React from 'react';
import arrowRight from '../../../img/header/icons/arrowRight.svg'
const Dropdown = () => {
  const MenuItems = [
    {
      title: 'О нас',
      path: '',
      cName: 'dropdown__link'
    },
    {
      title: 'Доставка и оплата',
      path: '',
      cName: 'dropdown__link'
    },
    {
      title: 'Контакты',
      path: '',
      cName: 'dropdown__link'
    },
  ];
  return (
    <div className='dropdown'>
      <ul className='dropdown__list'>
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className='dropdown__item'>
              <a className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;