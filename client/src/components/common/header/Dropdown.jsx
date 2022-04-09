import React from 'react';
import arrowRight from '../../../img/header/icons/arrowRight.svg'
const Dropdown = () => {
  const MenuItems = [
    {
      title: 'Букеты',
      path: '',
      cName: 'dropdown__link'
    },
    {
      title: 'Розы',
      path: '',
      cName: 'dropdown__link'
    },
    {
      title: 'Цветы в коробке',
      path: '',
      cName: 'dropdown__link'
    },
    {
      title: 'Композиции',
      path: '',
      cName: 'dropdown__link'
    },
    {
      title: 'Подарки',
      path: '',
      cName: 'dropdown__link'
    },
    {
      title: 'Подарочные корзины',
      path: '',
      cName: 'dropdown__link'
    },
    {
      title: 'Букеты невесты',
      path: '',
      cName: 'dropdown__link'
    },
    {
      title: 'Вкусные букеты',
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