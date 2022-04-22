import React from 'react';
import { menuItems } from '../../../utils/consts';
const Dropdown = ({className}) => {
  
  return (
    <div className={className} >
      <ul className='dropdown__list'>
        {menuItems.map((item, index) => {
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