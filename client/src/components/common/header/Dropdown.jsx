import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../../utils/routes';
const Dropdown = ({className}) => {
  const menuItems = [
    {
      title: 'О нас',
      path: paths.ABOUT,
      cName: 'dropdown__link'
    },
    {
      title: 'Доставка и оплата',
      path: paths.PAYMENT_DELIVERY,
      cName: 'dropdown__link'
    },
    {
      title: 'Контакты',
      path: paths.СONTACTS,
      cName: 'dropdown__link'
    },
  ];
  return (
    <div className={className} >
      <div className='dropdown__list'>
        {menuItems.map((item, index) => {
          return (
            <Link to={item.path} key={index} className='dropdown__item'>
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;